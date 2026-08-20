// Adds a contact to the configured EmailOctopus list. Best-effort — the
// Google Sheet write is this app's source of truth for signups, so a
// failure here must never fail the subscribe request itself.
export async function addToEmailOctopus(email) {
  const apiKey = process.env.EMAILOCTOPUS_API_KEY;
  const listId = process.env.EMAILOCTOPUS_LIST_ID;
  if (!apiKey || !listId) return;

  const res = await fetch(`https://api.emailoctopus.com/lists/${listId}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email_address: email, status: 'SUBSCRIBED' }),
  });

  if (res.ok) return;

  const body = await res.json().catch(() => ({}));
  // Already on the list — not a real failure.
  if (body?.error?.code && /EXISTS/i.test(body.error.code)) return;

  throw new Error(`EmailOctopus request failed: ${res.status} ${JSON.stringify(body)}`);
}
