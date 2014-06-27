define(['durandal/system', 'durandal/app', './simpleGrid', 'knockout', 'services/dataservice'], function (system, app, SimpleGrid, ko, dataservice) {
    var initialized = false;
    var initialData= [
    { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis:"fea" },
     { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
    { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
     { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
    { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
     { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" },
     { MovieId: 1, Title: "Superman", Rating: "Roten", Sypnosis: "fea" }
    ];

    var items= ko.observableArray();

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

    var vm = {       
        activate: activate,
        refresh: refresh,
        gridViewModel: gridViewModel,
        SimpleGrid: SimpleGrid,
        items: items,
        data: items,   
        addItem: addItem,
        sortByName: sortByName,
        jumpToFirstPage:jumpToFirstPage
        
    };
    return vm;
    function activate() {
        if (initialized) { return; }
        initialized = true;
        return refresh();
    }

    function refresh () {
        return dataservice.getOfficeBoxMoviesPartials(items);
      
    }

     function addItem () {
         //   items.push({ name: "New item", sales: 0, price: 100 });
        }

     function sortByName () {
            items.sort(function (a, b) {
                return a.title < b.title ? -1 : 1;
            });
     }
      function jumpToFirstPage () {
             gridViewModel.currentPageIndex(0);
       }
 
 
});