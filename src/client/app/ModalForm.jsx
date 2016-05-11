import React from 'react';

class ModalForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      recipe:this.props.recipe
    };
  }

  _handleSubmit(event){
    event.preventDefault();
    if(this._name.value){
      // Cleaning the list
      let list=this._ingredients.value.split(',');
      for(let i=0; i<list.length; i++){
        list[i]=$.trim(list[i]);
      }
      this.props._saveRecipe({id:this.state.id, name:this._name.value, ingredients:list.join(', '), image:this._image.value});
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
            <h4>{this.props.id?'Edit a recipe':'New recipe'}</h4>
            <div className="row">
              <div className="input-field col s12">
                <input
                id="rFormName"
                placeholder="My sweet recipe"
                type="text"
                className="validate"
                defaultValue={this.state.recipe.name}
                ref={(input)=>this._name=input} />
                <label for="rFormIngredients">Recipe name</label>
              </div>
              <div className="input-field col s12">
                <input
                id="rFormIngredients"
                placeholder="Comma, Separated, Ingredients"
                type="text"
                className="validate"
                defaultValue={this.state.recipe.ingredients}
                ref={(input)=>this._ingredients=input} />
                <label for="rFormIngredients">Ingredients</label>
              </div>
              <div className="input-field col s12">
                <input
                id="rFormImage"
                placeholder="You can leave this empty"
                type="text"
                className="validate"
                defaultValue={this.state.recipe.image}
                ref={(input)=>this._image=input} />
                <label for="rFormImage">Image link</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="modal-action waves-effect waves-green btn-flat green-text">Add</button>
            <button type="reset" className="modal-action modal-close waves-effect waves-red btn-flat red-text">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ModalForm;
