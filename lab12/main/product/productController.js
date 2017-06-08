(function() {

    var app = angular.module("productModule");
    // app.controller("productController", controller);
    // controller.$inject = ['$scope', categoryService, productService];
    // function controller ($scope, categoryService, productService) {
    app.controller("productController", function($scope, categoryService, productService, $location) {
        // $scope.allCategories = [];
        categoryService.findAll().then(function(result) {
            $scope.allCategories = result.data;
        }, function(errResult) {
            console.log("Error retrieving categories!");
            console.log(errResult.statusCode());
            console.log(errResult.statusText);
        })


        productService.findAll().then(function(result) {
            $scope.products = result.data;
        }, function(errResult) {
            console.log("Error retrieving products!");
            console.log(errResult.statusCode());
            console.log(errResult.statusText);
        });

        $scope.$watch('category', function(newCat) {
            console.log(newCat);
            if (newCat) {
                $location.hash(newCat.categoryID);
            }
        });
    }
    );
})();