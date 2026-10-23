# NaradNow — India, in the know.

NaradNow is a responsive Indian news and current-affairs website. It combines general headlines from NewsData.io with official Government of India releases from the Press Information Bureau (PIB). The interface includes automatic/light/dark themes, English/Hindi UI switching, topic navigation, search, local bookmarks, source labels, and a demo quiz.

**Live website:** <https://naradnow.pages.dev/>

## Current deployment

- **Static site:** Cloudflare Pages connected to this GitHub repository. A commit/push to the production branch (usually `main`) triggers a Pages deployment.
- **News API:** Cloudflare Worker at <https://naradnow-api.notesfriendair1.workers.dev/>.
- **Endpoint:** <https://naradnow-api.notesfriendair1.workers.dev/api/news?category=top&language=en>
- **Worker secret:** `NEWS_DATA_API_KEY` is stored in Cloudflare Worker settings, not in this repository or the frontend.
- **Costs:** Designed to use free tiers only. Provider quotas, product terms, and free-tier limits can change; check the official service pages linked below.

## Files and folders

| File               | Purpose                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `index.html`       | Page structure and UI content                                                                                     |
| `styles.css`       | Responsive styling, animations, theme colors and mobile layouts                                                   |
| `app.js`           | Frontend behavior, API connection, date parsing, search, category filters, bookmarks, language and theme controls |
| `favicon.svg`      | NaradNow brand icon                                                                                               |
| `worker/index.js`  | Cloudflare Worker that combines NewsData.io JSON with PIB RSS data                                                |
| `worker/README.md` | Worker-specific deployment notes                                                                                  |

## Features

- Responsive layouts for desktop, tablet and mobile.
- Theme modes: Auto (follows the device setting), Light, and Dark.
- English/Hindi interface toggle.
- Categories including Top Stories, Politics, Education, Health, Finance, Business, Science, Technology, Environment, Sports, World, and Government updates.
- Search across the feed, source attribution, links to the original article, and bookmark storage in the browser.
- An Official Desk for PIB releases.
- Relative time labels parse API timestamps as UTC when the timestamp has no explicit timezone, avoiding browser-local timezone offsets. Worker responses normalize known timestamps to ISO UTC.
- News status indicators and a clear error/empty state if a source is unavailable.

## Setup and local preview

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Start `index.html` with the VS Code **Live Server** extension, or use any static local web server.
4. The frontend is already configured to call the deployed Worker through `API_BASE` near the top of `app.js`.

The static UI itself does not require a build step, Node.js, or a database. Local browser requests can be affected by the Worker CORS setting; the default Worker setting permits requests from browser origins. If you restrict CORS, allow your production Pages origin and any local origin you use for testing.

## News API and secure configuration

### NewsData.io

1. Create a free account at <https://newsdata.io/register>.
2. Copy the key from the NewsData.io dashboard.
3. In Cloudflare, open **Workers & Pages → `naradnow-api` → Settings → Variables and secrets**.
4. Add a **Secret** with the exact name `NEWS_DATA_API_KEY` and paste the key as its value.
5. Deploy the Worker again if the dashboard asks.

**Never put the API key in `app.js`, `index.html`, this README, a `.env` file committed to GitHub, or any public source file.** The browser only calls the Worker; the Worker adds the key on the server side.

NewsData.io can apply delays, daily credit limits, and source/plan restrictions. The app cannot guarantee every event is covered or that breaking news appears instantly. Check current terms at <https://newsdata.io/pricing> and <https://newsdata.io/documentation/latest-news-api>.

### PIB RSS

The Worker fetches PIB RSS and displays official releases separately from general news. Current feed URLs are configured in `worker/index.js` under `PIB_FEEDS`. The English request uses `Lang=1&Regid=3`; the Hindi request uses `Lang=2&Regid=3`.

PIB releases are primary sources for what the Government of India has announced. They are not a substitute for independent verification of claims in the releases. RSS content or language labels may change at the source, and an empty feed or an upstream format change can temporarily leave the Official Desk empty.

## Worker deployment and updates

The Worker is a separate Cloudflare resource; deploying the Pages site does **not** deploy Worker code automatically.

To deploy or update it manually:

1. Open <https://dash.cloudflare.com/> → **Workers & Pages** → `naradnow-api` → **Edit code**.
2. Replace the editor contents with the complete `worker/index.js` from this repository.
3. Click **Deploy**.
4. Confirm the existing `NEWS_DATA_API_KEY` secret is still present in the Worker settings. Do not paste the key into source code.

The Worker code is kept in the repository for source control. Unless Cloudflare Workers Builds is separately configured, commits to GitHub update the Pages site but do not automatically publish changes to the Worker.

### Test the API

Open this URL to inspect the response:

<https://naradnow-api.notesfriendair1.workers.dev/api/news?category=top&language=en>

Expected JSON fields include:

- `articles`: general news and mapped items for the current request.
- `official`: PIB releases for the Official Desk.
- `sources.newsdata.ok`: whether NewsData.io returned a successful result.
- `sources.pib.ok`: whether PIB returned parseable releases.
- `sources.pib.error`: details if PIB could not be fetched or parsed.
- `lastUpdated`: time the Worker created the response.

For a fresh diagnostic request, add a unique query parameter such as `&refresh=20261023-1`. The Worker cache key includes query parameters, so a unique value avoids reusing the same combined-response cache entry.

## Deploying the Pages website

This repository is intended for Git-connected Cloudflare Pages:

1. Push changes to the connected GitHub production branch.
2. In Cloudflare, open the Pages project and confirm the deployment status.
3. For this plain HTML/CSS/JS site, use no build command and set the build output directory to the repository root (`/`).
4. Refresh <https://naradnow.pages.dev/> with `Ctrl+F5` to bypass the browser cache after deployment.

After editing files in VS Code, use **Source Control → Commit → Sync Changes/Push**. Git-connected Pages will build/deploy the site automatically after the push.

## Known limitations

- NewsData.io's free tier may be delayed, rate-limited, or omit some articles.
- The site cannot promise complete coverage of every Indian or international event.
- Headline categories use a mix of API categories and simple keyword matching; classifications can be imperfect.
- PIB RSS can occasionally have upstream formatting changes or language mismatches; use `sources.pib.error` to diagnose feed problems.
- The quiz is a demo question, not a verified daily current-affairs quiz. Review questions before presenting them as exam-preparation material.
- Bookmarks are stored in local browser storage; they do not sync across devices and can be lost if browser data is cleared.
- A public news site should preserve original publisher links and respect each source's copyright and terms. The website links users to original articles rather than claiming ownership of them.

## Official links

- NewsData.io registration: <https://newsdata.io/register>
- NewsData.io pricing: <https://newsdata.io/pricing>
- NewsData.io documentation: <https://newsdata.io/documentation/latest-news-api>
- PIB RSS directory: <https://www.pib.gov.in/ViewRss.aspx?lang=1&reg=3>
- Cloudflare Pages: <https://pages.cloudflare.com/>
- Cloudflare Workers: <https://developers.cloudflare.com/workers/>
- Cloudflare Workers pricing: <https://developers.cloudflare.com/workers/platform/pricing/>
- India trademark public search: <https://tmrsearch.ipindia.gov.in/tmrpublicsearch>

## Brand note

`NaradNow` is the current project name. Before commercial use, independently check domain registration and applicable trademark databases. A basic web search is not legal clearance.
