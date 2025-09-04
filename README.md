# Netlify X.com (Twitter) Login App

This app lets users log in with X.com (Twitter) via a Netlify Function and displays "hello world".

## Setup

1. Get your X.com (Twitter) developer credentials (`CLIENT_ID`, `CLIENT_SECRET`).
2. On Netlify, set these as environment variables:
   - `X_CLIENT_ID`
   - `X_CLIENT_SECRET`
   - `URL` (Netlify sets this automatically)
3. Deploy to Netlify.
4. Ensure your Twitter/X.com app's callback URL is set to `https://YOUR_SITE.netlify.app/.netlify/functions/x-login`.

## Run locally

```bash
npm install
npm start
```

## Deploy

Push to GitHub and connect the repo on Netlify.

---

**Note:** For production, improve PKCE and error handling.
