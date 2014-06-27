define(['services/logger','durandal/system','services/model'],function (logger, system,model) {

    var getOfficeBoxMoviesPartials = function (itemsObservable) {
        //reset observable
        itemsObservable([]);
        //set ajax call
        var options = {
            url: "/api/movies",
            async:false,
            type: 'GET',
            dataType: 'json'
        };
        //make call
        $.ajax(options)
            .done(querySucceded)
            .fail(queryFailed);
        //handle ajax callback

        function querySucceded(data) {        
            
            itemsObservable = ko.mapping.fromJS(data);
            log("These are the Box Office Movies", data, true);
            return itemsObservable;
           
           
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