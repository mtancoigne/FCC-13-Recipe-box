import React from 'react';

import IngredientsList from './IngredientsList.jsx';
import IngredientsEmpty from './IngredientsEmpty.jsx';

/* ------------------------------

Recipe component

Recipe
  - IngredientsList
    - Ingredient
  - IngredientsEmpty if no ingredients
------------------------------ */
class Recipe extends React.Component{
  constructor(props){
    super(props);
    // Setting default image if needed
    if ($.trim(this.props.recipe.image) === '') {
      this.props.recipe.image='http://placeholdit.imgix.net/~text?txtsize=60&txt=Yum+%21&w=400&h=400&txttrack=0';
    }
  }

  render(){
    //console.log('    Recipe.render called (id: '+this.props.rId+')');
    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.recipe.image} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4 truncate">
              {this.props.recipe.name}
            </span>
          </div>
          <div className="card-actions">
            <div className="row">
              <div className="col s6">
                <a href="#" className="btn btn-block btn-flat btn-block red-text" onClick={this._deleteRecipe.bind(this)}><i className="fa fa-trash" title="Delete"></i></a>
              </div>
              <div className="col s6">
                <a href="#" className="btn btn-block btn-flat btn-block green-text" onClick={this._recipeForm.bind(this)}><i className="fa fa-pencil" title="Edit"></i></a>
              </div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4 truncate">
              {this.props.recipe.name}<i className="fa fa-times right"></i>
            </span>
            {this.props.recipe.ingredients.length ? <IngredientsList ingredients={this.props.recipe.ingredients}/> : <IngredientsEmpty />}
          </div>
        </div>
      </div>
    );
  }

  _deleteRecipe(e){
    this.props._deleteRecipe(this.props.recipe.id);
  }

  _recipeForm(e){
    console.log('Editing ' + this.props.recipe.id);
    this.props._recipeForm(this.props.recipe.id);
  }

}

export default Recipe;
