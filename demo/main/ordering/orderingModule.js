(function() {
    var app = angular.module("orderingModule", [ ]);
    app.config(function() {
        console.log("Ordering Module Config");
    })
    app.run(function() {
        console.log("Ordering Module Run");
    })
})();