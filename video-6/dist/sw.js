importScripts("precache-manifest.c7fd9fa09cd14823b53b7acf4168778a.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  workbox.strategies.networkFirst()
);

// workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);

