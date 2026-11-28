/**
 * Hand-written service worker: offline app shell + installability.
 *
 * Every URL is resolved relative to this file, never against '/', so the worker
 * behaves correctly when the app is hosted in a subdirectory such as
 * https://user.github.io/xb4000.app/.
 *
 * Strategy
 *  - precache the app shell on install (hashed assets are cached at runtime,
 *    so this file never has to know their file names)
 *  - navigations: network first, cached shell when offline
 *  - same-origin app files: cached copy first, refreshed in the background
 *  - never cache non-GET, cross-origin or Vite dev/HMR requests
 *  - user data is never cached: LocalStorage stays the single source of truth
 */

const VERSION = 'gymtek-xb4000-v3';
const SHELL_CACHE = `${VERSION}-shell`;
const ASSET_CACHE = `${VERSION}-assets`;

const SHELL_PATHS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

const INDEX_URL = new URL('./index.html', self.location).href;
const APP_ROOT = new URL('./', self.location).pathname;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) =>
        Promise.allSettled(
          SHELL_PATHS.map((path) => cache.add(new URL(path, self.location).href))
        )
      )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => !key.startsWith(VERSION)).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

function isDevRequest(url) {
  return (
    url.pathname.startsWith('/@') ||
    url.pathname.includes('/src/') ||
    url.pathname.includes('vite') ||
    url.search.includes('t=') ||
    url.pathname.endsWith('.hsr') ||
    url.pathname.endsWith('.hot-update.js')
  );
}

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (isDevRequest(url)) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(INDEX_URL, copy));
          }
          return response;
        })
        .catch(async () => (await caches.match(INDEX_URL)) || Response.error())
    );
    return;
  }

  if (!url.pathname.startsWith(APP_ROOT)) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.ok && response.type === 'basic') {
            const copy = response.clone();
            caches.open(ASSET_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || network;
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skip-waiting') self.skipWaiting();
});
