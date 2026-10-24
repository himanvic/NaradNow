# NaradNow Cloudflare Worker

This Worker serves the `/api/news` endpoint used by the static Pages site. It aggregates NewsData.io headlines and official PIB RSS releases.

## Deploy

1. Open Cloudflare Dashboard → Workers & Pages → `naradnow-api` → Edit code.
2. Copy this folder's `index.js` into the editor (Cloudflare's default editor may name the file `worker.js`; the filename does not change the JavaScript behavior).
3. Confirm the `NEWS_DATA_API_KEY` secret exists under Settings → Variables and Secrets. Never paste the actual key into repository source.
4. Deploy and test `https://naradnow-api.notesfriendair1.workers.dev/api/news?category=top&language=en`.

Pages and the Worker are deployed separately unless an explicit Git-based Worker build is configured. Pushing `worker/index.js` to GitHub does not by itself redeploy the running Worker.

## Response checks

Look at `sources.newsdata.ok`, `sources.pib.ok`, `articles`, and `official`. An empty `official` array can mean the source was reachable but did not yield parseable releases; inspect the associated source error rather than assuming content is available.

## Free-tier behavior

NewsData.io quotas/delays and Cloudflare free-plan limits may change. Do not promise real-time or complete coverage. Keep source URLs and publication times visible, and direct readers to the original publisher.
