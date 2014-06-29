define(function (require) {

    var dataservice = require('services/dataservice');
    return {
        items: ko.observableArray(),
        activate: function () {
            var self = this;
            return dataservice.getOpeningPartials(self.items);
        },
    };

});