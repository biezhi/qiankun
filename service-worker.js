/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a0984e8233165f55a16b5790db4fbe5a"
  },
  {
    "url": "api/index.html",
    "revision": "0a178802617de39c066588bbade65392"
  },
  {
    "url": "assets/css/0.styles.bedefebe.css",
    "revision": "774ec53984823549f7bb60998f64da08"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5b36abd6.js",
    "revision": "bf14ee185354971acf9c3a1f8309e642"
  },
  {
    "url": "assets/js/11.ba941abc.js",
    "revision": "f35717c93452ce3db90324fcb6da9cce"
  },
  {
    "url": "assets/js/12.60412013.js",
    "revision": "d58ae2d53e5d2e7a0ae2ccebf96c64b9"
  },
  {
    "url": "assets/js/13.10c59cb3.js",
    "revision": "9489e55a37e823c9288feb64782c70b3"
  },
  {
    "url": "assets/js/14.4d4a96d6.js",
    "revision": "21ceeafc8c2c71f9061ad06ad200d58a"
  },
  {
    "url": "assets/js/15.73186262.js",
    "revision": "5c5e19ec8da3dd3ac0be9f278004fdb1"
  },
  {
    "url": "assets/js/16.d5f63d6d.js",
    "revision": "1d72a5fce881751fafe8dc97af6e290d"
  },
  {
    "url": "assets/js/2.4468c180.js",
    "revision": "ac904d02d52a433413af01b5af6419dc"
  },
  {
    "url": "assets/js/3.0c9fca0f.js",
    "revision": "156eeffaf26fae27f10aac3538e66496"
  },
  {
    "url": "assets/js/4.9cca4757.js",
    "revision": "b54a8cea9354480f83dcd7c756f5c490"
  },
  {
    "url": "assets/js/5.aeff9b16.js",
    "revision": "74d72d20b78c877ce724c7df884be7cf"
  },
  {
    "url": "assets/js/6.1258f34a.js",
    "revision": "650e505c6a2cc76b1f1bed6db707c0fb"
  },
  {
    "url": "assets/js/7.ad2a5b8e.js",
    "revision": "3dc1b6193fa2e1230dabb31b1b72394e"
  },
  {
    "url": "assets/js/8.400fbc55.js",
    "revision": "990545215eed94c00c6be07c108f0449"
  },
  {
    "url": "assets/js/9.ba667d11.js",
    "revision": "27d455a8718052f2d7262dd10f5fcf53"
  },
  {
    "url": "assets/js/app.cc9081d0.js",
    "revision": "55cb2b2ea0d15a54f99d7c3e89ce5a16"
  },
  {
    "url": "faq/index.html",
    "revision": "a7589b3394b4dc66dcb9a3d6ee5306dc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b23c412230cd18d68a7e88c3bda1c303"
  },
  {
    "url": "guide/index.html",
    "revision": "4327b836a08a835b4ae91b6557158158"
  },
  {
    "url": "index.html",
    "revision": "34d131f361c8e1e693e61426964e3894"
  },
  {
    "url": "zh/api/index.html",
    "revision": "819cdf1173f93e3f9a8200b4514d4656"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "06a0f2990db82a8adada0dae62dc4842"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "f9e37658865d05a0ae8411e825280db5"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "fb6ca451a7bde912a2f051118145ae6b"
  },
  {
    "url": "zh/index.html",
    "revision": "5dd0fd6f38391de5990795a9151468d5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})