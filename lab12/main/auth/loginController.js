(function() {

    var app = angular.module("authModule");
    app.controller("loginController", controller);
    controller.$inject = ['$scope'];

    function controller ($scope) {
        $scope.login = function(user) {
            if (user.password == "password") {
                $scope.errorMessage = null;
                $scope.successMessage = "You are now logged in as " + user.username;
            } else {
                $scope.successMessage = null;
                $scope.errorMessage = "Failed login!";
            }

        };
    }
})();