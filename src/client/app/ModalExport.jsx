import React from 'react';

class ModalExport extends React.Component{
  render(){
    return(
      <div className="modal" id="IEModal">
        <div className="modal-content">
          <h4>Export data</h4>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="ieFormText" className="materialize-textarea" />
              <label for="ieFormText">Copy/paste some JSON data !</label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action waves-effect waves-green btn-flat green-text">{this.props.btn}</a>
        </div>
      </div>
    );
  }
}

export default ModalExport;
