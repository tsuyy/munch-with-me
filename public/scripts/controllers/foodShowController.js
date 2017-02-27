angular
	.module('munchWithMe')
	.controller('FoodShowController', FoodShowController);

FoodShowController.$inject['$routeParams'];
function FoodShowController($routeParams){
	var index = $routeParams.id;
	var vm = this;
	vm.menu = menu_list[index];

  // vm.menu = menu_list;//generated in meal.js
  // vm.pickedMeal = function(index){
  // 	return vm.menu[index];
  // }
}

