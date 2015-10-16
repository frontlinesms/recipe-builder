var RecipeBuilder = function () {
    var playground;
    var init = function () {
        d3.select("#playground")
            .append("svg:svg")
            .attr("width", 800)
            .attr("height", 1000);
    };

    var addRecipe = function () {
        //
    };
    init();
}

var recipeBuilder;
$(function () {
    recipeBuilder = new RecipeBuilder();

});
