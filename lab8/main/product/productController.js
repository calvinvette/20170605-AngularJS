(function() {

    var app = angular.module("productModule");
    app.controller("productController", controller);
    controller.$inject = ['$scope'];

    function controller ($scope) {
        $scope.allCategories = [
            {
                "categoryID": 2,
                "categoryName": "Condiments",
                "description": "Sweet and savory sauces, relishes, spreads, and seasonings"
            },
            {
                "categoryID": 4,
                "categoryName": "Dairy Products",
                "description": "Cheeses"
            },
            {
                "categoryID": 1,
                "categoryName": "Beverages",
                "description": "Soft drinks, coffees, teas, beers, and ales"
            },
            {
                "categoryID": 5,
                "categoryName": "Grains/Cereals",
                "description": "Breads, crackers, pasta, and cereal"
            },
            {
                "categoryID": 7,
                "categoryName": "Produce",
                "description": "Dried fruit and bean curd"
            },
            {
                "categoryID": 6,
                "categoryName": "Meat/Poultry",
                "description": "Prepared meats"
            },
            {
                "categoryID": 8,
                "categoryName": "Seafood",
                "description": "Seaweed and fish"
            },
            {
                "categoryID": 3,
                "categoryName": "Confections",
                "description": "Desserts, candies, and sweet breads"
            }
        ];

        $scope.products = [
            {
                "productID" : 56,
                "productName" : "A fake product",
                "supplierID" : 8,
                "categoryID" : 1,
                "quantityPerUnit" : "Box of 12",
                "unitPrice" : 81,
                "unitsInStock" : 40,
                "unitsOnOrder" : 0,
                "reorderLevel" : 0,
                "discontinued" : 0,
                "featured" : true
            },
            {
                "productID" : 12,
                "productName" : "Another fake product",
                "supplierID" : 8,
                "categoryID" : 3,
                "quantityPerUnit" : "Box of 12",
                "unitPrice" : 11.23,
                "unitsInStock" : 40,
                "unitsOnOrder" : 0,
                "reorderLevel" : 0,
                "discontinued" : 0,
                "featured" : true
            },
            {
                "productID" : 20,
                "productName" : "Yet another fake product",
                "supplierID" : 8,
                "categoryID" : 2,
                "quantityPerUnit" : "6 pack",
                "unitPrice" : 85.44,
                "unitsInStock" : 40,
                "unitsOnOrder" : 0,
                "reorderLevel" : 0,
                "discontinued" : 0,
                "featured" : true
            },
            {
                "productID" : 25,
                "productName" : "A fourth fake product",
                "supplierID" : 8,
                "categoryID" : 4,
                "quantityPerUnit" : "Box of 12",
                "unitPrice" : 81.34,
                "unitsInStock" : 40,
                "unitsOnOrder" : 0,
                "reorderLevel" : 0,
                "discontinued" : 0,
                "featured" : true
            }
        ];

    }
})();