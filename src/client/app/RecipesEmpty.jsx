import React from 'react';

/* ------------------------------

Message for no recipes

------------------------------ */
class RecipesEmpty extends React.Component{
  render(){
    return (
      <div className="col s12">
        <div className="card-panel light-blue white-text">
          There is no recipe at the moment. You may consider to add one.
        </div>
      </div>
    );
  }
}

export default RecipesEmpty;
