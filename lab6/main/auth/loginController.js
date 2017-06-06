(function() {

    var app = angular.module("authModule");
    app.controller("loginController", controller);
    controller.$inject = ['$scope'];

    function controller ($scope) {
        $scope.login = function(user) {
          $scope.successMessage = "You are now logged in as " + user;
        };
    }
})();