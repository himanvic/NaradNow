# NaradNow Cloudflare Worker

This Cloudflare Worker supplies the backend news proxy for NaradNow (`https://naradnow.pages.dev`). It normalizes and deduplicates articles from NewsData.io and official releases from the Press Information Bureau (PIB).

## Production Endpoint

```
GET https://naradnow-api.notesfriendair1.workers.dev/api/news
```

### Supported Query Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `category` | string | `top` | Beat filter (`top`, `politics`, `education`, `health`, `finance`, `business`, `science`, `technology`, `environment`, `sports`, `world`, `government`). |
| `language` | string | `en` | Language filter (`en` for English, `hi` for Hindi). |
| `limit` | integer | `18` | Number of articles requested (clamped between 1 and 24). |
| `search` | string | `""` | Search query text (up to 120 characters). |
| `page` | string | `""` | Upstream pagination token for loading additional stories. |

---

## Response Contract & Schema

```json
{
  "ok": true,
  "category": "top",
  "language": "en",
  "articles": [
    {
      "id": "05eec14bed049e3a5b309874a3939a8b",
      "title": "Article headline",
      "description": "Article summary...",
      "url": "https://example.com/story",
      "image": "https://example.com/image.jpg",
      "publishedAt": "2026-11-02T06:00:00.000Z",
      "sourceName": "Publisher Name",
      "sourceType": "newsdata",
      "category": "top",
      "language": "en",
      "official": false
    }
  ],
  "official": [
    {
      "id": "pib-2331446",
      "title": "Cabinet approval announcement",
      "description": "Official press release details...",
      "url": "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2331446",
      "publishedAt": "2026-11-02T05:30:00.000Z",
      "sourceName": "Press Information Bureau (PIB)",
      "sourceType": "pib",
      "category": "government",
      "language": "en",
      "official": true
    }
  ],
  "nextPage": "token_xyz_123",
  "lastUpdated": "2026-11-02T07:30:10.608Z",
  "count": 18,
  "sources": {
    "newsdata": {
      "ok": true,
      "error": null,
      "status": "healthy"
    },
    "pib": {
      "ok": true,
      "error": null,
      "status": "healthy"
    }
  },
  "message": "",
  "warning": ""
}
```

### Provider Result States & Semantics

- **Healthy (`status: "healthy"`):** The upstream provider responded with valid data.
- **Partial (`ok: true` overall, one provider failed):** The healthy provider's articles remain fully available. The failed provider reports `ok: false` and a sanitized diagnostic in `error`.
- **Unavailable (`status: 503`, `ok: false`):** Both providers failed. No fabricated or phantom stories are returned.
- **Empty (`status: "empty"`):** The provider responded successfully, but 0 stories matched the query or category.

---

## Reliability & Architecture Features

1. **Request Timeouts:** Upstream requests are bounded with an explicit 7-second timeout via `AbortController`.
2. **Deterministic Timestamps:** `lastUpdated` is an ISO-8601 server timestamp recorded when the response is generated. When served from Cloudflare's edge cache (`caches.default`), the real fetch timestamp is preserved.
3. **Cache Identity:** Edge cache keys preserve `category`, `language`, `search`, `limit`, and `page` parameters to prevent pagination collision.
4. **Secret Protection:** `NEWS_DATA_API_KEY` is strictly accessed via environment bindings. Upstream error messages are scrubbed to prevent key leakage.

---

## Deployment Instructions

1. Open Cloudflare Dashboard → Workers & Pages → `naradnow-api` → **Quick Edit** / **Edit code**.
2. Replace the editor contents with `worker/index.js` from this repository.
3. Verify the secret named `NEWS_DATA_API_KEY` exists under **Settings → Variables and Secrets**.
4. Click **Deploy**.
5. Test the live endpoint in your browser or curl:
   ```bash
   curl -i "https://naradnow-api.notesfriendair1.workers.dev/api/news?category=top&language=en"
   ```
