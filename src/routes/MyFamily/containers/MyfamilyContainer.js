import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import MyfamilyMarkup from '../components/MyfamilyMarkup';

class Myfamily extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
      showModal: false,
    };
  }

  render () {
    return (
      <MyfamilyMarkup
        appState={this.props.appState}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}
        handleDropdownSelect={this._handleDropdownSelect}
        activeDropdown={this.state.activeDropdown}
        showModal={this.state.showModal}
        handleModal={this._handleModal}
        children={this.props.children}
      />
    );
  }
  
  @autobind
  _handleTabSelect (activeTab) {
    this.setState({activeTab});
  }
  @autobind
  _handleDropdownSelect () {
    this.setState({activeDropdown: !this.state.activeDropdown});
  }
  @autobind
  _handleModal (event, showModal) {
    this.setState({showModal});
  }
}

Myfamily.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Myfamily);
