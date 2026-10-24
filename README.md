# NaradNow — India, in the know

**Live website:** https://naradnow.pages.dev/  
**GitHub project:** https://github.com/himanvic/NaradNow  
**Developed by:** [himanvic](https://github.com/himanvic)

NaradNow is an independent Indian news and current-affairs reader with a calm editorial layout, source-linked headlines, official government announcements, and local study tools.

## Reader features

- Dark Forest, Warm Paper, and Auto themes.
- English/Hindi interface with headline-language badges.
- Responsive Bento-style story cards, featured-story carousel, and swipeable mobile categories.
- Headline search (`/` or `Ctrl/Cmd + K`), duplicate filtering, and spam/lottery keyword filtering.
- Quick Reader drawer, local bookmarks, and reading-list `.txt` export.
- UPSC/CSE and SSC/General Awareness study topics with local revision markers.
- Five-question quiz generated from loaded headlines; questions are prompts for revision, not independent fact-checks.
- **Explore India:** expandable Cities/States section that counts place mentions in currently loaded headlines; selecting a place searches the feed. These counts describe this loaded sample and are not a ranking of importance.
- Best-effort offline shell and cached headline fallback after a successful online visit.
- Reduced-motion-friendly interactions and system pointer fallback inside the quiz dialog.

## Repository layout

| Path | Purpose |
| --- | --- |
| `index.html` | Page structure, Explore India disclosure, dialogs, and reader drawer |
| `styles.css` | Theme system, editorial layout, animations, and responsive styles |
| `app.js` | Feed UI, cursor handling, local study tools, place mention counts, and quiz |
| `worker/index.js` | Cloudflare Worker source for fetching/normalizing headlines |
| `worker/README.md` | Worker setup and deployment notes |
| `sw.js` | Offline app-shell cache (versioned on updates) |
| `CHANGELOG.md` | Notable project changes |

## Run locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Use Live Server or another static HTTP server to open `index.html`.
4. Live headlines require the public Worker endpoint configured at the top of `app.js`; previously cached content and saved items remain local to the browser.

## Deployment

The static site is hosted on Cloudflare Pages and connected to this GitHub repository. Push commits to the production branch to deploy frontend updates.

The news Worker is deployed separately unless a separate Worker deployment pipeline is configured. The current endpoint is `https://naradnow-api.notesfriendair1.workers.dev/api/news`. To update the live Worker, open Cloudflare Dashboard → Workers & Pages → `naradnow-api`, paste `worker/index.js` in the code editor, and deploy.

The Worker secret must be named `NEWS_DATA_API_KEY`. Keep the value only in Cloudflare secrets; never commit the actual key into source files, documentation, screenshots, or the public repository. Frontend-only updates do not require redeploying the Worker.

## Sources and limitations

- Headlines and publisher content remain the property of the original publishers. NaradNow links readers to source articles and is not an official government website.
- Official government updates are displayed separately from newsroom coverage.
- Place counts are heuristic matches in the currently loaded headlines only. A city/state can be missed or matched unexpectedly due to wording; counts are not evidence of overall news importance.
- UPSC/SSC topic suggestions are keyword-based and do not replace an official syllabus or editorial review.
- Quiz prompts are generated from headline/title/source metadata and should not be treated as verified exam answers. Verify important facts against the linked original source.
- Saved stories and revision markers stay in browser storage on the current device. No account is required.
- Offline mode is best-effort. The static app shell and previously cached headlines may be available, but fetching new news requires an internet connection.

## Accessibility and interaction

- Press `/` or `Ctrl/Cmd + K` to focus headline search.
- Use Enter or Space on focused story cards and region cards.
- Press Escape to close the Quick Reader or quiz dialog.
- Touchscreen devices and reduced-motion settings use the browser's system cursor.
- While the quiz dialog is open, NaradNow deliberately restores the system cursor because native dialogs render above ordinary page elements.

## Credits

**Developed by [himanvic](https://github.com/himanvic).**  
**Repository:** [github.com/himanvic/NaradNow](https://github.com/himanvic/NaradNow)  
**Live website:** [naradnow.pages.dev](https://naradnow.pages.dev/)
