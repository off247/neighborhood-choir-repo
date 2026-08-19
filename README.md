# The Neighborhood Choir — Website

A React + Vite site for The Neighborhood Choir (Home, Calendar, Join, About), built from the
`website-wireframe-request` design handoff. The Join form and newsletter signup submit to two
Vercel serverless functions (`api/join.js`, `api/subscribe.js`) that append each submission as a
row in a Google Sheet.

## Develop

```bash
npm install
npm run dev
```

`npm run dev` only serves the frontend — the `/api` functions won't respond (Vite doesn't run
them). Submitting either form locally will show the "something went wrong" error, which is
expected. To test the functions locally, install the Vercel CLI and run `vercel dev` instead,
with a `.env` file (see `.env.example`).

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy: Vercel + a custom domain

Hosting moved from GitHub Pages to Vercel so the site can run the serverless functions the forms
need. GitHub Pages can't run server-side code at all, so this isn't optional if the forms are
going to actually work.

1. **Import the repo into Vercel.** At [vercel.com](https://vercel.com), "Add New… → Project",
   pick this GitHub repo. Vercel auto-detects Vite; the default build settings work as-is. Deploy.
2. **Add the environment variables** (Project → Settings → Environment Variables) from the Google
   Sheets setup below: `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`.
   Redeploy after adding them (env vars only apply to new deploys).
3. **Point the domain at it.** Project → Settings → Domains → add `theneighborhoodchoir.com` and
   `www.theneighborhoodchoir.com`. Vercel shows the exact DNS records to add (usually an `A`
   record for the apex and a `CNAME` for `www`) — add those with wherever the domain is
   registered. Propagation is usually minutes, sometimes up to a day.

After this, every push to `main` auto-deploys — no GitHub Actions needed (the old
`.github/workflows/deploy.yml` for GitHub Pages has been removed).

## Google Sheets setup (one-time)

The functions authenticate as a Google service account, not as you — so submissions land in a
sheet you own without anyone needing to log in.

1. **Create a Google Cloud project** (or reuse one) at
   [console.cloud.google.com](https://console.cloud.google.com).
2. **Enable the Google Sheets API**: APIs & Services → Enable APIs and Services → search "Google
   Sheets API" → Enable.
3. **Create a service account**: APIs & Services → Credentials → Create Credentials → Service
   Account. Any name is fine (e.g. `choir-site-forms`). No project role needs to be granted.
4. **Create a key for it**: open the service account → Keys → Add Key → Create new key → JSON.
   This downloads a `.json` file — keep it private, it's a credential.
5. **Create the Google Sheet.** Add two tabs named exactly `Join` and `Newsletter`. Give `Join` a
   header row: `Timestamp, First name, Last name, Email, Part, Has name tag, Note`. Give
   `Newsletter` a header row: `Timestamp, Email`.
6. **Share the sheet with the service account.** Click Share on the sheet, paste in the service
   account's email (the `client_email` field in the downloaded JSON, looks like
   `choir-site-forms@your-project.iam.gserviceaccount.com`), give it Editor access.
7. **Set the three environment variables** in Vercel (see step 2 above), reading from that same
   JSON file:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — the `client_email` field.
   - `GOOGLE_PRIVATE_KEY` — the `private_key` field, pasted as-is (Vercel's env var UI handles the
     embedded newlines fine).
   - `GOOGLE_SHEET_ID` — from the sheet's URL:
     `docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit`.

## Known TODOs

- No spam protection on either form (no honeypot, no rate limiting, no CAPTCHA). Fine at low
  volume; revisit if the sheet starts filling with junk.
