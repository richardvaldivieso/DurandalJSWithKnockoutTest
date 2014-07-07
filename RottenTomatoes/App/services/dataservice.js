define(function (require) {
    var system = require('durandal/system');
    var logger = require('services/logger');

    var getSearchMoviePartials = function (itemsObservable, searchText) {
        itemsObservable([]);
        var options = {
            url: "/api/searchmovies/",
            type: 'GET',
            data: { searchText: searchText() },
            dataType: 'json'
        };

        return $.ajax(options)
         .then(querySucceded)
         .fail(queryFailed);

        function querySucceded(dataout) {
            ko.utils.arrayPushAll(itemsObservable, dataout);
            itemsObservable.valueHasMutated();
            log('Movies found', itemsObservable, true);
        }

    };
    var getOfficeBoxMoviesPartials=function (itemsObservable) {
        //reset observable
        itemsObservable([]);
        //set ajax call
        var options = {
            url: "/api/boxoffice",
            type: 'GET',
            dataType: 'json'
        };
        //make call
        return $.ajax(options)
            .then(querySucceded)
            .fail(queryFailed);
        //handle ajax callback

        function querySucceded(data) {
            ko.utils.arrayPushAll(itemsObservable, data);
            itemsObservable.valueHasMutated();
            log('Retrieve the movies', itemsObservable, true);
        }

    };

    var getInTheatersPartials = function (itemsObservable) {

        itemsObservable([]);
        //set ajax call
        var options = {
            url: "/api/intheaters",
            type: 'GET',
            dataType: 'json'
        };
        //make call
        return $.ajax(options)
            .then(querySucceded)
            .fail(queryFailed);
        //handle ajax callback

        function querySucceded(data) {
            ko.utils.arrayPushAll(itemsObservable, data);
            itemsObservable.valueHasMutated();
            log('Retrieve the movies', itemsObservable, true);
        }
    };

    var getOpeningPartials = function (itemsObservable) {

        itemsObservable([]);
        //set ajax call
        var options = {
            url: "/api/opening",
            type: 'GET',
            dataType: 'json'
        };
        //make call
        return $.ajax(options)
            .then(querySucceded)
            .fail(queryFailed);
        //handle ajax callback

        function querySucceded(data) {
            ko.utils.arrayPushAll(itemsObservable, data);
            itemsObservable.valueHasMutated();
            log('Retrieve the movies', itemsObservable, true);
        }
    };

    var getUpcommingPartials = function (itemsObservable) {

        itemsObservable([]);
        //set ajax call
        var options = {
            url: "/api/upcoming",
            type: 'GET',
            dataType: 'json'
        };
        //make call
        return $.ajax(options)
            .then(querySucceded)
            .fail(queryFailed);
        //handle ajax callback

        function querySucceded(data) {
            ko.utils.arrayPushAll(itemsObservable, data);
            itemsObservable.valueHasMutated();
            log('Retrieve the movies', itemsObservable, true);
        }
    };

    var dataservice = {
        getOfficeBoxMoviesPartials: getOfficeBoxMoviesPartials,
        getInTheatersPartials: getInTheatersPartials,
        getOpeningPartials: getOpeningPartials,
        getUpcommingPartials: getUpcommingPartials,
        getSearchMoviePartials: getSearchMoviePartials

    };


    return dataservice;
 
    //local methods
    function sortOfficeMovies(title1, title2) {
        return (title1 > title2) ? 1 : -1;
    }

    function queryFailed(jqXHR, textStatus) {
        var msg = 'Error getting movies ' + textStatus;
        logger.log(msg, jqXHR, system.getModuleId(dataservice), true);


    }
    function log(msg, data, showToast) {
        logger.log(msg,data,system.getModuleId(dataservice),showToast)
    }


});