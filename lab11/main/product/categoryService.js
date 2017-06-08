(function() {

    var app = angular.module("productModule");
    app.service('categoryService', function($http) {
        this.findAll = function() {
            return $http.get('http://localhost:3000/api/category');
        }

        this.findById = function(catId) {
            return $http.get('http://localhost:3000/api/category/ + catId')
        }
    });
})();