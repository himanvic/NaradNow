const CACHE_NAME = "naradnow-static-v10";
const APP_SHELL = ["./", "./index.html", "./styles.css", "./app.js", "./favicon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("naradnow-static-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Strictly skip non-GET and cross-origin requests
  if (url.origin !== self.location.origin || request.method !== "GET") return;

  // Never cache API routes in the static service worker
  if (url.pathname.startsWith("/api/")) return;

  // Navigation requests: Network-first with offline fallback to cached index.html
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", clone)));
          }
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match("./index.html")) || Response.error())
    );
    return;
  }

  // App-shell static assets (css, js, svg): Stale-while-revalidate with event.waitUntil
  if (/\.(?:css|js|svg)$/.test(url.pathname) || url.pathname.endsWith("/index.html")) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            if (response.ok) {
              const clone = response.clone();
              event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, clone)));
            }
            return response;
          })
          .catch(() => cached || Response.error());

        return cached || networkFetch;
      })
    );
  }
});
