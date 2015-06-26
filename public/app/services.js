var app = angular.module('ecommerce');

app.service('mainService', function($http){

	this.getProducts = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:9001/api/products'
		})
	}

	this.removeProduct = function(id){
		console.log(22222);
		return $http({
			method: 'DELETE',
			url:'http://localhost:9001/api/products?id=' + id
		})
	}

	this.addProduct = function(product, price, description){
		return $http({
			method: 'POST',
			url: 'http://localhost:9001/api/products',
			data: {
				product: product,
				price: price,
				description: description
			}
		})
	}

	this.updateProduct = function(id, product, description, price){
		return $http({
			method: 'PUT',
			url: 'http://localhost:9001/api/products?id=' + id,
			data: {

				product: product,
				description: description,
				price: price
			}
		})
	}
})

app.service('userService', function($http){

	this.getUser = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:9001/api/users'
		})
	}

	this.addToCart = function(productId){
		return $http({
			method: 'POST',
			url: 'http://localhost:9001/api/users/558cc563daab405523162191',
			data: {
				product: productId
			}
		})
	}

	this.updateCartItemQuantity = function(itemId, quantity){
		return $http({
			method: 'PUT',
			url: 'http://localhost:9001/api/users/558cc563daab405523162191/' + itemId,
			data: {
				'cart.$.quantity': quantity
			}
		})
	}

	this.deleteItem = function(itemId, quantity){
		return $http({
			method: 'DELETE',
			url: 'http://localhost:9001/api/users/558cc563daab405523162191/' + itemId,
		})
	}
})
