import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import ForgetMarkup from '../components/ForgetMarkup';
import globalHelpers from '../../../utils/helpers';
import patterns from '../../../config/patterns';

class Forget extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: [{
        'order': 0,
        'id': 'page_order',
        'type': 'short_input',
        'label': 'Email',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid order.',
        'disabled': false,
        'pattern': patterns.EMAIL_PATTERN,
      }],
    };
  }

  render () {
    return (
      <ForgetMarkup
        appState={this.props.appState}
        formData={this.state.input}
        updateValue={this._updateValue}
        forget={this._forget}
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
  _forget (e) {
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
          email: input[0].value,
        };
      this.props.actions.forget(payload);
    }
  }

  @autobind
  _social () {
    window.location.assign('http://localhost:4040/auth/google');
  }
}

Forget.propTypes = {
  actions: PropTypes.shape({
    forget: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.forget,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { forget } = actions;

    return {
      actions: bindActionCreators({ forget }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Forget);
