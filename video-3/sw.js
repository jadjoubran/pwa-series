self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("precache-v1").then(cache => {
      cache.addAll(["/", "app.js"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
