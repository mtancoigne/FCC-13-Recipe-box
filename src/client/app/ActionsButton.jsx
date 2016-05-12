import React from 'react';

/* ------------------------------

Buttons for main actions

------------------------------ */
class ActionsButton extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i className="fa fa-2x fa-fw fa-ellipsis-h"></i>
        </a>
        <ul>
          <li><a className="btn-floating red"><i className="fa fa-fw fa-upload" title="Export" onClick={this._exportData.bind(this)}></i></a></li>
          <li><a className="btn-floating green"><i className="fa fa-fw fa-download" title="Import" onClick={this._importData.bind(this)}></i></a></li>
          <li><a className="btn-floating blue"><i className="fa fa-fw fa-plus" title="Add" onClick={this._recipeForm.bind(this)}></i></a></li>
        </ul>
      </div>
    );
  }

  _recipeForm(e){
    this.props._recipeForm(null);
  }

  _exportData(e){
    this.props._exportData();
  }

  _importData(e){
    this.props._importData();
  }
}

export default ActionsButton
