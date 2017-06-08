(function() {

    var app = angular.module("productModule");
    app.service('productService', function($http) {
        var products = [];

        this.findAll = function() {
            return $http.get('http://localhost:3000/api/product');
        }

        this.findById = function(prodId) {
            return $http.get('http://localhost:3000/api/product/ + prodId')
        }
    });
})();