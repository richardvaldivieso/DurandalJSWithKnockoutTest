﻿define(['plugins/router', 'knockout'], function (router, ko) {
    var childRouter = router.createChildRouter()
        .makeRelative({
            moduleId: 'movie',
            fromParent: true
        }).map([
            { route: 'boxoffice', moduleId: 'boxoffice/index', title: 'Box Office', type: 'intro', nav: true },
            { route: 'intheaters', moduleId: 'intheaters/index', title: 'In Theaters', type: 'intro', nav: true },
            { route: 'opening', moduleId: 'opening/index', title: 'Opening Movies', type: 'intro', nav: true },
            { route: 'upcoming', moduleId: 'upcoming/index', title: 'Upcoming Movies', type: 'intro', nav: true }

        ]).buildNavigationModel();

    return {
        router: childRouter,
        introSamples: ko.computed(function () {
            return ko.utils.arrayFilter(childRouter.navigationModel(), function (route) {
                return route.type == 'intro';
            });
        })

    };
});