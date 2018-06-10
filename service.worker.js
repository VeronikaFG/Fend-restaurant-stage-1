/* Cache*/
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restcache').then(function(cache){
      return cache.addAll([
        '/',
        '/restaurant.html',
        '/index.html',
        '/css/styles.css',
        '/data/',
        '/data/restaurants.json',
        '/js/',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg'
      ]);
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(restCache)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    catches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('Restaurant-cache-v') &&
          cacheName != restCache;
        }).map(function(cacheName){
          return caches.delete(cacheName);
        })
      );
    })
  );
});

/*Serve files from caches before to try network*/
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  );
});
