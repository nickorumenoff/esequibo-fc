self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Esequibo FC';
  const options = {
    body: data.body || '',
    icon: '/esequibo-fc/icon.png',
    badge: '/esequibo-fc/icon.png',
    vibrate: [200, 100, 200],
    data: { url: '/esequibo-fc/' }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url || '/esequibo-fc/'));
});

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(clients.claim()));
