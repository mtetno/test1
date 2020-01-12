import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import actions from '../modules/actions';
import ResetMarkup from '../components/ResetMarkup';
import globalHelpers from '../../../utils/helpers';

class Reset extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      token: null,
      input: [{
        'order': 0,
        'id': 'page_title',
        'type': 'short_password',
        'label': 'New Password',
        'value': '',
        'error': 0,
        'mandatory': 1,
        'errorText': 'Please enter valid title.',
        'disabled': false,
      }, {
        'order': 1,
        'id': 'page_title',
        'type': 'short_password',
        'label': 'Confirm Password',
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
      this._init(query);
    }
  }

  render () {
    return (
      <ResetMarkup
        appState={this.props.appState}
        formData={this.state.input}
        updateValue={this._updateValue}
        social={this._social}
        signin={this._signin}
      />
    );
  }

  _init (query) {
    this.props.actions.verifyReset({token: query.token});
    this.setState({
      token: query.token,
    });
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
          password: input[1].value,
        };
      this.props.actions.reset(payload, this.state.token).then((response) => {
        if (response.success) {
          browserHistory.push('/');
        }
      });
    }
  }

  @autobind
  _social () {
    window.location.assign('http://localhost:4040/auth/google');
  }
}

Reset.propTypes = {
  actions: PropTypes.shape({
    reset: PropTypes.func,
    verifyReset: PropTypes.func,
  }),
  location: PropTypes.shape({
    query: PropTypes.object,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.reset,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { reset, verifyReset } = actions;

    return {
      actions: bindActionCreators({ reset, verifyReset }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
