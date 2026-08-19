// Relays a row to the Google Apps Script Web App bound to the choir's
// Sheet (see apps-script/Code.gs). Using Apps Script instead of the Sheets
// API + a service account key sidesteps org policies that block service
// account key creation — Apps Script runs under the sheet owner's own
// Google account, no key involved.
export async function appendRow(sheetName, values) {
  const url = process.env.APPS_SCRIPT_URL;
  const secret = process.env.APPS_SCRIPT_SECRET;
  if (!url) throw new Error('Missing APPS_SCRIPT_URL');

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, sheet: sheetName, values }),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`Apps Script request failed: ${res.status}`);

  const data = await res.json();
  if (!data.ok) throw new Error(data.error || 'Apps Script reported failure');
}
