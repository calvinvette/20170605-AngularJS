(function() {
    var app = angular.module("mainModule", [ "productModule", "orderingModule", "ngRoute" ]);

    app.config(function($routeProvider) {
        console.log("Main Module Config");
        $routeProvider
            .when("/", {
                controller: 'WelcomeController',
                templateUrl: "Welcome.html",
                caseInsensitiveMatch: true
            })
            .when("/mainProducts", {
                controller: 'mainProductController',
                templateUrl: "mainProductPartial.html",
                caseInsensitiveMatch: true
            })
            .otherwise({
                controller: 'WelcomeController',
                templateUrl: "Welcome.html",
            })
    })
    app.run(function() {
        console.log("Main Module Run");
    })
})();





