// add event listener for install event
// on install event we will cache all assets for app-shell
self.addEventListener("install", event => {
    // prevents the sw from killing while it is adding assets
    event.waitUntil(
        // creates cache app-shell
        // resolved promise gives the cache object
        caches.open("app-shell").then( cache =>
        {   // call cache method to add the curent page
            cache.add("/");
        })
    );
});