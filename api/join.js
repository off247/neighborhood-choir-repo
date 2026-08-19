import { appendRow } from './_lib/sheets.js';

const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { firstName, lastName, email, part, hasNameTag, note } = req.body || {};
  if (!isEmail(email)) {
    res.status(400).json({ error: 'A valid email is required' });
    return;
  }

  try {
    await appendRow('Join', [
      new Date().toISOString(),
      firstName || '',
      lastName || '',
      email,
      part || '',
      hasNameTag || '',
      note || '',
    ]);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('join submission failed:', err);
    res.status(500).json({ error: 'Could not save submission' });
  }
}
