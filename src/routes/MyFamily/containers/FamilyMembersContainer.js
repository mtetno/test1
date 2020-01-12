import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import FamilyMemberUserProfile from '../components/tabs/FamilyMemberUserProfile';
import { browserHistory } from 'react-router';

class FamilyMembersContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
    };
  }

  componentDidMount () {
    this.props.actions.getMembers();
  }

  render () {
    return (
      <FamilyMemberUserProfile
      appState={this.props.familyMemberState}
      handleStart = {this._handleStart}
      />
    );
  }

  @autobind
  _handleStart(id) {
  browserHistory.push('/questionaire/survey?dependentId='+id);
  }

}

FamilyMembersContainer.propTypes = {
  actions: PropTypes.shape({
    forget: PropTypes.func,
  }),
  appState: PropTypes.object,
  familyMemberState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.myhps,
    familyMemberState : state.familymembers
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { forget,getMembers } = actions;
    return {
      actions: bindActionCreators({ forget,getMembers }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(FamilyMembersContainer);
