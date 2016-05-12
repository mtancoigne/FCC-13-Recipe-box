import React from 'react';

/* ------------------------------

Modal to add/update a recipe

------------------------------ */
class ModalForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      id:null,
      name:'',
      ingredients:'',
      image:''
    };
  }

  componentWillReceiveProps(np) {
    this.setState({
      id:np.recipe.id,
      name:np.recipe.name,
      ingredients:np.recipe.ingredients,
      image:np.recipe.image
    });
  }

  _handleSubmit(event){
    event.preventDefault();
    if(this.state.name){
      // Cleaning the list
      let list=this.state.ingredients.split(',');
      for(let i=0; i<list.length; i++){
        list[i]=$.trim(list[i]);
      }
      this.props._saveRecipe({id:this.state.id, name:this.state.name, ingredients:list.join(', '), image:this.state.image});
      $('#formModal').closeModal();
    }else{
      toast('warning', 'You must at least provide a name !', 3000);
    }
  }

  render(){
    return (
      <div className="modal" id="formModal">
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div className="modal-content">
            <h4>{this.state.id?'Edit a recipe':'New recipe'}</h4>
            <div className="row">
              <div className="input-field col s12">
                <input
                id="rFormName"
                placeholder="My sweet recipe"
                type="text"
                className="validate"
                value={this.state.name}
                onChange={(e)=>this.setState({name:e.target.value})} />
                <label for="rFormIngredients">Recipe name</label>
              </div>
              <div className="input-field col s12">
                <input
                id="rFormIngredients"
                placeholder="Comma, Separated, Ingredients"
                type="text"
                className="validate"
                value={this.state.ingredients}
                onChange={(e)=>this.setState({ingredients:e.target.value})} />
                <label for="rFormIngredients">Ingredients</label>
              </div>
              <div className="input-field col s12">
                <input
                id="rFormImage"
                placeholder="You can leave this empty"
                type="text"
                className="validate"
                value={this.state.image}
                onChange={(e)=>this.setState({image:e.target.value})} />
                <label for="rFormImage">Image link</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="modal-action waves-effect waves-green btn-flat green-text">{(this.props.recipe.id===null)?'Add':'Update'}</button>
            <button className="modal-action modal-close waves-effect waves-red btn-flat red-text">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ModalForm;
