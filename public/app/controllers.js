var app = angular.module('ecommerce');

app.controller('mainCtrl', function($scope, mainService, userService){

	$scope.getUser = function(){
		userService.getUser().then(function(response){
			$scope.user = response.data[0];
			$scope.cart = response.data[0].cart;
		})
	}


	$scope.getProducts = function(){
		mainService.getProducts().then(function(response){
			console.log(response)
			$scope.products = response.data;
			$scope.getUser();
			if($scope.cart){
				for(var i = 0; i < $scope.products.length; i++){
					for(var i = 0; i < $scope.cart.length; i++){
						if($scope.products[i]._id === $scope.cart[i].product._id){
							$scope.products[i].inCart = true;
						}
					}
				}
			}
			
		})
	}

	$scope.getProducts();

	$scope.addToCart = function(productId, product){
		userService.addToCart(productId).then(function(response){
			// inCart = !inCart;
			product.inCart = true;
			console.log(product);
			userService.getUser();
		})
	}

	
})

app.controller('userCtrl', function($scope, userService){

	$scope.getUser = function(){
		userService.getUser().then(function(response){
			$scope.user = response.data[0];
			$scope.cart = response.data[0].cart;
			var total = 0;
			for(var i = 0; i < $scope.cart.length; i++){
				$scope.cart[i].total = $scope.cart[i].product.price * $scope.cart[i].quantity;
				total += $scope.cart[i].total;
				$scope.total = total.toFixed(2);
			}
			console.log(response, $scope.user, $scope.cart, $scope.total);
		})
	}

	$scope.getUser();

	$scope.updateCartItemQuantity = function(itemId, quantity){
		userService.updateCartItemQuantity(itemId, quantity).then(function(response){
			$scope.getUser();
		})
	}

	$scope.deleteItem = function(itemId){
		userService.deleteItem(itemId).then(function(response){
			$scope.getUser();
		})
	}
})

app.controller('adminCtrl', function($scope, mainService){

	$scope.getProducts = function(){
		mainService.getProducts().then(function(response){
			console.log(response)
			$scope.products = response.data;
		})
	}

	$scope.getProducts();

	$scope.removeProduct = function(id){
		if(confirm("Are you sure you want to delete this product?")){
			mainService.removeProduct(id).then(function(response){
				$scope.getProducts();
			})
		}
	}

	$scope.addProduct = function(product, price, description){
		mainService.addProduct(product, price, description).then(function(response){
			$scope.newProduct = '';
			$scope.productPrice = '';
			$scope.productDescription = '';
			$scope.getProducts();
		})
	}

	$scope.updateProduct = function(id, product, description, price){
		if(confirm("Are you sure you want to update this products info?")){
			mainService.updateProduct(id, product, description, price).then(function(response){
				alert('This product has been updated.')
				$scope.getProducts();
			})
		}
	}

})
