angular
	.module('munchWithMe', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(	 $routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/templates/food-index.html',
			controller: 'FoodIndexController',
			controllerAs: 'fc'
		})
		.when('/:id', {
			templateUrl: '/templates/food-show.html',
			controller: 'FoodShowController',
			controllerAs: 'fs'
		})

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}