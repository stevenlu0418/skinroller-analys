self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/fraga.html',
      '/produkter.html',
      '/images/logo.png',
      '/images/bakgrund.png',
      '/images/bakgrundmobil.png'
      // 如有其他css/js文件可继续添加
    ]))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
}); 