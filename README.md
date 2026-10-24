# NaradNow — India, in the know.

**Live website:** https://naradnow.pages.dev/  
**GitHub project:** https://github.com/himanvic/NaradNow  
**Developed by:** [himanvic](https://github.com/himanvic)

NaradNow is a calm, source-linked Indian news and current-affairs reader. It brings general newsroom coverage and official government announcements into one readable interface while keeping original publisher links close to every story.

## Reader experience

- A refined **Dark Forest**, **Warm Paper**, and **Auto** theme system using system fonts so the app shell does not need a web-font download.
- Responsive editorial homepage with a featured-story area, a clean news ticker, a Bento-style story feed, and an accessible primary navigation.
- Search shortcuts: `/` or `Ctrl/Cmd + K` focus headline search.
- Category filters for Politics, Education, Health, Finance, Business, Science, Technology, Environment, Sports, World and Government Schemes.
- Original-source labels, language badges, publication-time handling, spam/lottery and obvious entertainment-promo filtering, duplicate filtering, and load-more support when a next-page token is provided.
- Quick Reader drawer, locally saved stories, reading-list `.txt` export, and a three-question briefing quiz grounded in loaded headlines and source labels.
- Optional UPSC/CSE and SSC/General Awareness study mode with keyword-based topic suggestions and local revision markers.
- **Explore India**: animated city/state cards based on place mentions in the currently loaded headlines. Mention counts are not a ranking of news importance.
- Best-effort offline app shell and a fallback to previously cached headlines after a successful online visit.
- Native system cursor with subtle card-following border glow on desktop; normal touch interactions on mobile. Reduced-motion preferences are respected.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | Page structure, editorial sections, reader drawer and quiz dialog |
| `styles.css` | Unified theme system, responsive layout, typography, cards and motion |
| `app.js` | Feed UI, language/theme state, reader drawer, search, study features and quiz |
| `sw.js` | Versioned app-shell cache and best-effort offline behavior |
| `favicon.svg` | NaradNow brand mark |
| `worker/index.js` | Cloudflare Worker source for general headlines and PIB RSS |
| `worker/README.md` | Worker setup and deployment notes |
| `CHANGELOG.md` | Notable product changes |

## Run locally

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Serve `index.html` with VS Code Live Server or another static HTTP server.
4. The frontend uses the deployed Worker endpoint configured near the top of `app.js`. When offline, the page may show previously cached headlines; new articles require an internet connection.

## Deployment

The static website is hosted on Cloudflare Pages and connected to this GitHub repository. Push commits to the production branch to deploy frontend updates.

The news Worker is deployed separately unless a Worker deployment pipeline has been configured. The current endpoint is `https://naradnow-api.notesfriendair1.workers.dev/api/news`. For manual Worker updates, open Cloudflare Dashboard → Workers & Pages → `naradnow-api`, replace the editor code with `worker/index.js`, then deploy.

The Worker secret must be named `NEWS_DATA_API_KEY`. Keep the value only in Cloudflare secrets; never commit the actual key into source files, documentation, screenshots, or the public repository. Frontend-only updates do not require redeploying the Worker.

## Content and limitations

- NaradNow is an independent reader, not an official government website. Headlines and publisher content remain the property of original publishers; use the links to read their complete reports.
- Official government press releases appear in a separate desk to distinguish them from newsroom coverage.
- Publication times depend on timestamps supplied by each publisher/feed; missing dates are shown as unavailable rather than invented.
- City/state counts are heuristic matches in the currently loaded headlines only. They can miss locations or match a term unexpectedly and should not be interpreted as an overall ranking.
- UPSC/SSC topic suggestions are keyword-based prompts, not official syllabus classifications. The quiz draws from headline and source metadata and is for revision, not independent fact-checking. Verify important information against the original report.
- Saved stories and revision markers stay in browser storage on the current device. No account is required.
- Offline support is best effort. The app shell and previously cached headlines may be available, but fetching new stories requires a connection.

## Accessibility and shortcuts

- Press `/` or `Ctrl/Cmd + K` to focus search.
- Story cards and region cards can be opened with Enter or Space when focused.
- Press Escape to close the reader drawer or quiz dialog.
- Touch devices use normal native cursor/touch behavior; interactive elements provide clear focus and press feedback.
- The native system cursor remains visible while the quiz dialog is open.
- Reduced-motion settings minimize transitions and stop the moving ticker.

## Credits

**Developed by [himanvic](https://github.com/himanvic).**  
**Repository:** [github.com/himanvic/NaradNow](https://github.com/himanvic/NaradNow)  
**Live website:** [naradnow.pages.dev](https://naradnow.pages.dev/)


## Quiz quality note

The briefing quiz asks only questions grounded in the currently loaded headlines and source labels. It does not invent factual answers from a random missing word in a headline. Treat it as a briefing-recall exercise and open original reports for full current-affairs context.
