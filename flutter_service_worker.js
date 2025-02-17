'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "45d96b5b387bc791d7efce4e1982a4d3",
"assets/AssetManifest.bin.json": "e1d213dbc0684a70da694f98596d3c12",
"assets/AssetManifest.json": "b1f4a9ab620ebb897f4750759ebf92b5",
"assets/assets/fonts/Urbanist-Black.ttf": "06b9bd346b763cf5ad3cc2ace60a2f21",
"assets/assets/fonts/Urbanist-BlackItalic.ttf": "492491f8ef258ad04ee08cfd3cbc474c",
"assets/assets/fonts/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/Urbanist-BoldItalic.ttf": "ec30aa3e3be30f6304c69ef040e9e92f",
"assets/assets/fonts/Urbanist-ExtraBold.ttf": "f4a05764495d2286312d1c6edd9513b4",
"assets/assets/fonts/Urbanist-ExtraBoldItalic.ttf": "26beb9ed7fa050064d138154a5a5959f",
"assets/assets/fonts/Urbanist-ExtraLight.ttf": "9b0816f8a9ed26357eaddff6013d614c",
"assets/assets/fonts/Urbanist-ExtraLightItalic.ttf": "ec961ac7dec0000a12745b89f36da558",
"assets/assets/fonts/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/assets/fonts/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/Urbanist-LightItalic.ttf": "d972d9ef541d339a844ffd135921e5fb",
"assets/assets/fonts/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/Urbanist-MediumItalic.ttf": "1497d007b844b9b86a871ff242929d51",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/fonts/Urbanist-SemiBoldItalic.ttf": "74d0f2b0a8f943d9c8c81c9555cb1d56",
"assets/assets/fonts/Urbanist-Thin.ttf": "b33ca161a200a34abdfcd4a25c30cccb",
"assets/assets/fonts/Urbanist-ThinItalic.ttf": "8548045ef1b9e6a61de2f4c642748bad",
"assets/assets/icons/icon.png": "a8e4e1c1e3a21fb56238b2d57fc13c80",
"assets/assets/images/3d_design.svg": "cbbeba35ff1dd29812e01733646bc321",
"assets/assets/images/background_our_service.svg": "8861014fa29b5d59e91a99aad3456fd6",
"assets/assets/images/choose.svg": "da4fc6f114795f3205c4888e2276f650",
"assets/assets/images/company.svg": "695e28c1dbbb1738790a1c39cc66265b",
"assets/assets/images/customer.svg": "8571c2b5b85e4ee81a33e67ca10b2594",
"assets/assets/images/footer.svg": "89dce64df0bf39e36d063bef3ec179ab",
"assets/assets/images/grapic_design.svg": "59a05a87f1dbd8820e91a7cd859ea492",
"assets/assets/images/logo.svg": "0d4749d02791e142a3f5045eee1c2e8b",
"assets/assets/images/png/3d_design.png": "77d4f51fa82e51b807a3c558c1d392d9",
"assets/assets/images/png/ads_logo.png": "fa850320d9d915bcca064b591766a7f5",
"assets/assets/images/png/ai.png": "8909384fb1b69e15cd2f8879781d9dfc",
"assets/assets/images/png/android.png": "ead50bc67c969fff3cdd8ad85afd4be9",
"assets/assets/images/png/Aznul.png": "b9ccc17657007588d3f565f14d4066c2",
"assets/assets/images/png/choose_us.png": "37c5336e47d76f00044c35b44c52c9d3",
"assets/assets/images/png/CI.png": "6f418a5f9375f899490a61bad99a7da5",
"assets/assets/images/png/Flutter.png": "7432b3015d5894eb8fb4b2f004524bb7",
"assets/assets/images/png/Ghora.png": "02d9fe890878f3ce6ddfbcfa976eed2a",
"assets/assets/images/png/grapic_design.png": "e7e75102b3e8ba0a78a63648ae04eb14",
"assets/assets/images/png/Laravel.png": "0eda2f3794ad54da2edae74c8ec8d6ed",
"assets/assets/images/png/linkin.png": "0f84afc8787f2176d06c447b35b2e50e",
"assets/assets/images/png/MonggoDB.png": "3d4b1e4ac671c513235710b672a46d68",
"assets/assets/images/png/MySQL.png": "b73d47ecb08f6d0cb978e1ad5b5a2912",
"assets/assets/images/png/NodeJs.png": "66b554b580fa66f8bfc1af05b5ac83c7",
"assets/assets/images/png/Postgress.png": "53d496ab1d8eb421c9f5f8c1c0fb1fd8",
"assets/assets/images/png/Python.png": "bd4381c4ce51fbe7e4dade4b1c65abad",
"assets/assets/images/png/Raka.png": "941f0693a5b53aa98ed9513694920479",
"assets/assets/images/png/React.png": "ca28d4821c48a6a053b5e4616cf61d42",
"assets/assets/images/png/Syahri.png": "dd87e7a4cc4537ddfcec16b80fbb0f77",
"assets/assets/images/png/te1.png": "cbc776275a11fbc27faa31a4204c755f",
"assets/assets/images/png/te2.png": "b48fb9f2ffc6b5794d5a631b401859fd",
"assets/assets/images/png/te3.png": "3b6f91569d638679fb633cb01aaafa14",
"assets/assets/images/png/te4.png": "6d352e6229d09fc37879c0504cf668c9",
"assets/assets/images/png/te5.png": "a14e9d8b531b83f0e063d863ea6f3a42",
"assets/assets/images/png/te6.png": "8d6fe01007c8bf43a99f4e75bf41c91a",
"assets/assets/images/png/Trinanda.png": "7b9c9142bcc899c21b6e653c764ce3f4",
"assets/assets/images/png/web_design.png": "2607817dc6c8ca3ad807aafe7fe355a0",
"assets/assets/images/projects.svg": "635e3d9b9d56dccdb36a6a2a3c2743a2",
"assets/assets/images/strategy.svg": "83198ad41314d07c0cf8b701c9c8f296",
"assets/assets/images/vector.svg": "5ce75426d52eade02876d0f93b6107af",
"assets/assets/images/vector_hero.svg": "d06c6fd839aaa0438421bde06a54797b",
"assets/assets/images/web_design.svg": "bdf8bb89f6747dfd9fafe4ed1d2cf40d",
"assets/FontManifest.json": "64ff58c751297d64007dcec8b2f207d1",
"assets/fonts/MaterialIcons-Regular.otf": "9470e0f003ccf45149a6e952500aa78e",
"assets/NOTICES": "f57535be65d55a28a03715ae2417b77a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "36b7b3abc3a1191a524ee0ec46a80633",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "652fe04a61c3678c437a5be6d4068a11",
"icons/Icon-192.png": "d1586eaf66d75c878673c8a1511bcf19",
"icons/Icon-512.png": "96bad3048756fce61844c2baff5adbad",
"icons/Icon-maskable-192.png": "d1586eaf66d75c878673c8a1511bcf19",
"icons/Icon-maskable-512.png": "96bad3048756fce61844c2baff5adbad",
"index.html": "ed242d02263022b08acedeaab1311a57",
"/": "ed242d02263022b08acedeaab1311a57",
"main.dart.js": "fc8180aa87bf7a83d92a68ec6e02f395",
"manifest.json": "04655e41738b634381205c8334f60f6a",
"version.json": "8d20256c30f371da42a1f1e584448ffe"};
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
