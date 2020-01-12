import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import AddFamilyMember from '../components/tabs/AddFamilyMemberMarkup';
import { browserHistory } from 'react-router';
import globalHelpers from '../../../utils/helpers';
import patterns from '../../../config/patterns';

class AddFamilyContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      nickName: '',
      relationship: '',
      input: [{
      'order': 0,
      'id': 'firstname',
      'type': 'short_input',
      'label': 'First Name : ',
      'value': '',
      'error': 0,
      'mandatory': 1,
      'errorText': 'Please enter valid title.',
      'disabled': false,
      'pattern' :patterns.ONLY_LETTERS_PATTERN
      },
      {
      'order': 1,
      'id': 'lastname',
      'type': 'short_input',
      'label': 'Last Name : ',
      'value': '',
      'error': 0,
      'mandatory': 1,
      'errorText': 'Please enter valid title.',
      'disabled': false,
      'pattern' :patterns.ONLY_LETTERS_PATTERN
      },
      {
      'order': 2,
      'id': 'nickname',
      'type': 'short_input',
      'label': 'Nickname :',
      'value': '',
      'error': 0,
      'mandatory': 1,
      'errorText': 'Please enter valid title.',
      'disabled': false,
      'pattern' :patterns.ONLY_LETTERS_PATTERN
      },
      {
      'order': 3,
      'id': 'relation',
      'type': 'single_select',
      'label': 'Relation with user :',
      'value': '',
      'error': 0,
      'mandatory': 1,
      'errorText': 'Please enter valid title.',
      'disabled': false,
      'options': [{
        value : "SELECT",
        label : "Select"
     },
     {
        value : "MOTHER",
        label : "Mother"
      },
      {
        value : "FATHER",
        label : "Father"
      },
      {
        value : "SON",
        label : "Son"
      },
      {
        value : "DAUGHTER",
        label : "Daughter"
      },
      {
        value : "BROTHER",
        label : "Brother"
      },{
        value : "SISTER",
        label : "Sister"
      }
      ],
      },
      {
      'order': 4,
      'id': 'email',
      'type': 'short_input',
      'label': 'E-mail address :',
      'value': '',
      'error': 0,
      'mandatory': 1,
      'errorText': 'Please enter valid title.',
      'disabled': false,
      'pattern': patterns.EMAIL_PATTERN,
      },
      {
      'order': 5,
      'id': 'phone',
      'type': 'short_input',
      'inputType' : 'tel',
      'label': 'Mobile or Phone Number :',
      'value': '',
      'error': 0,
      'mandatory': 1,
      'errorText': 'Please enter valid title.',
      'disabled': false,
      'pattern':patterns.VALID_PHONE_NO
      }
  ],
    };
  }

  render () {
    return (
      <AddFamilyMember
      handleAddMemberSubmit={this._handleAddMemberSubmit}
      handleInput={this._updateValue}
      appState={this.props.appState}
      formData = {this.state.input}
      />
    );
  }

  @autobind
    _updateValue (e, key, formType) {
      if (key !== undefined) {
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
      }
    }

    @autobind
    _handleAddMemberSubmit (e) {
      if (e) {
        e.preventDefault();
      }
      const
        input = globalHelpers.validation(this.state.input);
      this.setState({
        input,
      });
      if (input.valid) {
        let payload = {
          firstName : input[0].value,
          lastName : input[1].value,
          nickName : input[2].value,
          relationship : input[3].value,
          email : input[4].value,
          phone : input[5].value,

        }
        this.props.actions.addMember(payload).then((response) => {
               browserHistory.push('/questionaire/survey');//TODO:  response is empty as of now need to handle
        });
      }
    }
  }
AddFamilyContainer.propTypes = {
  actions: PropTypes.shape({
    forget: PropTypes.func,
    addMember : PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.addmembers,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { forget,addMember,getMembers } = actions;

    return {
      actions: bindActionCreators({ forget ,addMember,getMembers }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddFamilyContainer);
