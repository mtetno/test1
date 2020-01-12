import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import actions from '../modules/actions';
import SignupMarkup from '../components/SignupMarkup';
import globalHelpers from '../../../utils/helpers';
import patterns from '../../../config/patterns';

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: [{
        'order': 0,
        'id': 'signup_first_name',
        'type': 'short_input',
        'label': 'FIRST NAME *',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
        'pattern' :'ONLY_LETTERS_PATTERN'
      }, {
        'order': 1,
        'id': 'signup_last_name',
        'type': 'short_input',
        'label': 'LAST NAME *',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
        'pattern' :'ONLY_LETTERS_PATTERN'
      }, {
        'order': 2,
        'id': 'signup_email',
        'type': 'short_input',
        'label': 'EMAIL*',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid order.',
        'disabled': false,
        'pattern':'EMAIL_PATTERN', 
      }, {
        'order': 3,
        'id': 'signup_password',
        'type': 'short_password',
        'label': 'PASSWORD *',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
        'pattern': 'PASSWORD_PATTERN',
      }, {
        'order': 4,
        'id': 'signup_password2',
        'type': 'short_password',
        'label': 'CONFIRM PASSWORD *',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
        'pattern': 'PASSWORD_PATTERN',
      }, {
        'order': 5,
        'id': 'signup_dob',
        'type': 'date_input',
        'label': 'DOB *',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
        'pattern': 'NO_FUTURE_DATE'
      }, {
        'order': 6,
        'id': 'signup_phone',
        'type': 'radio_button_group',
        'label': 'GENDER *',
        'value': '',
        'error': 0,
        'options':["MALE","FEMALE"],
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
      }, {
        'order': 7,
        'id': 'signup_city',
        'type': 'short_input',
        'label': 'CITY *',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
        'pattern' :'ONLY_LETTERS_PATTERN'
      }, {
        'order': 8,
        'id': 'signup_state',
        'type': 'short_input',
        'label': 'STATE *',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
        'pattern' :'ONLY_LETTERS_PATTERN'
      }, {
        'order': 9,
        'id': 'signup_country',
        'type': 'short_input',
        'label': 'COUNTRY *',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
        'pattern' :'ONLY_LETTERS_PATTERN'
      }],
    };
  }

  render () {
    return (
      <SignupMarkup
        appState={this.props.appState}
        formData={this.state.input}
        updateValue={this._updateValue}
        signup={this._signup}
      />
    );
  }

  @autobind
  _updateValue (e, key, formType) {
    if (key !== undefined) {
      if (formType === 'input_radio_group') {
        const input = this.state.input;
        input[6].value = key;
        this.setState({
          input,
        });
      }
      else
      if (formType === 'input') {
        const input = this.state.input;
        input[key].value = e.target.value;
        const filtered_input=globalHelpers.validation([input[key]]);
        input[key]=filtered_input[0];
        input[key].value = e.target.value;
        this.setState({
         input
        });
      }
      else if
       (formType === 'date') {
        const input = this.state.input;
        input[key].value = e!=null?e.slice(0,10).split('-').reverse().join('-'):null;
        const filtered_input=globalHelpers.validation([input[key]]);
        input[key]=filtered_input[0];
        input[key].value= e;
        this.setState({
         input
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
  _signup (e) {
    if (e) {
      e.preventDefault();
    }
    const
      input = globalHelpers.validation(this.state.input),
      varifyPassword=input[3].value==input[4].value;
      if(!varifyPassword){
         input[3].error=true;
         input[4].error=true;
         input.valid=false;
         input[3].errorText="password Does not match";
         input[4].errorText="password Does not match";
    }
    this.setState({
      input,
    });
    
    if (input.valid) {
    
      const
        payload = {
          firstName: input[0].value,
          lastName: input[1].value,
          email: input[2].value,
          password: input[3].value,
          dob: input[5].value.slice(0,10).split('-').reverse().join('-'),
          street: '',
          city: input[7].value,
          state: input[8].value,
          country: input[9].value,
          gender: input[6].value,
        };
        this.props.actions.signup(payload).then((response) => {
          if (response) {
            browserHistory.push('/');
          }
        });
    }
  }
}

Signup.propTypes = {
  actions: PropTypes.shape({
    signup: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.signup,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { signup } = actions;

    return {
      actions: bindActionCreators({ signup }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
