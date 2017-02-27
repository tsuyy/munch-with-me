var Meal = function() {
	this.image = "";
	this.name = "";
	this.ingredients = [];
}

Meal.prototype.addIngredient = function(item){
	this.ingredients.push(item)
}

var menu_list = (function prepFood(){
	
	var food1 = new Meal({
		image: "http://img.sndimg.com/food/image/upload/h_488,w_651,c_fit/v1/img/recipes/16/37/24/PuuGpkuvRBqeNyABzxCG_PSBE%205%20-%20final_3.jpg",
		name: "Avocado Toast",
		ingredients: ["eggs", "bread", "avocado"]
	});
	
	var food2 = new Meal({
		image: "http://img.sndimg.com/food/image/upload/h_488,w_651,c_fit/v1/img/recipes/26/76/10/R6nK6YNjRvuvJTGpeQQ9_BCS%203%20-%20final_1.png",
		name: "Breakfast Sandwich",
		ingredients: ["bacon", "eggs", "mayonnaise", "tomato"]
	});
	
	var food3 = new Meal({
		image: "http://img.sndimg.com/food/image/upload/h_488,w_651,c_fit/v1/img/recipes/37/47/25/KVwNMCzGTjOUCLc3gqwG_scrambled-egg-2.jpg",
		name: "Mexican Egg Scramble",
		ingredients: ["bacon", "mushrooms", "onion", "red pepper", "cheese", "eggs"]
	});
	
	var food4 = new Meal ({
		image: 'http://img.sndimg.com/food/image/upload/h_488,w_651,c_fit/v1/img/submissions/recipe/33186/GEkQMFqkSXCXUjlCtLTA_Devour-22.jpg',
		name: 'Zucchini Quiche',
		ingredients: ["butter", "breadcrumbs", "zucchini", "eggs", "cheese"]
	});

	return [food1, food2, food3, food4];



})();