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
    }).catch(function(error) {
      console.log(error);
    })
  );
});

/*Serve files and images from cache*/
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(response) {
        return caches.open('restcache').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
