(function () {

    var app = angular.module("authModule");
    app.controller("registerController", controller);
    controller.$inject = ['$scope'];

    function controller($scope) {
        $scope.user = {
            username: "hpotter",
            firstName: "Harry",
            lastName: "Potter",
            email: "harry.potter@hogwarts.ac.uk",
            confirmPassword: "foo",
            password: "foo",
            companyName: "Weasley's Wizarding Wheezes",
            address: "#93 Diagon Alley",
            city: "London",
            region: "England",
            postalCode: "EN39319",
            country: "UK"

        }
        $scope.register = function () {
            if ($scope.user.password == $scope.user.confirmPassword) {
                $scope.errorMessage = null;
                $scope.successMessage = "Registered: ";
                $scope.successMessage += $scope.user.username;
                console.log($scope.user);
            } else {
                $scope.successMessage = null;
                $scope.errorMessage = "Failed to register user!";
            }
        }
    }
})();