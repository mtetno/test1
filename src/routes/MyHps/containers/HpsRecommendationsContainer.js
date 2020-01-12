import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import HpsGenericRecommendations from '../components/tabs/HpsGenericRecommendations';


class HpsRecommendationsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
    };
  }
  componentWillMount () {
    this.props.actions.getGRecommendation();
    }
  render () {
    return (
     <HpsGenericRecommendations
        appState={this.props.appState}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}/>
    );
  }
}

HpsRecommendationsContainer.propTypes = {
  actions: PropTypes.shape({
    getGRecommendation: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.myhps,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { getGRecommendation } = actions;

    return {
      actions: bindActionCreators({ getGRecommendation }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HpsRecommendationsContainer);
