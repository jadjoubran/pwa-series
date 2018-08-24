importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
);

console.log("⚙️ Hello from Service Worker");

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  workbox.strategies.networkFirst()
);

workbox.precaching.precacheAndRoute([
  {
    "url": "app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "app.js",
    "revision": "06df590b8a9c642a16100ebc4a5b5d40"
  },
  {
    "url": "index.html",
    "revision": "8140ba0086a3fe1eb67e5bcea09afc45"
  },
  {
    "url": "src-sw.js",
    "revision": "8be2d76d9b8bee1e68f25c14bce305e7"
  },
  {
    "url": "workbox-config.js",
    "revision": "3f9d78424594cc238bb1ba9e3dc66fc1"
  }
]);
