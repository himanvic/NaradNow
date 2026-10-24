# NaradNow update checklist

This patch updates the frontend and documentation. It does not change the deployed Worker code or API secret.

1. Replace these files in the existing repository: `index.html`, `styles.css`, `app.js`, `sw.js`, `README.md`, `CHANGELOG.md`, and `UPDATE-NOW.md`.
2. In VS Code, review Source Control changes, commit, and push to GitHub. Cloudflare Pages should auto-deploy the frontend.
3. Hard-refresh https://naradnow.pages.dev/ with `Ctrl + F5`.
4. Test the cursor, then open the daily quiz. The system cursor should be visible while the native quiz dialog is open; close it to restore the page cursor.
5. Open the **Explore India** disclosure below the story feed. Switch between **Top cities** and **Top states**. Counts are mentions in the loaded articles only, not a ranking of importance.
6. Select a place card to search the current-affairs feed for matching headlines.

No Worker deployment is required for these frontend-only changes. Keep the existing `NEWS_DATA_API_KEY` secret in Cloudflare. The Worker source remains unchanged in this patch.

## Checks to run after deployment

- Theme toggle: Dark Forest → Warm Paper → Auto.
- Quiz opens, answer choices work, cursor remains visible within the dialog, and closing the dialog restores the page cursor.
- Explore India opens with a smooth reveal, city/state tabs update, and place cards apply a search.
- `/` focuses search; Quick Reader opens; saved stories and export work.
- On phone/tablet, custom cursor is hidden and the region cards stay responsive.
