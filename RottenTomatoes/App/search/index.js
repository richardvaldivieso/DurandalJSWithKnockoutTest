define(function (require) {
    var dataservice = require('services/dataservice');
    var system = require('durandal/system');
    var vm = {
        items: ko.observableArray(),
        searchText: ko.observable(''),
        displayName: "Search"
    };
    
    vm.activate = function () {
        system.log('Activate search');
    };
    vm.search = function () {
        dataservice.getSearchMoviePartials(vm.items, vm.searchText);
    }
    return vm;
    //return {
    //    items: ko.observableArray(),
    //    searchText: ko.observable(''),
    //    displayName : "Search",
    //    activate: function () {
    //        var self = this;
    //        return search(self.items, self.searchText);
    //    },
    //};

    //function search(items,searchText) {
    //    dataservice.getSearchMoviePartials(items, searchText);
    //}


});