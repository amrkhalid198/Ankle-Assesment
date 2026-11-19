const SETTINGS = PropertiesService.getScriptProperties();
const HEADERS = ['Timestamp', 'Email', 'Score', 'Tier', 'Program email requested', 'Status', 'Sent at', 'Request ID'];
const ASSESSMENT_ORIGIN = 'https://amrkhalid198.github.io';
const PROGRAM_URL = 'https://amrkhalid198.github.io/Landing-page/';
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
    console.log('Registration sheet: ' + sheet_().getParent().getUrl());
  });
}

function doPost(event) {
  let id = '';
  try {
    const raw = event?.parameter?.payload || '';
    if (raw.length > 1100) return reply_('', false, 'invalid');
    const request = JSON.parse(raw);
    id = REQUEST_ID.test(request?.id) ? request.id : '';
    const { score, tier, optIn } = request;
    const email = normalizeEmail_(request.email);
    if (!id || !email || !Number.isInteger(score) || score < 0 || score > 100 ||
        !TIERS.includes(tier) || typeof optIn !== 'boolean') return reply_(id, false, 'invalid');

    return withLock_(function () {
      const sheet = sheet_();
      const rows = rows_(sheet);
      if (rows.some(row => row[7] === id)) return reply_(id, true);
      const hourAgo = Date.now() - 60 * 60 * 1000;
      if (rows.filter(row => row[7] && row[0] instanceof Date && row[0].getTime() >= hourAgo).length >=
          MAX_REGISTRATIONS_PER_HOUR) return reply_(id, false, 'rate_limited');

      const known = rows.some(row => normalizeEmail_(row[1]) === email && PENDING_OR_CONTACTED.includes(row[5]));
      const status = !optIn ? 'No email requested' : known ? 'Duplicate' : 'Pending';
      sheet.appendRow([new Date(), email, score, tier, optIn, status, '', id]);
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
    if (!rows.some(row => row[4] === true && (!row[5] || row[5] === 'Pending'))) return;
    const contacted = new Set(rows.filter(row => CONTACTED.includes(row[5])).map(row => normalizeEmail_(row[1])));
    const today = Utilities.formatDate(new Date(), 'Africa/Cairo', 'yyyy-MM-dd');
    const sentToday = JSON.parse(SETTINGS.getProperty('DAILY_EMAIL_ATTEMPTS') || '{}');
    let attempts = sentToday.day === today ? Number(sentToday.count) : 0;
    let budget = Math.min(5, MAX_ATTEMPTS_PER_DAY - attempts, MailApp.getRemainingDailyQuota());

    for (const [index, row] of rows.entries()) {
      if (budget <= 0) break;
      if (row[4] !== true || (row[5] && row[5] !== 'Pending')) continue;
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
        sendProgramEmail_(email);
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

function sendProgramEmail_(email) {
  const subject = 'تفاصيل برنامج Bulletproof Ankle بعد تقييم الكاحل';
  const intro = 'أهلاً، شكراً إنك عملت تقييم الكاحل.';
  const body = 'لو حابب تعرف إزاي التمرين بيتدرّج من القوة والتوازن لحد الجري والنط، هتلاقي تفاصيل المراحل في صفحة برنامج Bulletproof Ankle.';
  const signature = 'عمرو خالد — أخصائي علاج طبيعي';
  MailApp.sendEmail({
    to: email,
    subject: subject,
    name: 'Amr Khalid | Bulletproof Ankle',
    body: [intro, body, 'شوف تفاصيل البرنامج — ' + PROGRAM_URL, signature].join('\n\n'),
    htmlBody: '<div dir="rtl" lang="ar"><p>' + intro + '</p><p>' + body +
      '</p><p><a href="' + PROGRAM_URL + '">شوف تفاصيل البرنامج</a></p><p>' + signature + '</p></div>'
  });
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
