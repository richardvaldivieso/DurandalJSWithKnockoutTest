define(function (require) {
    var system = require('durandal/system');
    var logger = require('services/logger');


    var getOfficeBoxMoviesPartials=function (itemsObservable) {
        //reset observable
        itemsObservable([]);
        var self = this;
        //set ajax call
        var options = {
            url: "/api/movies",
            type: 'GET',
            dataType: 'json'
        };
        //make call
        return $.ajax(options)
            .then(querySucceded)
            .fail(queryFailed);
        //handle ajax callback

        function querySucceded(data) {
             // itemsObservable = ko.mapping.fromJS(data);
            ko.utils.arrayPushAll(itemsObservable, data);
            // log("These are the Box Office Movies", itemsObservable, true);
            itemsObservable.valueHasMutated();
            log('Retrieve the movies', itemsObservable, true);
        }

    };

    var dataservice = {
        getOfficeBoxMoviesPartials: getOfficeBoxMoviesPartials

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