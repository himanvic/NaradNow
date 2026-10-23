# NaradNow Cloudflare Worker

Deploy `index.js` as a Cloudflare Worker. Create a secret named `NEWS_DATA_API_KEY`. Optional text variable `ALLOWED_ORIGIN` can restrict browser-origin CORS to your Pages URL. Endpoint: `/api/news?category=top&language=en&limit=18&search=`.

No libraries or paid services are required. The Worker combines NewsData.io JSON with the official Press Information Bureau RSS feed, deduplicates, caches the combined output where the Cloudflare Cache API is available, and returns source status. The NewsData.io key stays in the Worker secret and never reaches the frontend.
