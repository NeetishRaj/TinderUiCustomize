(function () {
  const VERSION = '{%VERSION%}';
  const files = [
    'images/069_720x480.jpg',
    'images/101_1440.jpg',
    'images/454_720x480.jpg',
    'images/636_720x480.jpg',
    'images/658_720x480.jpg',
    'images/702_720x480.jpg',
    'images/744_720x480.jpg',
    'images/fullimage.jpg',
    'images/logo.png',
    'app.js',
    'ce-carousel.js',
    'ce-details.js',
    'ce-item.js',
    'custom-elements.min.js',
    'helper.js',
    './',
    'manifest.json',
    'styles.css'
  ];

  self.oninstall = event => event.waitUntil(
    caches.open(`tinderforbananas-${VERSION}`)
      .then(cache => cache.addAll(files))
  );

  self.onactivate = event => event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .map(c => c.split('-'))
            .filter(c => c[0] === 'tinderforbananas')
            .filter(c => c[1] !== VERSION)
            .map(c => caches.delete(c.join('-')))
        )
      )
  );

  self.onfetch = event => event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
})();