const SETTINGS = PropertiesService.getScriptProperties();
const HEADERS = ['Timestamp', 'Email', 'Score', 'Tier', 'Program follow-up', 'Status', 'Sent at', 'Request ID'];
const ASSESSMENT_ORIGIN = 'https://amrkhalid198.github.io';
const PROGRAM_URL = 'https://amrkhalid198.github.io/Landing-page/';
const PROGRAM_BANNER_URL = 'https://amrkhalid198.github.io/Ankle-Assesment/assets/bulletproof-ankle-email.jpg';
const EMAIL_DELAY_MS = 60 * 60 * 1000;
const EMAIL = /^[a-z0-9][a-z0-9.!#$%&'*+/=?^_{}|~-]*@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i;
const REQUEST_ID = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
const TIERS = ['severe', 'moderate', 'mild', 'optimal'];
const CONTACTED = ['Sending', 'Sent', 'Needs review'];
const PENDING_OR_CONTACTED = ['Pending', ...CONTACTED];
const MAX_ATTEMPTS_PER_DAY = 15;
const MAX_REGISTRATIONS_PER_HOUR = 35;

function setupAssessmentAutomation() {
  withLock_(function () {
    if (!SETTINGS.getProperty('SHEET_ID')) {
      const file = SpreadsheetApp.create('Ankle Assessment — Registrations');
      file.setSpreadsheetTimeZone('Africa/Cairo');
      const sheet = file.getSheets()[0].setName('Registrations');
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
      sheet.setFrozenRows(1);
      sheet.setColumnWidth(2, 260);
      SpreadsheetApp.flush();
      SETTINGS.setProperty('SHEET_ID', file.getId());
    }
    if (!ScriptApp.getProjectTriggers().some(t => t.getHandlerFunction() === 'sendQueuedProgramEmails')) {
      ScriptApp.newTrigger('sendQueuedProgramEmails').timeBased().everyMinutes(5).create();
    }
    const sheet = sheet_();
    sheet.getRange(1, 5).setValue(HEADERS[4]);
    console.log('Registration sheet: ' + sheet.getParent().getUrl());
  });
}

function doPost(event) {
  let id = '';
  try {
    const raw = event?.parameter?.payload || '';
    if (raw.length > 1100) return reply_('', false, 'invalid');
    const request = JSON.parse(raw);
    id = REQUEST_ID.test(request?.id) ? request.id : '';
    const { score, tier, optIn, flow } = request;
    const automaticFollowUp = flow === 'program-follow-up';
    const followUp = automaticFollowUp || optIn === true;
    const email = normalizeEmail_(request.email);
    if (!id || !email || !Number.isInteger(score) || score < 0 || score > 100 ||
        !TIERS.includes(tier) || (!automaticFollowUp && typeof optIn !== 'boolean')) return reply_(id, false, 'invalid');

    return withLock_(function () {
      const sheet = sheet_();
      const rows = rows_(sheet);
      if (rows.some(row => row[7] === id)) return reply_(id, true);
      const hourAgo = Date.now() - 60 * 60 * 1000;
      if (rows.filter(row => row[7] && row[0] instanceof Date && row[0].getTime() >= hourAgo).length >=
          MAX_REGISTRATIONS_PER_HOUR) return reply_(id, false, 'rate_limited');

      const known = rows.some(row => normalizeEmail_(row[1]) === email && PENDING_OR_CONTACTED.includes(row[5]));
      const status = !followUp ? 'No email requested' : known ? 'Duplicate' : 'Pending';
      sheet.appendRow([new Date(), email, score, tier, followUp, status, '', id]);
      SpreadsheetApp.flush();
      return reply_(id, true);
    });
  } catch (_) {
    console.error('Assessment registration failed.');
    return reply_(id, false, 'unavailable');
  }
}

function sendQueuedProgramEmails() {
  withLock_(function () {
    const sheet = sheet_();
    const rows = rows_(sheet);
    const sendBefore = Date.now() - EMAIL_DELAY_MS;
    const due = row => row[4] === true && (!row[5] || row[5] === 'Pending') &&
      row[0] instanceof Date && row[0].getTime() <= sendBefore;
    if (!rows.some(due)) return;
    const contacted = new Set(rows.filter(row => CONTACTED.includes(row[5])).map(row => normalizeEmail_(row[1])));
    const today = Utilities.formatDate(new Date(), 'Africa/Cairo', 'yyyy-MM-dd');
    const sentToday = JSON.parse(SETTINGS.getProperty('DAILY_EMAIL_ATTEMPTS') || '{}');
    let attempts = sentToday.day === today ? Number(sentToday.count) : 0;
    let budget = Math.min(5, MAX_ATTEMPTS_PER_DAY - attempts, MailApp.getRemainingDailyQuota());

    for (const [index, row] of rows.entries()) {
      if (budget <= 0) break;
      if (!due(row)) continue;
      const email = normalizeEmail_(row[1]);
      const status = sheet.getRange(index + 2, 6);
      if (!email || contacted.has(email)) {
        status.setValue(email ? 'Duplicate' : 'Invalid address');
        continue;
      }

      status.setValue('Sending');
      SpreadsheetApp.flush();
      contacted.add(email);
      budget--;
      attempts++;
      SETTINGS.setProperty('DAILY_EMAIL_ATTEMPTS', JSON.stringify({ day: today, count: attempts }));
      try {
        MailApp.sendEmail(makeProgramEmail_(email, row[2], row[3]));
      } catch (_) {
        status.setValue('Needs review');
        console.error('Program email needs review at sheet row ' + (index + 2));
        continue;
      }
      sheet.getRange(index + 2, 6, 1, 2).setValues([['Sent', new Date()]]);
      SpreadsheetApp.flush();
    }
  });
}

function makeProgramEmail_(email, score, tier) {
  const byTier = {
    mild: ['درجة عدم استقرار بسيطة', 'نتيجتك كويسة نسبيًا. لو بتلعب رياضة، ده وقت كويس تشتغل على ثبات الكاحل قبل ما تزود شدة التمرين.'],
    moderate: ['درجة عدم استقرار متوسطة', 'ممكن تحس إن الكاحل كويس في يومك العادي، وتلاحظ الفرق أكتر مع الجري أو القفز أو تغيير الاتجاه. وده اللي بنشتغل عليه بالتدريج في البرنامج.'],
    severe: ['درجة عدم استقرار عالية', 'النتيجة بتشير إن القوة والثبات والتحكّم محتاجين اهتمام، خصوصًا لو رياضتك فيها جري أو قفز أو تغيير اتجاه.'],
    optimal: ['مستوى ثبات كويس', 'نتيجتك بتشير إن ثبات الكاحل كويس في الاختبارات اللي عملتها. تقدر تشوف إزاي البرنامج بيتدرّج من التوازن والقوة للتمارين الخاصة بالرياضة.']
  };
  const intro = 'أهلاً، ده ملخص نتيجتك في اختبار الكاحل.';
  const result = Number.isInteger(score) && score >= 0 && score <= 100 && TIERS.includes(tier)
    ? { line: 'درجتك في التقييم الذاتي ' + score + '/100 — ' + byTier[tier][0], detail: byTier[tier][1] }
    : null;
  const offer = 'عشان كده عملت Bulletproof Ankle Program. البرنامج معمول عشان يساعدك تبني كاحل أقوى وأكثر ثباتًا ويجهزك لمتطلبات رياضتك.';
  const details = 'في ١٠ أسابيع، هتلاقي ٤ مراحل بتبدأ بالقوة والثبات، وبتوصل بالتدريج للجري والقفز وتغيير الاتجاه. كل مرحلة ليها معايير واضحة تعرف منها إمتى تنتقل للي بعدها.';
  const action = 'شوف تفاصيل البرنامج والمراحل';
  const signature = 'أنا عمرو، أخصائي علاج طبيعي متخصص في إصابات الكاحل.';
  const footer = 'وصلك الإيميل ده عشان سجّلت في تقييم الكاحل المجاني.';
  const title = 'نتيجتك في اختبار الكاحل | Bulletproof Ankle';
  const resultHtml = result ? '<div style="padding:14px 16px;background:#f7f3ef;border-right:4px solid #c74f22;border-radius:6px;margin:16px 0">' +
    '<strong>' + result.line + '</strong><p style="margin:6px 0 0">' + result.detail + '</p></div>' : '';
  const paragraph = copy => '<p style="margin:0 0 14px">' + copy + '</p>';
  const htmlBody = '<!doctype html><html lang="ar" dir="rtl"><body style="margin:0;background:#f0efed;color:#231f1d">' +
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f0efed"><tr><td align="center" style="padding:16px 10px">' +
    '<table dir="rtl" role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#fff;text-align:right;font-family:Arial,sans-serif;font-size:16px;line-height:1.75">' +
    '<tr><td><a href="' + PROGRAM_URL + '"><img src="' + PROGRAM_BANNER_URL +
      '" alt="رياضي بيتدرّب على ثبات الكاحل" width="560" style="display:block;width:100%;max-width:560px;height:auto;border:0"></a></td></tr>' +
    '<tr><td style="padding:24px 20px 12px"><h1 style="margin:0 0 12px;font-size:24px;line-height:1.35">نتيجتك في اختبار الكاحل</h1>' +
    paragraph(intro) + resultHtml + paragraph(offer) + paragraph(details) +
    '<p style="margin:22px 0"><a href="' + PROGRAM_URL +
      '" style="display:inline-block;background:#a13918;color:#fff;padding:9px 16px;border-radius:6px;font-weight:bold;text-decoration:none">' +
      action + '</a></p>' + paragraph(signature) + '</td></tr>' +
    '<tr><td style="padding:12px 20px;border-top:1px solid #dedbd7;font-size:13px;color:#59514b">' +
      footer + '</td></tr></table></td></tr></table></body></html>';

  return {
    to: email,
    subject: title,
    name: 'Amr Khalid | Bulletproof Ankle',
    body: [intro, result && result.line, result && result.detail, offer, details,
      action + ' — ' + PROGRAM_URL, signature, footer].filter(Boolean).join('\n\n'),
    htmlBody
  };
}

function normalizeEmail_(value) {
  const email = String(value || '').trim().toLowerCase();
  return email.length <= 254 && EMAIL.test(email) ? email : '';
}

function sheet_() {
  return SpreadsheetApp.openById(SETTINGS.getProperty('SHEET_ID')).getSheetByName('Registrations');
}

function rows_(sheet) {
  const count = sheet.getLastRow() - 1;
  return count > 0 ? sheet.getRange(2, 1, count, HEADERS.length).getValues() : [];
}

function withLock_(action) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try { return action(); } finally { lock.releaseLock(); }
}

function reply_(id, ok, error) {
  const payload = JSON.stringify({ type: 'ankle-registration', id, ok, error }).replace(/</g, '\\u003c');
  const html = '<!doctype html><meta charset="utf-8"><script>window.top.postMessage(' +
    payload + ', ' + JSON.stringify(ASSESSMENT_ORIGIN) + ');</script>';
  return HtmlService.createHtmlOutput(html).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
