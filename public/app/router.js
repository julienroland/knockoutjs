define(["knockout", "crossroads", "hasher", "helpers", "filters"], function (ko, crossroads, hasher, helpers) {
    var lang = window.location.pathname.split("/")[1].length == 2 ? window.location.pathname.split("/")[1] : false;
    return new Router({
        routes: [
            {url: '', params: {page: 'home-page', before: 'auth'}},
            {url: 'about', params: {page: 'about-page', before: 'auth'}},
            {url: 'auth/login', params: {page: 'auth/login', before: 'guest'}},
            /* *
             * Admin
             *
             * */
            {url: 'admin', params: {page: 'admin', before: 'auth'}},
            {
                prefix: "admin",
                params: {before: 'auth'},
                routes: [
                    {url: 'article', params: {page: 'admin-article'}},
                ]
            }
        ]
    });

    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function (route) {
            if (typeof route.prefix !== "undefined" && typeof route.routes !== "undefined") {
                ko.utils.arrayForEach(route.routes, function (prefixRoute) {
                    prefixRoute.url = route.prefix + '/' + prefixRoute.url;
                    crossroads.addRoute(prefixRoute.url, function (requestParams) {
                        var params = helpers.merge(route.params, prefixRoute.params);
                        console.log(params);
                        new filters(params);
                        currentRoute(ko.utils.extend(requestParams, params));
                    });
                });
            } else {
                crossroads.addRoute(route.url, function (requestParams) {
                    new filters(route.params);
                    currentRoute(ko.utils.extend(requestParams, route.params));
                });
            }
        });

        activateCrossroads();
    }


    function activateCrossroads() {
        function parseHash(newHash, oldHash) {
            crossroads.parse(newHash);
        }

        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.prependHash = '!';
        hasher.init();
    }
});
