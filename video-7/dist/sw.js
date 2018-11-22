importScripts("precache-manifest.e64d48826610bdc059379d94db59ee57.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  workbox.strategies.networkFirst()
);

// workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);

