const cacheName = 'Weather';
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './favicon.ico',
                './manifest.json',
                './service-worker.js',
                './assets/css/style.css',
                './assets/css/reset.css',
                './assets/img/clock.svg',
                './assets/js/app.js',
            ]);
        })
    );
});

self.addEventListener("activate", event => {
    console.log('Activate!');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, { ignoreSearch: true }))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});