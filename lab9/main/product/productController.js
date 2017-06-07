(function() {

    var app = angular.module("productModule");
    // app.controller("productController", controller);
    // controller.$inject = ['$scope', categoryService, productService];
    // function controller ($scope, categoryService, productService) {
    app.controller("productController", function($scope, categoryService, productService, $location) {
        // $scope.allCategories = [];
        $scope.allCategories = categoryService.findAll();
        $scope.products = productService.findAll();
        $scope.$watch('category', function(newCat) {
            console.log(newCat);
            if (newCat) {
                $location.hash(newCat.categoryID);
            }
        });
    }
    );
})();