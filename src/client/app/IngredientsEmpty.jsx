import React from 'react';

/* ------------------------------

Message for no ingredients

------------------------------ */
class IngredientsEmpty extends React.Component{
  render(){
    return (<p className="light-blue-text">There is no ingredient for this recipe.</p>);
  }
}
export default IngredientsEmpty;
