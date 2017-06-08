(function() {
    var app = angular.module("productModule", [ ]);
    app.config(function() {
        console.log("Product Module Config");
    })
    app.run(function() {
        console.log("Product Module Run");
    })
})();