var app = angular.module('ecommerce');

app.controller('mainCtrl', function($scope, mainService){

	$scope.getProducts = function(){
		mainService.getProducts().then(function(response){
			console.log(response)
			$scope.products = response.data;
		})
	}

	$scope.getProducts();

	$scope.addToCart = function(product){
		mainService.addToCart().then(function(response){
			console.log(response);
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