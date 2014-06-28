define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: ['', 'home'], moduleId: 'search/index', title: 'Movie Search', nav: 1 },
               { route: 'movies*details', moduleId: 'movie/index', title: 'Movies', nav: true },

            ]).buildNavigationModel()
              .mapUnknownRoutes('search/index', 'not-found')
              .activate();
        }
    };
});