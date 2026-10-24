# NaradNow — coordinated frontend redesign update

This update is designed to merge into the existing GitHub-connected `NaradNow` project. It does not replace the repository history or change the Cloudflare Worker/API contract.

## Replace these files at the repository root

- `index.html`
- `styles.css`
- `app.js`
- `sw.js`
- `README.md`
- `CHANGELOG.md`
- `UPDATE-NOW.md`

Keep the existing `.git` folder, `favicon.svg`, `.gitignore`, and `worker/` folder. This frontend-only update does not require redeploying the Worker or changing the `NEWS_DATA_API_KEY` secret.

## Publish

1. Extract the update ZIP into the existing project folder and allow the seven files above to be replaced.
2. Open VS Code Source Control and review the diff.
3. Commit with `Redesign NaradNow editorial UI and responsive UX`.
4. Sync/push to GitHub and wait for Cloudflare Pages to deploy.
5. Open https://naradnow.pages.dev/ and hard-refresh with `Ctrl + F5`.

## What to verify

- Dark Forest / Warm Paper / Auto theme cycling.
- Story card hierarchy, hover glow and source/time/read-time metadata.
- Search via `/`, category changes, bookmarks, reader drawer and quiz dialog.
- Native cursor visibility over the quiz dialog.
- Mobile horizontal category bar and bottom-sheet reader.
- Explore India tabs, and the separate official announcements section.
- A repeat visit after loading the site once, to verify best-effort offline shell behavior.

## Notes

No API key is included. The production endpoint remains `https://naradnow-api.notesfriendair1.workers.dev/api/news`. The Worker stays separately deployed and its secret stays in Cloudflare. New headlines still require an internet connection.


## Latest quality fix

The quiz has been changed to use source-grounded headline recognition and publisher/PIB labels, capped at three questions. Generic story badges in the top feed read “NEWS” rather than “FOR YOU”. Obvious music/video promotions are filtered from the homepage feed/ticker. The Worker/API contract and Cloudflare secret are unchanged.
