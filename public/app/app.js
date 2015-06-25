var app = angular.module('ecommerce', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/main.html',
		controller: 'mainCtrl'
	})
	.when('/admin', {
		templateUrl: 'app/views/admin.html',
		controller: 'adminCtrl'
	})
	.otherwise('/');
})