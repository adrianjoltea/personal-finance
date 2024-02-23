const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

self.addEventListener("install", (e: ExtendableEvent) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Opened chace");
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return (
        response || fetch(e.request).catch(() => caches.match("offline.html"))
      );
    })
  );
});
self.addEventListener("activate", e => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
