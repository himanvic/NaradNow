# NaradNow Cloudflare Worker

This Worker supplies the news endpoint for the static NaradNow site.

## Deploy

1. Open Cloudflare Dashboard → Workers & Pages → `naradnow-api` → Edit code.
2. Replace the editor contents with `worker/index.js` from this repository.
3. Keep the existing secret named `NEWS_DATA_API_KEY` configured in Worker settings.
4. Deploy and test: `https://naradnow-api.notesfriendair1.workers.dev/api/news?category=top&language=en`.

The website and Worker deploy separately. Pushing `worker/index.js` to GitHub does not itself deploy the running Worker.

## Pagination

The Worker forwards an optional `page` token to NewsData.io and returns its `nextPage` token when supplied. The frontend only uses that token when the reader selects **Load more stories**. Provider pagination may be unavailable for some responses or plan limits.

## Security and reliability

Never commit the actual API key or paste it into frontend code. The key belongs only in Cloudflare's secret settings as `NEWS_DATA_API_KEY`. News coverage, delay, quotas, and official-feed availability depend on the upstream sources and may change.
