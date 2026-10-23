# NaradNow Cloudflare Worker

The Worker combines NewsData.io articles and official PIB RSS releases, normalizes timestamps, deduplicates items, applies basic category matching, and returns a JSON response for the NaradNow frontend.

## Endpoint

`https://naradnow-api.notesfriendair1.workers.dev/api/news?category=top&language=en&limit=18`

Supported query parameters:

- `category`: `top`, `politics`, `education`, `health`, `finance`, `business`, `science`, `technology`, `environment`, `sports`, `world`, or `government`.
- `language`: `en` or `hi` for the NewsData.io request and configured PIB feed.
- `search`: optional keyword phrase.
- `limit`: number of results requested (Worker clamps this to a safe range).

## Required secret

In Cloudflare Dashboard → Workers & Pages → `naradnow-api` → Settings → Variables and secrets, add a **Secret** named `NEWS_DATA_API_KEY`. Keep the real API key out of source code and GitHub.

Optional text variable: `ALLOWED_ORIGIN`. Set this to `https://naradnow.pages.dev` to restrict browser CORS to the production site. If doing local testing, include the local origin or temporarily use `*`. CORS is not authentication; anyone can still send requests to a public Worker endpoint outside a browser.

## Deploy

Worker code is deployed separately from the Cloudflare Pages static site:

1. Open the Worker and select **Edit code**.
2. Replace the editor content with `worker/index.js` from this repository.
3. Click **Deploy**.
4. Confirm `NEWS_DATA_API_KEY` remains configured as a secret.

Unless Cloudflare Workers Builds is explicitly configured, a GitHub push only updates the connected Pages site, not this Worker.
