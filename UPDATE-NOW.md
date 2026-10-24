# Publish the NaradNow reader update

This release adds the UPSC/SSC study desk, revision markers, saved-list export, a five-question headline quiz, better feed filtering/pagination, and project credits. The public homepage now avoids technical connection/status panels.

## Update the website

1. Copy the update-only ZIP contents into the existing repository folder, preserving the `worker/` subfolder and the `.git` directory.
2. In VS Code, save the files, review Source Control, and commit with `Improve NaradNow study tools and reader experience`.
3. Push or Sync Changes. Cloudflare Pages will publish the frontend automatically.
4. Open https://naradnow.pages.dev/ and hard-refresh with `Ctrl + F5`.

## Optional Worker update for Load more

The updated `worker/index.js` forwards the provider's continuation token so the Load more button can request another page. The live Worker is deployed separately from Pages. To enable that behavior, deploy `worker/index.js` through Cloudflare Dashboard → Workers & Pages → `naradnow-api` → Edit code. Keep the existing `NEWS_DATA_API_KEY` secret; do not put the actual key in the code or GitHub.

The existing first-page NewsData.io and PIB integration is preserved. The frontend and documentation update does not require changing the secret.
