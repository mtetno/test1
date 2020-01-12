import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import SeekHelpMarkup from '../components/SeekHelpMarkup';

class Seekhelp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
      showModal: false,
      showPlayerModal: false,
      showSymptomQuestions:false,
    };
  }

  render () {
    return (
      <SeekHelpMarkup
        appState={this.props.appState}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}
        handleDropdownSelect={this._handleDropdownSelect}
        activeDropdown={this.state.activeDropdown}
        showModal={this.state.showModal}
        handleModal={this._handleModal}
        handleShowPlayerModal={this._handleShowPlayerModal}
        hideModal={this._hideModal}
        showPlayerModal={this.state.showPlayerModal}
        showSymptomQuestions={this.state.showSymptomQuestions}
        toggleSymptomQuestions={this._toggleSymptomQuestions}
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
  @autobind
  _handleShowPlayerModal () {
    this.setState({showPlayerModal: true});
  }
  @autobind
  _hideModal () {
    this.setState({showPlayerModal: false});
  }
  @autobind
  _toggleSymptomQuestions () {
    this.setState({showSymptomQuestions:true});
  }
}

Seekhelp.propTypes = {
  actions: PropTypes.shape({
    forget: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.seekhelp,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { forget } = actions;

    return {
      actions: bindActionCreators({ forget }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Seekhelp);
