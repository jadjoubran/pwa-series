console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  workbox.strategies.networkFirst()
);

// workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
