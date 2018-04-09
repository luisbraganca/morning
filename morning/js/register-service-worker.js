(function () {
    if ("service-worker.js" in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register("./service-worker.js").then(function (registration) {
                // Registration was successful
                console.log(registration.scope);
            }, function (err) {
                // Registration failed
                console.log(err);
            });
        });
    } else {
        // Service worker not supported
        console.log("Not supported");
    }
})();