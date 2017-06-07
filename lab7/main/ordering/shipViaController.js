(function() {

    var app = angular.module("orderingModule");
    app.controller("shipViaController", controller);
    controller.$inject = ['$scope'];

    function controller ($scope) {
        $scope.shipViaOptions = [
            {id: 1, name: 'Next Day', price: 100},
            {id: 2, name: 'Two Day', price: 50},
            {id: 3, name: 'Ground', price: 0},
        ];
    };

})();