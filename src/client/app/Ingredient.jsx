import React from 'react';

class Ingredient extends React.Component{
  render(){
    return (<li className="collection-item">{this.props.ingredient}</li>);
  }
}

export default Ingredient;
