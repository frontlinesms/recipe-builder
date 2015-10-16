var RecipeBuilder = function () {
    var playground;
    var linkingRecipes = false;
    var recipeA, recipeB;
    var init = function () {
        playground = d3.select("#playground")
            .append("svg:svg")
            .attr("width", 1000)
            .attr("height", 2000);
        $("#add-recipe-button").click(addRecipe);
        $("#link-two-recipes").change(linkRecipes);
    };

    var addRecipe = function () {
        var dragUtil = new DragUtil(playground);
        var countOfRecipes = $(".recipe").size();
        dragUtil.addDraggableRectangle(countOfRecipes + 1, "recipe");
        $(".recipe:last-child").on("click", joinRecipe);
    };

    var linkRecipes = function () {
        var linkRecipesActive = $("#link-two-recipes").is(":checked");
        if(linkRecipesActive) {
            linkingRecipes = true;
        } else {
            linkingRecipes = false
        }
        recipeA = undefined;
        recipeB = undefined;
    };

    var joinRecipe = function () {
        var recipe = $(this);
        console.log(this);
        if(linkingRecipes) {
            if(typeof recipeA === "undefined") {
                console.log("Setting recipeA");
                recipeA = recipe.rectangleId;
                console.log(recipeA);
            }
            if(typeof recipeA !== "undefined" && typeof recipeB === "undefined") {
                console.log("Setting recipeB");
                recipeB = recipe.attr("rectangleId");
                console.log(recipeB);
            }
        }
    };

    init();
}

var recipeBuilder;
$(function () {
    recipeBuilder = new RecipeBuilder();
});
