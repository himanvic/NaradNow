# NaradNow — India, in the know

NaradNow is a static-first Indian news and current-affairs dashboard. It combines general headlines from NewsData.io with official releases from the Press Information Bureau (PIB), then presents them in a responsive editorial interface.

**Live website:** https://naradnow.pages.dev/  
**News API Worker:** https://naradnow-api.notesfriendair1.workers.dev/  
**Example endpoint:** https://naradnow-api.notesfriendair1.workers.dev/api/news?category=top&language=en

## Features

- Responsive editorial layout with a Dark Forest, Warm Paper, and Auto theme cycle.
- English/Hindi interface switch and visible language badges on stories.
- News categories, headline search (`/` focuses search), search terms and local saved stories.
- NewsData.io headlines and a separate official PIB desk through a Cloudflare Worker.
- Quality filter for spam-like lottery, jackpot, casino and horoscope headlines.
- Animated 6-story hero carousel, desktop custom cursor, reading-progress indicator and staggered card entrances.
- Quick Reader drawer (right-side drawer on desktop; bottom sheet on mobile).
- Three-question source quiz generated from the headlines loaded into the page.
- A service worker caches the static app shell after the first visit; locally cached feed responses can support read-only fallback when the network is unavailable.
- No front-end framework, build step, database, or paid client library is required. After the first successful visit over HTTPS, the service worker caches the static UI shell. Locally cached headlines may remain readable offline; refreshing live headlines requires an internet connection. Offline support is best-effort and depends on the browser retaining site storage.

## Repository structure

| Path | Purpose |
| --- | --- |
| `index.html` | Static page structure and dialog/drawer markup |
| `styles.css` | Themes, responsive layouts, interactions and motion preferences |
| `app.js` | UI behavior, data fetching, filtering, bookmarks, quiz and reader drawer |
| `worker/index.js` | Cloudflare Worker source for NewsData.io and PIB |
| `worker/README.md` | Instructions for deploying and configuring the Worker |
| `sw.js` | Service worker that caches the static UI shell for repeat/offline visits |
| `.gitignore` | Ignores local env and editor artifacts |
| `CHANGELOG.md` | Summary of notable project changes |

## Run locally

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Use the Live Server extension to open `index.html`, or run any basic static-file server.
4. The browser will call the configured Worker URL in `app.js` for live news. No API key belongs in the browser code.

## Deployment

### Static website (Cloudflare Pages)

The repository is connected to Cloudflare Pages. Push a commit to the configured production branch (usually `main`) to trigger a website deployment automatically. For a plain HTML/CSS/JS project, use no framework preset, no build command, and `.` as the build output directory if the root directory contains `index.html`.

### News API (Cloudflare Worker)

The Worker is deployed separately from Pages unless you explicitly configure a Worker build pipeline. To deploy code changes:

1. Open Cloudflare Dashboard → **Workers & Pages** → `naradnow-api` → **Edit code**.
2. Replace the editor code with `worker/index.js` from this repository.
3. Keep the `NEWS_DATA_API_KEY` secret configured in Worker settings.
4. Deploy the Worker.
5. Test the example endpoint above. A successful response reports source status under `sources.newsdata` and `sources.pib`.

### API secret

Create a NewsData.io key through the provider's official website. In Cloudflare Worker settings, add a **Secret** named exactly `NEWS_DATA_API_KEY`. Paste the key as the secret value. Never put the actual key in `app.js`, HTML, README, a public GitHub commit, or a screenshot.

The website's public `API_BASE` points to the deployed Worker URL. The key remains server-side.

## News sources and limitations

- **NewsData.io** supplies general news. Provider plan limits, article availability, delay, and language metadata depend on the current plan and provider responses.
- **PIB** supplies official government press releases. It is not a full feed of every national or international event. Some PIB article titles may be in Hindi even when the rest of the UI is English; titles are displayed as received and language badges are inferred from returned metadata/text.
- NaradNow filters obvious spam terms, but it cannot guarantee factual correctness or complete coverage. Readers should open original publisher links and verify high-impact claims from primary sources.
- The current quiz asks questions about publishers attached to loaded headlines; it does not claim to independently verify the underlying news facts.

## Privacy and offline behavior

Saved stories are stored in browser `localStorage`; feed cache is kept in the current browser session. No NaradNow account is required. The interface uses static files and system font fallbacks, but live data and remote article images need an internet connection. Local saved stories remain available on the device that saved them.

## Accessibility and motion

- Keyboard: press `/` to focus headline search, `Ctrl/Cmd + K` also focuses search, `Escape` closes the reader drawer.
- Interactive story cards can be opened with Enter or Space when focused.
- Custom cursor and motion-heavy behavior are disabled for coarse/touch pointers and when `prefers-reduced-motion: reduce` is active.

## License and attribution

News headlines, summaries, images, and article content belong to their respective publishers. NaradNow links to original sources and is an independent interface, not an official government website. Add a project license if you want to explicitly grant reuse rights to the code.
