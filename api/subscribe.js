import { appendRow } from './_lib/sheets.js';
import { addToEmailOctopus } from './_lib/emailoctopus.js';

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { email } = req.body || {};
  if (!isEmail(email)) {
    res.status(400).json({ error: 'A valid email is required' });
    return;
  }

  try {
    await appendRow('Newsletter', [new Date().toISOString(), email]);
  } catch (err) {
    console.error('newsletter submission failed:', err);
    res.status(500).json({ error: 'Could not save submission' });
    return;
  }

  try {
    await addToEmailOctopus(email);
  } catch (err) {
    // Best-effort: the signup already succeeded via the Sheet above.
    console.error('EmailOctopus sync failed:', err);
  }

  res.status(200).json({ ok: true });
}
