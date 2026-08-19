// Paste this into the Sheet's Extensions → Apps Script editor, then deploy
// as a Web App (Execute as: Me, Who has access: Anyone). See README.md for
// the full walkthrough. Not run by Node/Vercel — this is Google Apps Script,
// bound to and only runnable from within the Sheet itself.

var ALLOWED_SHEETS = ['Join', 'Newsletter'];

function doPost(e) {
  var out;
  try {
    var body = JSON.parse(e.postData.contents);

    var expected = PropertiesService.getScriptProperties().getProperty('SECRET');
    if (expected && body.secret !== expected) {
      throw new Error('unauthorized');
    }

    if (ALLOWED_SHEETS.indexOf(body.sheet) === -1) {
      throw new Error('unknown sheet: ' + body.sheet);
    }
    if (!Array.isArray(body.values)) {
      throw new Error('values must be an array');
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(body.sheet);
    if (!sheet) throw new Error('sheet tab not found: ' + body.sheet);

    sheet.appendRow(body.values);
    out = { ok: true };
  } catch (err) {
    out = { ok: false, error: String(err) };
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(
    ContentService.MimeType.JSON
  );
}
