import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import signinActions from '../../Signin/modules/actions';
import MyPhenotype from '../components/tabs/MyPhenotype';

class MyPhenotypeContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
    };
  }
  componentWillMount () {
  this.props.actions.getPhenoType();
  this.props.actions.getArticles();
  this.props.actions.getUserDetails();
  }

  render () {
    return (
      <MyPhenotype
        phenoType={this.props.phenoType}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}
        userDetails={this.props.userDetails}
        appState={this.props.appState}
      />
    );
  }
}

MyPhenotypeContainer.propTypes = {
  actions: PropTypes.shape({
    getRecommendation: PropTypes.func,
    getPhenoType: PropTypes.func,
    getArticles:  PropTypes.func,
    getUserDetails:  PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    phenoType: state.mypheno.phenoType, 
    appState:state,
    userDetails: state.signin.userDetails,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { getRecommendation,getPhenoType,getArticles } = actions,
      { getUserDetails } = signinActions;

    return {
      actions: bindActionCreators({ getRecommendation,getPhenoType,getArticles,getUserDetails}, dispatch),
     
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(MyPhenotypeContainer);
