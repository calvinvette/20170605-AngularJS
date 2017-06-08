(function() {


    var app = angular.module("mainModule");
    app.controller("WelcomeController", controller);
    controller.$inject = ['$scope', '$http'];

    function controller ($scope, $http) {
        $scope.now = new Date();
        $scope.name = "Harry";
    };

})();