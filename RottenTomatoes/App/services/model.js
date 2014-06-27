define(function(){

    var OfficeBoxPartial = function (dto) {
        // Map to observables and add computeds
    return mapToObservable(dto);
    };

    var model = {
        OfficeBoxPartial: OfficeBoxPartial
    };

    return model;

    //#region Internal Methods
    function mapToObservable(dto) {
        var mapped = {};
        for (prop in dto) {
            if (dto.hasOwnProperty(prop)) {
                mapped[prop] = ko.observable(dto[prop]);
            }
        }
        return mapped;
    };
    //#endregion
});