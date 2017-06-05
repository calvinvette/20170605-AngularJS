var app = angular.module("mainModule", [ ]);

app.controller("aboutUsController", function($scope) {
	console.log("about us controller loaded...");
	$scope.companyName = "Foo Corp";


	$scope.date = new Date();


	$scope.register = function() {
		console.log("Registration not implemented...");
		console.log($scope.companyName);
		// debugger;
	}
});