var RecipeBuilder = function () {
    var playground;
    var init = function () {
        playground = d3.select("#playground")
            .append("svg:svg")
            .attr("width", 1000)
            .attr("height", 2000);
        $("#add-recipe-button").click(addRecipe);
    };

    var addRecipe = function () {
        var dragUtil = new DragUtil(playground);
        var countOfRecipes = $(".recipe").size();
        dragUtil.addDraggableRectangle("recipe-" + (countOfRecipes + 1), "recipe");

    };

    init();
}

var recipeBuilder;
$(function () {
    recipeBuilder = new RecipeBuilder();
});
