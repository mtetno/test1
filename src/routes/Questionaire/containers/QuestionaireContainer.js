import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import actions from '../modules/actions';
import QuestionaireMarkup from '../components/QuestionaireMarkup';
import globalHelpers from '../../../utils/helpers';

class Questionaire extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.actions.getQuestions();
  }

  render () {
    return (
      <QuestionaireMarkup
        appState={this.props.appState}
        handleStart={this._handleStart}
        signin={this.props.signin}
      />
    );
  }
  
  @autobind
  _handleStart () {
    browserHistory.push('/questionaire/survey');
  }
}

Questionaire.propTypes = {
  actions: PropTypes.shape({
    getQuestions: PropTypes.func,
    getDieasesEnd: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.questionaire,
    signin: state.signin,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { getQuestions, getDieasesEnd } = actions;

    return {
      actions: bindActionCreators({ getQuestions, getDieasesEnd }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Questionaire);
