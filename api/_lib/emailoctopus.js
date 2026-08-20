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
    body: JSON.stringify({ email_address: email, status: 'subscribed' }),
  });

  // 409 = "List contact already exists" — not a real failure.
  if (res.ok || res.status === 409) return;

  const body = await res.text().catch(() => '');
  throw new Error(`EmailOctopus request failed: ${res.status} ${body}`);
}
