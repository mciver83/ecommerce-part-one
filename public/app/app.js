var app = angular.module('ecommerce', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/main.html',
		controller: 'mainCtrl'
	})
	.when('/cart', {
		templateUrl: 'app/views/cart.html',
		controller: 'userCtrl'
	})
	.when('/admin', {
		templateUrl: 'app/views/admin.html',
		controller: 'adminCtrl'
	})
	.otherwise('/');
})