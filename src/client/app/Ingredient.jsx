import React from 'react';

/* ------------------------------

One ingredient

------------------------------ */
class Ingredient extends React.Component{
  render(){
    return (<li className="collection-item">{this.props.ingredient}</li>);
  }
}

export default Ingredient;
