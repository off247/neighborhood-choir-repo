# The Neighborhood Choir — Website

A React + Vite site for The Neighborhood Choir (Home, Calendar, Join, About), built from the
`website-wireframe-request` design handoff.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy (GitHub Pages)

A workflow at `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages on every
push to `main`. To turn it on:

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).

## Known TODOs

- **Join page form** (`src/pages/JoinPage.jsx`) — currently UI-only; "Send it" just shows the
  confirmation screen without submitting anywhere. Wire it up to a real endpoint (e.g.
  [Formspree](https://formspree.io)) when ready.
- **Footer newsletter signup** (`src/components/Footer.jsx`) — same story; needs a real mailing
  list service (Mailchimp, Buttondown, etc.).
