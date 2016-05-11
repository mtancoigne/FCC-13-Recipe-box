import React from 'react';

import Ingredient from './Ingredient.jsx';

/* ------------------------------

Ingredient list

IngredientsList
  - Ingredient
------------------------------ */
class IngredientsList extends React.Component{
  render(){
    let i=0;
    let list=this.props.ingredients.split(',');
    for(let i=0; i<list.length; i++){
      list[i]=$.trim(list[i]);
    }
    var nodeList=list.map(function(ingredient){
      i++;
      return (<Ingredient ingredient={ingredient} key={i}/>);
    });
    return (<ul className="collection">{nodeList}</ul>);
  }
}

export default IngredientsList;
