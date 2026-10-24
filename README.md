# NaradNow — India, in the know

**Live website:** https://naradnow.pages.dev/  
**GitHub repository:** https://github.com/himanvic/NaradNow  
**Developed by:** [himanvic](https://github.com/himanvic)

NaradNow is an independent Indian news and current-affairs reading experience. It brings together publisher headlines and official government announcements, with category browsing, search, a quiet editorial interface, study tools, and local saved stories.

## Reader features

- Dark Forest, Warm Paper, and Auto themes.
- English/Hindi interface and headline language badges.
- Responsive Bento-style stories, a rotating lead-story panel, and swipeable mobile categories.
- Search (`/` focuses search), duplicate/spam headline filtering, and source links.
- Quick Reader drawer, local bookmarks, and plain-text export of the reading list.
- UPSC/CSE and SSC/General Awareness topic suggestions, plus local revision markers.
- Five-question current-affairs quiz generated from available headlines. Quiz questions use the headline and supplied publisher/topic metadata; they are not an independent fact-check.
- Best-effort offline app shell and recently cached headlines after an initial online visit.

## Repository layout

| Path | Purpose |
| --- | --- |
| `index.html` | Page structure, dialogs, drawer, and accessible controls |
| `styles.css` | Theme system, layouts, transitions, and responsive behavior |
| `app.js` | Reading interactions, content filtering, study mode, quiz, and pagination |
| `worker/index.js` | Cloudflare Worker source for retrieving and normalizing news |
| `worker/README.md` | Worker setup and deployment notes |
| `sw.js` | Offline app-shell cache |
| `CHANGELOG.md` | Record of notable updates |

## Run locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Use Live Server or another static HTTP server to open `index.html`.
4. Live headlines require the public Worker endpoint configured in `app.js`; saved stories and previously cached content are local to the browser.

## Deployment notes

The static site is hosted on Cloudflare Pages and connected to this repository. Push commits to the production branch to publish frontend updates.

The news Worker is deployed separately unless a dedicated deployment pipeline has been configured. Its current public endpoint is `https://naradnow-api.notesfriendair1.workers.dev/api/news`. To deploy Worker source changes, open Cloudflare Dashboard → Workers & Pages → `naradnow-api`, replace the editor content with `worker/index.js`, and deploy.

The Worker secret must be named `NEWS_DATA_API_KEY`. Keep the actual key only in Cloudflare's secret settings; never commit it into source files, README text, screenshots, or the public repository. Do not replace the existing secret when updating only the frontend.

## Sources, privacy, and limitations

- Headlines and article content belong to their respective publishers. NaradNow links readers to original articles and is not an official government website.
- Official government announcements are shown in a separate section to distinguish them from newsroom coverage.
- Spam filtering and UPSC/SSC topic tags are heuristic suggestions; they can miss irrelevant stories or misclassify a relevant one. Verify important details with the original publisher or a primary source.
- The quiz is assembled locally from loaded headlines and metadata; it does not independently validate reported facts.
- Saved stories and revision markers are kept in browser storage on the current device. No NaradNow account is required.
- Offline mode is best-effort: static assets and cached headlines may remain available, but retrieving current news requires internet access.

## Accessibility and keyboard

- Press `/` or `Ctrl/Cmd + K` to focus headline search.
- Use Enter or Space to open a focused story card.
- Press Escape to close the Quick Reader.
- System cursor is retained on touch devices and when reduced motion is requested.

## Credits

**Developed by [himanvic](https://github.com/himanvic).**  
**Project repository:** [github.com/himanvic/NaradNow](https://github.com/himanvic/NaradNow)  
**Live website:** [naradnow.pages.dev](https://naradnow.pages.dev/)

News headlines, summaries, images, and article content remain the property of their original publishers. Add a license file if you want to grant explicit reuse rights to the code.
