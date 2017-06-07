(function() {

    var app = angular.module("orderingModule");
    app.controller("checkoutController", controller);
    controller.$inject = ['$scope'];

    function controller ($scope) {
        $scope.cart = [
            {
                "product":{
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
                "quantity": 4
            },
            {
                "product":{
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
                },
                "quantity": 2
            },
            /* And so on ... */
        ];

        $scope.cartTotal = 0;

        $scope.removeFromCart = function(product) {
            for (idx = 0; idx < $scope.cart.length; idx++) {
                var cartItem = $scope.cart[idx];
                if (product.productID == cartItem.product.productID) {
                    console.log("Removing: ");
                    console.log(cartItem);
                    $scope.cart.splice(idx, 1);
                }
            }
        };

        $scope.processOrder = function() {
            for (idx = 0; idx < $scope.cart.length; idx++) {
                var cartItem = $scope.cart[idx];
                console.log(cartItem);
            }
            $scope.cart = [];
        };

        // Watch only watches the array object, not the items in the array
        // $scope.$watch('cart', function() {
        //     $scope.cartTotal = getCartTotal($scope.cart);
        // });

        // $watchCollection looks at the items in the cart (but not their properties).
        $scope.$watchCollection('cart', function() {
            $scope.cartTotal = getCartTotal($scope.cart);
        });

        $scope.stopEditing = function(idx) {
            // Why does this fail to disable the editingRow value and disable editing?
            $scope.editingRow = -1;
            // Recalculate cart total - the watchCollection won't see value changes for properties of items in the cart,
            // just changes to the whole items in the cart
            $scope.cartTotal = getCartTotal($scope.cart);
        }

        $scope.$on('ShipAddressChanged', function(evt, data) {
           console.log("Got Notification of Shipping Address change:");
           // console.log(data);
            $scope.$broadcast('ShipAddressChangeMade', data);
        });
    };

    function getCartTotal(cart) {
        var total = 0;
        // for (cartItem of cart) { // for..of only works in modern browsers
        for (var idx = 0; idx < cart.length; idx++) {
            var cartItem = cart[idx];
            total += cartItem.quantity * cartItem.product.unitPrice;
        }
        return total;
    }

})();