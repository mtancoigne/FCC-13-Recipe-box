import React from 'react';

/* ------------------------------

Modal to import/export the data

------------------------------ */
class ModalExport extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode:null,
      data:''
    };
  }

  componentWillReceiveProps(np) {
    this.setState({
      mode:np.data.mode,
      data:np.data.data
    });
  }

  render(){
    return(
      <div className="modal" id="exportModal">
        <form
          onSubmit={this._batchImport.bind(this)}
          >
          <div className="modal-content">
            <h4>{(this.state.mode==='export')?'Export data':'Import JSON data'}</h4>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  className="materialize-textarea"
                  value={this.state.data}
                  onChange={(e)=>this.setState({data:e.target.value})}/>
                <label for="ieFormText">Copy/paste some JSON data !</label>
              </div>
            </div>
          </div>
          {(this.state.mode==='import')?(
            <div className="modal-footer">
              <button
                type="submit"
                className="waves-effect waves-green btn-flat green-text"
                >Import now</button>
              <button onClick={this._hideModal} type="reset" className="modal-action modal-close waves-effect waves-red btn-flat red-text">Cancel</button>
            </div>
              ):(
            <div className="modal-footer">
              <a href="#!" onClick={this.hideModal} className="modal-action modal-close waves-effect waves-green btn-flat green-text">Close</a>
            </div>
          )}
        </form>
      </div>
    );
  }

  /** I don't get why the default cancel button don't work, so... small workaround...*/
  _hideModal(){
    $('#exportModal').closeModal();
  }

  _batchImport(e){
    e.preventDefault;
    // Check for valid JSON
    if(checkJSON(this.state.data)){
      this.props._batchImport(JSON.parse(this.state.data));
      $('#exportModal').closeModal();
      return true;
    }else{
      toast('warning', 'You are trying to import invalid data.', 3000);
      return false;
    }
  }

}

export default ModalExport;
