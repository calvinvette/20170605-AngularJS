var app = angular.module("mainModule", [ ]);

app.controller("aboutUsController", function($scope) {
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

	$scope.date = new Date();

	$scope.register = function() {
		console.log("Registration not implemented...");
		console.log($scope.companyName);
		// debugger;
	}
});

app.controller("mainProductContrroller", function($scope) {
	$scope.topProducts = [
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

});