angular
	.module('munchWithMe')
	.controller('FoodIndexController', FoodIndexController);

function FoodIndexController(){
	var vm = this;
  vm.menu = menu_list;//generated in meal.js

}