import React from 'react';

import Recipe from './Recipe.jsx';

/* ------------------------------

List of recipes

RecipesList
  - Recipe
    - IngredientsList
      - Ingredient
    - IngredientsEmpty if no ingredients
------------------------------ */
class RecipesList extends React.Component{
  render(){
    console.log('  RecipesList.render called');
    var nodeList=this.props.recipes.map(recipe=>(
      <Recipe
      recipe={recipe}
      key={recipe.id}
      rId={recipe.id}
      _recipeForm={this.props._recipeForm.bind(this)}
      _deleteRecipe={this.props._deleteRecipe.bind(this)}
      />
    ));
    return <div>{nodeList}</div>;
  }
}

export default RecipesList;
