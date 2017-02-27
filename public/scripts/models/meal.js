function Meal(image, name, ingredients) {
	this.image = image;
	this.name = name;
	this.ingredients = ingredients;
}

Meal.prototype.addIngredient = function(item){
	this.ingredients.push(item)
}

var menu_list = (function prepFood(){
	
	var food1 = new Meal("http://img.sndimg.com/food/image/upload/h_488,w_651,c_fit/v1/img/recipes/16/37/24/PuuGpkuvRBqeNyABzxCG_PSBE%205%20-%20final_3.jpg", "Avocado Toast", ["eggs", "bread", "avocado"]);

	var food2 = new Meal("http://img.sndimg.com/food/image/upload/h_488,w_651,c_fit/v1/img/recipes/26/76/10/R6nK6YNjRvuvJTGpeQQ9_BCS%203%20-%20final_1.png", "Breakfast Sandwich", ["bacon", "eggs", "mayonnaise", "tomato"]);
	
	var food3 = new Meal("http://img.sndimg.com/food/image/upload/h_488,w_651,c_fit/v1/img/recipes/37/47/25/KVwNMCzGTjOUCLc3gqwG_scrambled-egg-2.jpg", "Mexican Egg Scramble", ["bacon", "mushrooms", "onion", "red pepper", "cheese", "eggs"]);

	var food4 = new Meal('http://img.sndimg.com/food/image/upload/h_488,w_651,c_fit/v1/img/submissions/recipe/33186/GEkQMFqkSXCXUjlCtLTA_Devour-22.jpg', 'Zucchini Quiche', ["butter", "breadcrumbs", "zucchini", "eggs", "cheese"]);
	

	return [food1, food2, food3, food4];

})();