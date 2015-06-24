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
