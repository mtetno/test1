import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import MyMedicalRecords from '../components/tabs/MyMedicalRecords';

class MyMedicalRecordsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
    };
  }
  componentWillMount(){
    this.props.actions.getDocuments();
  }
  render () {
    return (
     <MyMedicalRecords
      documents={this.props.documents}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}
        uploadFile={this._uploadFile}
        downloadDocuments={this._downloadDocuments}
        documentData={this.props.documentData}/>
    );
  }
 @autobind
  _uploadFile(file){
    var formData = new FormData();
    formData.append("file",file[0]);
    this.props.actions.uploadDocuments(formData).then((response) => {
        this.props.actions.getDocuments();
        this.setState(this.state);
      });
}
@autobind
_downloadDocuments(payload){
  this.props.actions.downloadDocuments(payload).then((response) => {
    this.setState(this.state);
    window.open(this.props.documentData.records.documentData,'_self');
    
  });
}
}

MyMedicalRecordsContainer.propTypes = {
  actions: PropTypes.shape({
    uploadDocuments: PropTypes.func,
    getDocuments: PropTypes.func,
    downloadDocuments: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    documents: state.records.documents,
    documentData:state
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { uploadDocuments,getDocuments,downloadDocuments } = actions;
  return {
      actions: bindActionCreators({ uploadDocuments,getDocuments,downloadDocuments}, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MyMedicalRecordsContainer);
