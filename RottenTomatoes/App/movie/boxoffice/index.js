define(['durandal/system', 'durandal/app', './simpleGrid', 'knockout', 'services/dataservice'], function (system, app, SimpleGrid, ko, dataservice) {

    var initialData= [
    { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis:"fea" },
     { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
    { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
     { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
    { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
     { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
     { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" }
    ];

    var items= ko.observableArray(initialData);

    var gridViewModel = new SimpleGrid({
        data: items,
        title: "Office Box Movies",
        columns: [
            { headerText: "Movie Id", rowText: "MovieId" },
            { headerText: "Movie Title", rowText: "Title" },
            { headerText: "Movie Rating", rowText: "Rating" },
            { headerText: "Movie Sypnosis", rowText: "Sypnosis" }
        ],
        pageSize: 4
    });

    //var vm = {
    //    gridViewModel: gridViewModel,
    //    activate: activate,
    //    refresh: refresh,
    //    items:items

    //};
    //return vm;
    //function activate() {
    //    if (initialized) { return; }
    //    initialized = true;
    //    return refresh();
    //}


    return {
        items: initialData,
        addItem: function () {
            items.push({ name: "New item", sales: 0, price: 100 });
        },
        sortByName: function () {
            items.sort(function (a, b) {
                return a.name < b.name ? -1 : 1;
            });
        },
        jumpToFirstPage: function () {
            gridViewModel.currentPageIndex(0);
        },
      
        refresh:   function () {
            items = ko.mapping.fromJS(dataservice.getOfficeBoxMoviesPartials(items));
            return items;
       },

        gridViewModel: gridViewModel,
        SimpleGrid: SimpleGrid
    };

 
});