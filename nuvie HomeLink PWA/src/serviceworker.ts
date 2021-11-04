// self.addEventListener('install', (e) => {
//     e.waitUntil(
//         caches.open('sw-cache').then((cache)=>{
//             return cache.addAll(['./index.html', './css/style.css', './js/index.js', './jquery.min.js', './resource/profile1.jpeg'])
//         })
//     )
// })

// self.addEventListener('fetch', (e)=>{
//     e.respondWith(
//         caches.match(e.request).then((response) => {
//             return response || fetch(e.requests)
//         })
//     )
// })

const KEY = 'key';

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'CACHE_URLS') {
        event.waitUntil(
            caches.open(KEY)
                .then( (cache) => {
                    return cache.addAll(event.data.payload);
                })
        );
    }
});