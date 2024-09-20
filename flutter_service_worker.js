'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9b50d67ee22e6714b74509b0a437836c",
"assets/AssetManifest.bin.json": "111ba4f4afe41216e01567fc9b5f002f",
"assets/AssetManifest.json": "41f9a9f35ec13a0049a3223cbed20c5e",
"assets/assets/fonts/yekan/YekanBakh-Black.ttf": "b27918e6bf4aafa39da864154ef679b0",
"assets/assets/fonts/yekan/YekanBakh-Bold.ttf": "d4730af83331a090f1a1b1128c9e2002",
"assets/assets/fonts/yekan/YekanBakh-ExtraBold.ttf": "e3703ae2ee84a05087b3c4f2f2ec6ba4",
"assets/assets/fonts/yekan/YekanBakh-Light.ttf": "bfa8fcb976cb9a665a9bd55873dddc8b",
"assets/assets/fonts/yekan/YekanBakh-Regular.ttf": "0f9cd065804a5b162a755a2b79c4ecc8",
"assets/assets/fonts/yekan/YekanBakh-SemiBold.ttf": "75a15708455365eea617ead233f20940",
"assets/assets/fonts/yekan/YekanBakh-Thin.ttf": "655c7190905a7f8ae5feb760e785b26a",
"assets/assets/icon/adaptive.png": "8265e477aaf1ed4793301a4c7421993d",
"assets/assets/icon/dbd.png": "7964b996219dd85170c967bc37cd079a",
"assets/assets/icon/iphone.png": "dd705a1a02a03f2fcdd49c036d764b9f",
"assets/assets/icon/splash.png": "30887493e5595caa2d8b2bf942c1e148",
"assets/assets/images/about.jpg": "3e23d435bcbba84d457565c2ecb83787",
"assets/assets/images/carsoon.gif": "441f6597b9de0d4566cfc7fd31c10961",
"assets/assets/images/chat-text.svg": "a167d56d4d27545bed2f653c450f6275",
"assets/assets/images/chip.png": "985f6c2cbfa91dcdee5b386e02bf6260",
"assets/assets/images/compass.svg": "c4e8ab88d28f4d643d85d585974ac29f",
"assets/assets/images/custom/ab-o-hava.svg": "d2c837de8c8878bdeb1124ca4c2d347d",
"assets/assets/images/custom/agahi-haye-man.svg": "56a1b6a5b7d7a2ddc07dcb4e0774b164",
"assets/assets/images/custom/amar.svg": "c23680799b3b56da5245e400753b95bd",
"assets/assets/images/custom/amlak.svg": "5d2f31b5e2a158d0350a0f8a2a1562a5",
"assets/assets/images/custom/business-card.svg": "d7be94f84f725ef4b0a9da9febb97e08",
"assets/assets/images/custom/ertegha.svg": "ad87b7060f41d32460e1ddac91b3f616",
"assets/assets/images/custom/estekhdam.svg": "0b5cdf9cb645c682d1014f70079b55e3",
"assets/assets/images/custom/file-benam.svg": "8f56b257b722865011f0adf85714cb68",
"assets/assets/images/custom/file-kasebi.svg": "b2b2e50f7c2d675adb5844d8feb66a3a",
"assets/assets/images/custom/gallery.svg": "1c4535a6b86b73eca67379768c12ff83",
"assets/assets/images/custom/hamkarane-faal.svg": "317e12c806a77e0ab4988cec9ddae786",
"assets/assets/images/custom/karshenasi.svg": "7c032e7579de8a63db3b3156a2928e2c",
"assets/assets/images/custom/karyabi.svg": "7cc0c09deb1559acd2092bf706bac744",
"assets/assets/images/custom/khahan.svg": "f73b1581b1ab2af66b8cbf648a69281b",
"assets/assets/images/custom/khodro.svg": "341f9949db5a7fe557fd3c79aa793879",
"assets/assets/images/custom/kife-pool.svg": "76ec98be8140f3b40448707ffb746478",
"assets/assets/images/custom/menu.svg": "10765deabbd87b086fb5b7a30712db76",
"assets/assets/images/custom/moavezeh.svg": "7ed73117b0d0ffdfeee144fd0f8ba88d",
"assets/assets/images/custom/modiriat-baste.svg": "a8d9a9964776514760db67dcc592bd5c",
"assets/assets/images/custom/modiriat-mosaedeh.svg": "313b984eaaa7a70371b7f3cc8c64a4fa",
"assets/assets/images/custom/modiriat-moshaverin.svg": "8e32242352543fd68d8f97a5f77b5f28",
"assets/assets/images/custom/mogheiat.svg": "031b13c52dbdf611c2beff41f9bc5b2e",
"assets/assets/images/custom/neshan-shode.svg": "5c6941eb06a67ae8d914e7591d44deaa",
"assets/assets/images/custom/poshtibani.svg": "8c9bc6e45342c6ad856bda83e4e27e72",
"assets/assets/images/custom/rooydad.svg": "99cc0a8fc7c47b1999f5ac90637d8895",
"assets/assets/images/custom/saat-kari.svg": "5199085fde3c3a2c6139d6b3a8aee5bd",
"assets/assets/images/custom/social-media.svg": "39c394822b3f1eca41cdec57704efd50",
"assets/assets/images/custom/soorat-hesab.svg": "ba3ff71f1ed7c0046d93d97b94dc334b",
"assets/assets/images/custom/takhfif.svg": "fbf2bb712259a940479e06c8adf9b454",
"assets/assets/images/custom/yaddasht.svg": "d05c20b2c880fce3d190304c3fe1c8f8",
"assets/assets/images/cyn.png": "7a04ffcbac3e1026f6ad3f195cfb6427",
"assets/assets/images/dasbedas.png": "2927dc5f1dd077562e4eb5ccfe426b5a",
"assets/assets/images/dasbedas.svg": "4462702dccba79cf28e587529623ec1c",
"assets/assets/images/disconnected.png": "1f6b2f1b001b6428338aa86ebedcda02",
"assets/assets/images/flower.svg": "ee216de544e896ede6b58a06ccb38ee9",
"assets/assets/images/for-sale.svg": "e1207c7eee6e646e551f395c672fa718",
"assets/assets/images/gold.png": "55433dc1bf56ed27a4f9e8db6d9940b6",
"assets/assets/images/hand-shake.gif": "3cdfa7d8fa1f6bad2f10161426ebe61e",
"assets/assets/images/icons/facebook.svg": "1d2ad08998e636eb78f105b91cd1a2f3",
"assets/assets/images/icons/instagram.svg": "7bd368e772266ddbaf9828f40c41cbfb",
"assets/assets/images/icons/link.svg": "920ac76a1937103e21cdc8b3dcf47264",
"assets/assets/images/icons/linkedin.svg": "94fa483e4c2b7b8dae0df26d39470390",
"assets/assets/images/icons/telegram.svg": "99bb1bf3965b1476bc66b210caf12ea6",
"assets/assets/images/icons/twitter.svg": "18863606df598e1122778ebf68922714",
"assets/assets/images/menu.svg": "7012e9f91b9b0b0c67f74c7813ac3f03",
"assets/assets/images/newsplash.lottie.json": "848654b4b2b88cfd0940f98f851ee3a9",
"assets/assets/images/offer.png": "846055d7aed97884807ce30d44e60f99",
"assets/assets/images/rent.png": "ea0decf435f20505941f3d8dfee374ee",
"assets/assets/images/sale.png": "402edd74999422fd1f793b466b134f09",
"assets/assets/images/search-home.svg": "d9cb1cc2cdc6343f9ed7fd13f0e236b7",
"assets/assets/images/search.svg": "f9d4f6009f15a2935ecb49218be4d100",
"assets/assets/images/service_1.svg": "02ce5a9c15369905b9dbfcba0a5c8205",
"assets/assets/images/service_2.svg": "cede649029878588eb5a26fcf850b3c0",
"assets/assets/images/service_3.svg": "eea24c4757ea2ddaa14140fd6bd9d015",
"assets/assets/images/soon.svg": "8349aa19c83aaa6fbb74368ff97b1744",
"assets/assets/images/splash.lottie.json": "8aae971b2652804aab5093f32b482dc5",
"assets/assets/images/update.svg": "f1c574bde7bd19c4e444c1bb52003876",
"assets/assets/images/usd.png": "6f91d0d464d378399e88a91e096bea5f",
"assets/assets/images/weather/cloudy.jpg": "441ec57b5ceed9d1eefa5ad5b078a2b7",
"assets/assets/images/weather/drizzle.jpg": "1054daa35bc528976467abbb6decd35d",
"assets/assets/images/weather/foggy.jpg": "c845303e0b0a7aa85d2e2ce675bdfa25",
"assets/assets/images/weather/night.jpg": "dd28b930af64a157c080cc5d18bf48b2",
"assets/assets/images/weather/rain.jpg": "b97bdd48c9eb3f3f9a0f83c38bb6a4bc",
"assets/assets/images/weather/snow.jpg": "2358b518df2c6e7ac65e9215c2f74c58",
"assets/assets/images/weather/sunny.jpg": "fe2b9c90a2d99cc3da2f83d95f88a3c8",
"assets/assets/images/weather/thunderstorm.jpg": "683b287cf7a8f90dc9e8cb76c72fbaea",
"assets/assets/images/why_1.svg": "d7ba7b1a0fcc1059efd0a8b86d0323fd",
"assets/assets/images/why_2.svg": "5d2e08a5260605a83e6f1f348d267e33",
"assets/assets/images/why_3.svg": "5b28b3f9345012405a532a540123dab8",
"assets/assets/navigation/and.mp3": "cfba23d59b528615360c2d20402c051a",
"assets/assets/navigation/arrived.mp3": "3cd1c5466f629f41c8345947177e914c",
"assets/assets/navigation/depart.mp3": "245d5a4824b1f6e843e2dfa993eaa77c",
"assets/assets/navigation/ding.mp3": "557f11a0bc19cede612f4bda9af0ce2c",
"assets/assets/navigation/off-ramp-100.mp3": "e5d8ec879114d4596a99d97249815d19",
"assets/assets/navigation/off-ramp-200.mp3": "8b42e8a6f896dcf420d5888f328c3b2e",
"assets/assets/navigation/off-ramp-500.mp3": "3eb64662e5948ecb583044f5a80ccf50",
"assets/assets/navigation/off-ramp.mp3": "423c829fa4bb2628ed09fedab40a1a75",
"assets/assets/navigation/on-ramp-100.mp3": "9a39d8db0545b20ead16aa91d243512c",
"assets/assets/navigation/on-ramp-200.mp3": "ac5e41d7d604e99bbcf56b06b6d961f4",
"assets/assets/navigation/on-ramp-500.mp3": "74f31e8f3638997b3bb776c0fa9893f0",
"assets/assets/navigation/on-ramp.mp3": "17badb11f55f198c2c95a8c40720329a",
"assets/assets/navigation/rotary-1.mp3": "c86ee47d0dd5f6b9841ffc6e8ec6a337",
"assets/assets/navigation/rotary-2.mp3": "dd5f39720ba9504626963c69dd904e7b",
"assets/assets/navigation/rotary-3.mp3": "14f4642dd583ebc33d4fecd722dce452",
"assets/assets/navigation/rotary-4.mp3": "9ccf0f48d299cae198d18791476df068",
"assets/assets/navigation/rotary-5.mp3": "f77407eca364f6d6d0bb925608e0e20f",
"assets/assets/navigation/rotary-6.mp3": "97af6f836ce4144c357fe625b3de58b4",
"assets/assets/navigation/turn-left-100.mp3": "f12b53de23e8ac87aa78a5d828d5648e",
"assets/assets/navigation/turn-left-200.mp3": "816c48d5aaa64e23737f9cf431524135",
"assets/assets/navigation/turn-left-500.mp3": "6bc231b811482c23cde92298c601ba03",
"assets/assets/navigation/turn-left.mp3": "c394bc106dfcdeb0206fe005e70a3ac6",
"assets/assets/navigation/turn-right-100.mp3": "7deaea085fa6f776cb919ed09fdd02ee",
"assets/assets/navigation/turn-right-200.mp3": "586566d3930bf2e4917e24eb89002bc4",
"assets/assets/navigation/turn-right-500.mp3": "35353a1a9d084d957735fb72361f848d",
"assets/assets/navigation/turn-right.mp3": "d0e614cfd2081db60e18e75e0bbe4711",
"assets/assets/navigation/uturn-100.mp3": "2f6ff8a1f3084927bb2c6247bcd5cd42",
"assets/assets/navigation/uturn-200.mp3": "2c3b5e7a24ba4f53a80103f35448665a",
"assets/assets/navigation/uturn-500.mp3": "f2d676efa9f776f27382c5582feab627",
"assets/assets/navigation/uturn.mp3": "1dbb21045ff07ab7074271c966ed0e64",
"assets/FontManifest.json": "ae4164a835dbf70ed3591b2997237e9c",
"assets/fonts/MaterialIcons-Regular.otf": "95eb896e79d64991dbd646e7b63fbd1f",
"assets/NOTICES": "a3883a8291e1e582a3c65f4a879a8199",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "0134b395cffd6b3f60b97b34beac2a7b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "b570938c99bc16adf7649818accbda86",
"icons/Icon-192.png": "71355f070780747e8f7c44bcbad71008",
"icons/Icon-512.png": "e6c5edb4471bfd700686ed41c26e2a5b",
"icons/Icon-maskable-192.png": "71355f070780747e8f7c44bcbad71008",
"icons/Icon-maskable-512.png": "e6c5edb4471bfd700686ed41c26e2a5b",
"index.html": "9342197b4a37f8ff4fa7cd5231b66186",
"/": "9342197b4a37f8ff4fa7cd5231b66186",
"main.dart.js": "0184328d480da4f16956d9df5c79fb82",
"manifest.json": "e6238a43c58ca136753b6801b34aec3c",
"version.json": "ff5492065438dbf61285b7e711a0eb7a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
