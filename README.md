# NaradNow — India, in the know.

A responsive, animated Indian news/current-affairs dashboard with automatic light/dark theme, manual theme cycling, English/Hindi UI toggle, topic filters, local bookmarks, a demo quiz, NewsData.io + PIB RSS aggregation, and a Cloudflare Worker proxy.

## Included

- `index.html` — semantic website layout
- `styles.css` — responsive editorial UI, auto dark/light palette, motion, mobile layouts
- `app.js` — theme/language settings, search, categories, bookmarks, quiz demo and API wiring
- `favicon.svg` — local brand icon
- `worker/index.js` — Cloudflare Worker endpoint that merges NewsData.io articles and official PIB RSS releases

## Important: live feeds need one setup step

The website ships in **preview mode** until you deploy the Worker and set its URL in `app.js`. The sample cards are clearly marked preview and are not real current news.

### 1. Get the free NewsData.io API key

1. Create a free account at <https://newsdata.io/register>.
2. Copy your API key from the provider dashboard.
3. Do **not** paste it into `app.js`, `index.html`, GitHub, or any public file.

NewsData.io free-plan quotas/delays are set by the provider and can change. The site labels source status rather than claiming each headline has been independently verified.

### 2. Deploy the free Cloudflare Worker

1. Sign in at <https://dash.cloudflare.com/>.
2. Open **Workers & Pages** → **Create** → **Worker**.
3. Name the Worker `naradnow-api` (if available), create it, and open **Edit code**.
4. Replace the editor code with the full contents of `worker/index.js`, then **Deploy**.
5. Open the Worker **Settings → Variables and Secrets** area.
6. Add a secret named `NEWS_DATA_API_KEY` and paste the key. Save/redeploy if the dashboard asks.
7. Optional: add a text variable `ALLOWED_ORIGIN` with your exact deployed Pages origin (for example, `https://naradnow.pages.dev`). Leave `*` while testing locally if needed. CORS is not a complete abuse-prevention system; caching is included, but a public Worker URL can still be requested outside a browser.
8. Test the endpoint by opening `https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev/api/news?category=top&language=en`.

The endpoint returns JSON with `articles`, `official`, `sources`, and a status `message`. If `NEWS_DATA_API_KEY` is absent, the Worker will still attempt the official PIB RSS feed.

### 3. Point the website at the Worker

Open `app.js` and replace the first configuration line:

```js
const API_BASE = "";
```

with your actual Worker URL, for example:

```js
const API_BASE = "https://naradnow-api.YOUR-SUBDOMAIN.workers.dev/api/news";
```

Use the URL Cloudflare gives you; the example above is not a real deployed endpoint. Save the file.

### 4. Deploy to Cloudflare Pages for ₹0

1. Create a GitHub repository and upload the contents of this folder (including `index.html`, `styles.css`, `app.js`, `favicon.svg`, and the `worker` folder).
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Choose the repository. For a plain static website use no build command and set the output directory to the repository root (`/`).
4. Deploy. A free `*.pages.dev` address is enough; buying a custom domain is optional.

You can also use Cloudflare Pages direct upload for the static files. Keep `worker/index.js` deployed separately as a Worker.

## Data sources and reliability notes

- NewsData.io: general news articles. The free plan may delay news, has request/credit limits and can return incomplete coverage. Check <https://newsdata.io/pricing> before relying on it.
- Press Information Bureau (PIB): official Government of India press-release RSS. Official releases are shown in a separate module. An official government release is a primary source for what that government body announced, not independent verification of every claim inside it.
- Categories like Education, Health and Finance are mapped to source-supported categories when available and keyword filters for PIB releases. Topic classification is heuristic, not a human editorial classification.
- The application preserves original source links and labels the official PIB feed separately. It does not guarantee complete news coverage, instant breaking news, or factual verification.
- The quiz is a demo interaction only. Replace it with reviewed questions before presenting it as a current-affairs quiz.

## Free static preview

You can open `index.html` locally to inspect the UI. Until `API_BASE` is configured, the visible sample cards are preview illustrations (not news), and the feed panel explains how to connect live sources. Some browsers restrict local `file://` behaviour; a simple local server such as VS Code Live Server is preferred for testing.

## Brand availability

`NaradNow` is the selected working name. A web search is not a domain, trademark or legal-clearance check. Before launching publicly, check the domain registrar and the official IP India trademark search for identical and similar marks, including the relevant goods/services classes.

Useful links:

- NewsData.io docs: <https://newsdata.io/documentation/latest-news-api>
- PIB RSS listing: <https://www.pib.gov.in/ViewRss.aspx?lang=1&reg=1>
- Cloudflare Pages: <https://pages.cloudflare.com/>
- Cloudflare Workers pricing/limits: <https://developers.cloudflare.com/workers/platform/pricing/>
- India trademark public search: <https://tmrsearch.ipindia.gov.in/tmrpublicsearch>
