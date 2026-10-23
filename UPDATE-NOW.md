# NaradNow deployment sync checklist

The frontend date fix and Worker parsing/date-normalization update are now included in the main project files. This file is only a short update checklist; see `README.md` for the full project guide.

## Update the website on GitHub

1. Open the local NaradNow folder in VS Code.
2. Confirm the root `app.js` begins with the deployed API endpoint:
   `https://naradnow-api.notesfriendair1.workers.dev/api/news`
3. Save, commit, and push/sync changes in VS Code.
4. Wait for the Git-connected Cloudflare Pages deployment to finish, then hard-refresh `https://naradnow.pages.dev/` with `Ctrl+F5`.

## Worker source

The current Worker source is at `worker/index.js`. Cloudflare Worker changes are deployed separately from Pages unless Worker Git builds are explicitly configured. To synchronize the dashboard editor with the repository, open `naradnow-api` → **Edit code**, paste all of `worker/index.js`, and click **Deploy**. Keep `NEWS_DATA_API_KEY` configured as a Cloudflare Secret.

## Quick API check

Open:

`https://naradnow-api.notesfriendair1.workers.dev/api/news?category=top&language=en`

Check `sources.newsdata.ok`, `sources.pib.ok`, `articles`, and `official`. Use a unique extra query parameter if you need a cache-distinct diagnostic request.
