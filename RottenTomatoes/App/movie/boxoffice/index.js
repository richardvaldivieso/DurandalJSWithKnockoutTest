define(function (require) {

    var dataservice = require('services/dataservice');
    return {
        items: ko.observableArray(),
        activate: function () {
            var self = this;
            return dataservice.getOfficeBoxMoviesPartials(self.items);
        },
    };

    //var items= ko.observableArray();

    //var gridViewModel = new SimpleGrid({
    //    data: items,
    //    title: "Office Box Movies",
    //    columns: [
    //        { headerText: "Movie Id", rowText: "MovieId" },
    //        { headerText: "Movie Title", rowText: "Title" },
    //        { headerText: "Movie Rating", rowText: "Rating" },
    //        { headerText: "Movie Sypnosis", rowText: "Sypnosis" }
    //    ],
    //    pageSize: 4
    //});

    //var vm = {       
    //    activate: activate,
    //   // refresh: refresh,
    //    gridViewModel: gridViewModel,
    //    SimpleGrid: SimpleGrid,
    //    items: items,
    //    data: items,   
       
    //};
  

    //  return vm;
});