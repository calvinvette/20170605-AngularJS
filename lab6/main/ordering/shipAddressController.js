(function() {

    var app = angular.module("orderingModule");
    app.controller("shipAddressController", controller);
    controller.$inject = ['$scope'];

    function controller ($scope) {
        $scope.customer = {
            companyName : "Weasley's Wizarding Wheezes",
            contactName : "George Weasley",
            address : "1234 Main St.",
            city : "Schenectady",
            region : "NY",
            postalCode : "12345",
            country: "US",
            phoneNumber : "212-555-1212"
        }
    };

})();