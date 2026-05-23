/* The Lagniappe Arcana — service worker.
   Bump CACHE when you change cached files to force an update. */
const CACHE = "lagniappe-v3";

// App shell, cached on install. Relative paths resolve against the SW scope,
// so this works on a custom domain or a project subpath alike.
const SHELL = [
  "./",
  "index.html",
  "styles.css",
  "script.js",
  "control_panel/settings.md",
  "control_panel/appearance.md",
  "control_panel/words.md",
  "control_panel/cards.md",
  "manifest.webmanifest",
  "icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-192.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const isNav = req.mode === "navigate";
  const isConfig = url.pathname.includes("/control_panel/") && url.pathname.endsWith(".md");

  // Navigations + the editable docs files: fresh first, fall back to cache offline.
  if (isNav || isConfig) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) => hit || caches.match("index.html"))
        )
    );
    return;
  }

  // Everything else (css/js/icons/card art/fonts): cache first, then network,
  // and quietly refresh the cache in the background.
  event.respondWith(
    caches.match(req).then((hit) => {
      const network = fetch(req)
        .then((res) => {
          if (res && (res.ok || res.type === "opaque")) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || network;
    })
  );
});
