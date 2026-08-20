# The Neighborhood Choir — Website

A React + Vite site for The Neighborhood Choir (Home, Calendar, Join, About), built from the
`website-wireframe-request` design handoff. The Join form and newsletter signup submit to two
Vercel serverless functions (`api/join.js`, `api/subscribe.js`) that append each submission as a
row in a Google Sheet; the newsletter signup can also optionally sync into an EmailOctopus list.

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
   Sheets setup below: `APPS_SCRIPT_URL`, `APPS_SCRIPT_SECRET`. Redeploy after adding them (env
   vars only apply to new deploys).
3. **Point the domain at it.** Project → Settings → Domains → add `theneighborhoodchoir.com` and
   `www.theneighborhoodchoir.com`. Vercel shows the exact DNS records to add (usually an `A`
   record for the apex and a `CNAME` for `www`) — add those with wherever the domain is
   registered. Propagation is usually minutes, sometimes up to a day.

After this, every push to `main` auto-deploys — no GitHub Actions needed (the old
`.github/workflows/deploy.yml` for GitHub Pages has been removed).

## Google Sheets setup (one-time)

The functions relay each submission to a small script attached directly to the Sheet (Google
Apps Script), rather than authenticating as a service account. This runs under your own Google
account's permissions — no API key of any kind, so it works even on Google Workspace accounts
that block service-account key creation.

1. **Create the Google Sheet.** Add two tabs named exactly `Join` and `Newsletter`. Give `Join` a
   header row: `Timestamp, First name, Last name, Email, Part, Has name tag, Note`. Give
   `Newsletter` a header row: `Timestamp, Email`.
2. **Open the script editor.** In the Sheet: Extensions → Apps Script. Delete whatever's in the
   default `Code.gs` and paste in the contents of this repo's `apps-script/Code.gs`.
3. **(Recommended) Set a shared secret.** In the Apps Script editor: Project Settings (gear icon)
   → Script Properties → Add script property. Name it `SECRET`, value any long random string
   (e.g. generate one with `openssl rand -hex 24`). This stops random people from POSTing to your
   Web App URL once it's public — the function checks it. Skip this and the check is skipped too.
4. **Deploy as a Web App.** Deploy → New deployment → gear icon → Web app. Set **Execute as:
   Me**, **Who has access: Anyone**. Deploy, and authorize it when Google prompts (it's your own
   script touching your own Sheet — the scary-looking "unverified app" warning is expected for a
   personal script and fine to click through). Copy the Web App URL it gives you — it ends in
   `/exec`.
5. **Set the environment variables** in Vercel (Project → Settings → Environment Variables):
   - `APPS_SCRIPT_URL` — the `/exec` URL from step 4.
   - `APPS_SCRIPT_SECRET` — the same string you set as the `SECRET` script property in step 3
     (omit both if you skipped that step).

Redeploy the Vercel project after adding/changing env vars — they only apply to new deploys.

**If you ever edit `apps-script/Code.gs`:** changes in the script editor don't take effect until
you make a **new deployment** (Deploy → Manage deployments → edit → New version), which gives you
a new `/exec` URL to update in Vercel — editing the code alone doesn't update the live one.

## EmailOctopus sync (optional)

The footer newsletter signup always writes to the `Newsletter` sheet tab. It can *also* add the
subscriber straight into an EmailOctopus list, so you don't have to manually import the sheet.
This is best-effort — if EmailOctopus is unreachable or misconfigured, the signup still succeeds
via the Sheet either way, it just won't show up in EmailOctopus until fixed.

1. **Get an API key.** EmailOctopus dashboard → Account → Integrations & API → API Keys → create
   one.
2. **Get your list ID.** Open the list you want subscribers added to; the ID is in that list's
   URL/settings in the EmailOctopus dashboard.
3. **Set the environment variables** in Vercel: `EMAILOCTOPUS_API_KEY`, `EMAILOCTOPUS_LIST_ID`.
   Redeploy after adding them.

Leaving these two unset disables the EmailOctopus sync entirely (no error, it's just skipped) —
signups keep landing in the Sheet as normal.

## Known TODOs

- No spam protection on either form (no honeypot, no rate limiting, no CAPTCHA). Fine at low
  volume; revisit if the sheet starts filling with junk.
