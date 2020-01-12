import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import actions from '../modules/actions';
import SigninMarkup from '../components/SigninMarkup';
import globalHelpers from '../../../utils/helpers';
import patterns from '../../../config/patterns';

class Signin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: [{
        'order': 0,
        'id': 'username',
        'type': 'short_input',
        'label': 'USERNAME',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid order.',
        'disabled': false,
        'pattern': 'EMAIL_PATTERN',
      }, {
        'order': 1,
        'id': 'password',
        'type': 'short_password',
        'label': 'PASSWORD',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
      }],
    };
  }

  componentDidMount () {
    const { query } = this.props.location;
    if (query.token) {
      this.props.actions.verify({token: query.token}).then((response) => {
        if (response) {
          browserHistory.push('home/question');
        }
      });
    }
  }

  render () {
    return (
      <SigninMarkup
        appState={this.props.appState}
        formData={this.state.input}
        updateValue={this._updateValue}
        social={this._social}
        signin={this._signin}
        forget={this._forget}
        signup={this._signup}
      />
    );
  }

  @autobind
  _updateValue (e, key, formType) {
    if (key !== undefined) {
      if (formType === 'input') {
        const input = this.state.input;
        input[key].value = e.target.value;
        this.setState({
          input,
        });
      } else {
        const formTypeDate = this.state.formTypeDate;
        formTypeDate[formType].input[key].value = e.target.value;
        this.setState({
          formTypeDate,
        });
      }
    }
  }

  @autobind
  _signin (e) {
    if (e) {
      e.preventDefault();
    }
    const
      input = globalHelpers.validation(this.state.input);
    this.setState({
      input,
    });
    if (input.valid) {
      const
        payload = {
          grant_type: 'password',
          username: input[0].value,
          password: input[1].value,
        };
      this.props.actions.signin(payload).then((response) => {
        if (response) {
          this.props.actions.getUserDetails().then((response) => {
            this.props.actions.getQuestionnaireStatus().then((response) => {
              if (response) {
                if(response.status == 'COMPLETE') {
                  browserHistory.push('/dashboard');
                } else {
                  browserHistory.push('questionaire/start');
                }
              }
            });
          });
        }
      });
    }
  }

  @autobind
  _forget () {
    browserHistory.push('forget');
  }

  @autobind
  _signup () {
    browserHistory.push('signup');
  }

  @autobind
  _social (e, provider) {
    if (e) {
      e.preventDefault();
    }
    window.location.assign(`http://localhost:4040/auth/${provider}`);
  }
}

Signin.propTypes = {
  actions: PropTypes.shape({
    signinEnd: PropTypes.func,
    signin: PropTypes.func,
    verify: PropTypes.func,
    getQuestionnaireStatus: PropTypes.func,
    getUserDetails: PropTypes.func,
  }),
  location: PropTypes.shape({
    query: PropTypes.object,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.signin,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { signinEnd, signin, verify, getQuestionnaireStatus, getUserDetails } = actions;

    return {
      actions: bindActionCreators({ signinEnd, signin, verify, getQuestionnaireStatus, getUserDetails }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
