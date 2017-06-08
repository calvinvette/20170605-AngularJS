(function () {

    angular.module('sharedModule').factory('cartFactory', cartFactory);

    cartFactory.$inject = ['$http'];

    function cartFactory($http) {
        var self = this;
        self.cart = [];

        function removeFromCart(product) {
            console.log("Removing from cart.");
            console.log(product);
        }

        function addToCart(product, quantity) {
            console.log("Adding to cart.");
            self.cart.push({
                produuuuct: product,
                quantity: quantity,
                extendedPrice: product.unitPrice * quantity
            })
        }

        function getCartTotal() {
            console.log("Getting cart total");
            var total = 0;
            for (var i = 0; i < items.length; i++) {
                total += items[i].extendedPrice;
            }
            return total;
        }
    }

    return {
        cart: self.cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }

})();