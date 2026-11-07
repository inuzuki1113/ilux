// Generated SJ SW wrapper for Cloudflare Pages
importScripts("/controller/controller.sw.js");

self.addEventListener("fetch", (event) => {
  try {
    if ($scramjetController.shouldRoute(event)) {
      event.respondWith(
        $scramjetController.route(event.request)
      );
    }
  } catch (e) {
    console.error("[sj.sw] fetch handler error:", e);
  }
});