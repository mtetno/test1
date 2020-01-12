import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import HpsGenericRecommendationsDetail from '../components/tabs/HpsGenericRecommendationsDetail';


class RecommendationsDetailContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
      recommendationId:0
    };
  }
  componentWillMount(){
    this.setState({recommendationId:this.props.params.recommendationId});
  }
 render () {
    return (
     <HpsGenericRecommendationsDetail
        appState={this.props.appState}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}
         recommendationId={this.state.recommendationId}/>
       
    );
  }
}

RecommendationsDetailContainer.propTypes = {
  actions: PropTypes.shape({
    forget: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.myhps,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { forget } = actions;

    return {
      actions: bindActionCreators({ forget }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationsDetailContainer);
