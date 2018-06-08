/* Registration service worker*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service.worker.js")
  .then(function(registration) {
    console.log("Service Worker registration successful");
  })
  .catch(function(err) {
    console.log("Service worker registration failed");
  });
}
