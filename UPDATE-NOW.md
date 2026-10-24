# Publishing the NaradNow UI/UX upgrade

1. Copy the updated `index.html`, `styles.css`, `app.js`, `README.md`, and `CHANGELOG.md` into the current GitHub-connected project folder, replacing the old files.
2. Do not remove or overwrite your Cloudflare `NEWS_DATA_API_KEY` secret. It is configured in the Worker dashboard, not in the static files.
3. In VS Code, save all files (`Ctrl+S`), inspect Source Control, commit, and push/sync to GitHub.
4. Cloudflare Pages should auto-deploy the static site after the push.
5. The API Worker endpoint is `https://naradnow-api.notesfriendair1.workers.dev/api/news`. If you change `worker/index.js`, deploy that Worker separately in Cloudflare unless Worker builds from Git are configured.
6. Hard-refresh `https://naradnow.pages.dev/` using `Ctrl+F5`.

Quick tests: click theme toggle (Dark Forest → Warm Paper → Auto), choose a story to open Quick Reader, press `/` to focus search, try the 6 hero dots, test the quiz, and check mobile layout with browser device emulation.

## Latest polish (24 Oct 2026)

- The pointer is now a single high-contrast arrow/hand with no trail or trailing ring.
- A visible “What’s new in NaradNow” panel summarizes recent features.
- The static cache version is v4; push the site files to GitHub to update Pages.
