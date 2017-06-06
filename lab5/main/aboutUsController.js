(function() {

    var app = angular.module("mainModule");
    app.controller("aboutUsController", controller);
    controller.$inject = ['$scope', '$timeout'];

    function controller ($scope, $timeout) {
        $scope.debug = false;

        $scope.states = [
            "Florida",
            "Michigan",
            "New Jersey",
            "New York",
            "North Carolina",
            "Pennsylvania"
        ];


        console.log("about us controller loaded...");
        $scope.companyName = "Foo Corp";
        $scope.address = "1234 Main St.";
        $scope.city = "Schenectady";
        $scope.state = "NY";
        $scope.postalCode = "12345";
        $scope.phoneNumber = "212-555-1212";

        $scope.date = new Date();

        $scope.register = function () {
            console.log("Registration not implemented...");
            console.log($scope.companyName);
            // Can't use apply or digest inside an event handler - have to defer it
            // $scope.apply();
            // $scope.hideMap = true;
            // $timeout(function() {
            //     // $scope.$apply();
            //     // $scope.$digest();
            //     $scope.$applyAsync();
            //     $scope.hideMap = false;
            // }, 2000);

            // debugger;
        }
    };

})();