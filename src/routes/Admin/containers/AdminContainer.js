import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import HomeActions from '../../Home/modules/actions';
import AdminMarkup from '../components/AdminMarkup';
import { browserHistory } from 'react-router';
import _ from 'lodash';

class Admin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: null,
      pageNumber: null,
      input_types: ['short_input', 'single_select', 'single_checkbox'],
      input: [{
        'order': 0,
        'id': 'page_order',
        'type': 'short_input',
        'label': 'Please enter order:',
        'value': '',
        'error': 0,
        'mandatory': 0,
        'errorText': 'Please enter valid order.',
        'disabled': false,
      }, {
        'order': 1,
        'id': 'page_title',
        'type': 'short_input',
        'label': 'Please enter title:',
        'value': '',
        'error': 0,
        'mandatory': 0,
        'errorText': 'Please enter valid title.',
        'disabled': false,
      }, {
        'order': 2,
        'id': 'page_select_input_type',
        'type': 'single_select',
        'label': 'Select Input Type',
        'value': '',
        'error': 0,
        'mandatory': 0,
        'errorText': 'Please enter valid name.',
        'disabled': false,
        'options': [{
          'value': '',
          'label': 'Select...',
        }, {
          'value': 0,
          'label': 'Short Input',
        }, {
          'value': 1,
          'label': 'Single Select',
        }, {
          'value': 2,
          'label': 'Single Checkbox',
        }],
      }],
      formTypeDate: [{
        'input': [{
          'order': 0,
          'id': 'question_order',
          'type': 'short_input',
          'label': 'Please enter order no:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid order no.',
          'disabled': false,
        }, {
          'order': 1,
          'id': 'question',
          'type': 'autosuggest',
          'label': 'Please enter question:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid question.',
          'disabled': false,
          'options': [],
        }, {
          'order': 2,
          'id': 'question_default_value',
          'type': 'short_input',
          'label': 'Please enter default value for input:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid default value.',
          'disabled': false,
        }, {
          'order': 3,
          'id': 'question_error_text',
          'type': 'short_input',
          'label': 'Please enter error text for input:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid error text.',
          'disabled': false,
        }, {
          'order': 4,
          'id': 'question_mandatory',
          'type': 'single_checkbox',
          'label': 'Is field mandatory:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please select if mandatory.',
          'disabled': false,
        }, {
          'order': 5,
          'id': 'question_disabled',
          'type': 'single_checkbox',
          'label': 'Is field disabled:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please select if disabled.',
          'disabled': false,
        }, {
          'order': 6,
          'id': 'question_dependent',
          'type': 'single_select',
          'label': 'Dependent on:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid dependent order no.',
          'disabled': false,
          'options': [],
        }, {
          'order': 7,
          'id': 'question_dependent_value',
          'type': 'short_input',
          'label': 'Dependent value:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid dependent value.',
          'disabled': false,
        }, {
          'order': 8,
          'id': 'question_placeholder',
          'type': 'short_input',
          'label': 'Please enter placeholder for input:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid placeholder.',
          'disabled': false,
        }],
      }, {
        'input': [{
          'order': 0,
          'id': 'question_order',
          'type': 'short_input',
          'label': 'Please enter order no:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid order no.',
          'disabled': false,
        }, {
          'order': 1,
          'id': 'question',
          'type': 'short_input',
          'label': 'Please enter question:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid question.',
          'disabled': false,
        }, {
          'order': 2,
          'id': 'question_default_value',
          'type': 'short_input',
          'label': 'Please enter default value for select:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid default value.',
          'disabled': false,
        }, {
          'order': 3,
          'id': 'question_error_text',
          'type': 'short_input',
          'label': 'Please enter error text for select:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid error text.',
          'disabled': false,
        }, {
          'order': 4,
          'id': 'question_mandatory',
          'type': 'single_checkbox',
          'label': 'Is field mandatory:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please select if mandatory.',
          'disabled': false,
        }, {
          'order': 5,
          'id': 'question_disabled',
          'type': 'single_checkbox',
          'label': 'Is field disabled:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please select if disabled.',
          'disabled': false,
        }, {
          'order': 6,
          'id': 'question_dependent',
          'type': 'single_select',
          'label': 'Dependent on:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid dependent order no.',
          'disabled': false,
          'options': [],
        }, {
          'order': 7,
          'id': 'question_dependent_value',
          'type': 'short_input',
          'label': 'Dependent value:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid dependent value.',
          'disabled': false,
        }, {
          'order': 8,
          'id': 'question_placeholder',
          'type': 'short_input',
          'label': 'Please enter placeholder for select:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid placeholder.',
          'disabled': false,
        }],
      }, {
        'input': [{
          'order': 0,
          'id': 'question_order',
          'type': 'short_input',
          'label': 'Please enter order no:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid order no.',
          'disabled': false,
        }, {
          'order': 1,
          'id': 'question',
          'type': 'short_input',
          'label': 'Please enter question:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid question.',
          'disabled': false,
        }, {
          'order': 2,
          'id': 'question_default_value',
          'type': 'short_input',
          'label': 'Please enter default value for checkbox:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid default value.',
          'disabled': false,
        }, {
          'order': 3,
          'id': 'question_error_text',
          'type': 'short_input',
          'label': 'Please enter error text for checkbox:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid error text.',
          'disabled': false,
        }, {
          'order': 4,
          'id': 'question_mandatory',
          'type': 'single_checkbox',
          'label': 'Is field mandatory:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please select if mandatory.',
          'disabled': false,
        }, {
          'order': 5,
          'id': 'question_disabled',
          'type': 'single_checkbox',
          'label': 'Is field disabled:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please select if disabled.',
          'disabled': false,
        }, {
          'order': 6,
          'id': 'question_dependent',
          'type': 'single_select',
          'label': 'Dependent on:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid dependent order no.',
          'disabled': false,
          'options': [],
        }, {
          'order': 7,
          'id': 'question_dependent_value',
          'type': 'short_input',
          'label': 'Dependent value:',
          'value': '',
          'error': 0,
          'mandatory': 0,
          'errorText': 'Please enter valid dependent value.',
          'disabled': false,
        }],
      }],
    };
  }

  componentWillMount () {
    this.props.actions.getPages();
    this.props.actions.getQuestions();
  }

  componentWillReceiveProps (nextProps) {
    const
      { pages } = nextProps.appState.home,
      { formTypeDate } = this.state,
      questionList = _.flatMap(pages, (item) =>
      _(item.questions)
        .map((v) => ({value: v.question, label: v.question}))
        .value()
    );

    questionList.unshift({value: '', label: 'Select...'});
    formTypeDate.map((form, index) => {
      formTypeDate[index].input[1].options = [];
      formTypeDate[index].input[6].options = questionList;
    });
    this.setState({
      pages,
      formTypeDate,
    });
  }

  render () {
    const
      { input, formTypeDate, page } = this.state,
      selectedFormTypeDate = input[2].value !== '' ? formTypeDate[input[2].value].input : [];
    return (
      <AdminMarkup
        createPage={this._createPage}
        appState={this.props.appState}
        formData={input}
        formTypeDate={selectedFormTypeDate}
        formType={input[2].value}
        updateValue={this._updateValue}
        addField={this._addField}
        editPage={this._editPage}
        page={page}
        pageNumber={this.state.pageNumber}
        addPage={this._addPage}
        onSuggestionsFetchRequested={this._onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this._onSuggestionsClearRequested}
        updateAutosuggestValue={this._updateAutosuggestValue}
        formChange={this._formChange}
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
  _formChange (submission, key, value) {
  }

  @autobind
  _updateAutosuggestValue (event, { newValue, method }) {
    const formTypeDate = this.state.formTypeDate;
    formTypeDate[0].input[1].value = newValue;
    this.setState({
      formTypeDate,
    });
  }

  _escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  _getSuggestions = (value) => {
    let escapedValue = this._escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp(`${escapedValue}`, 'i');

    return this.props.appState.admin.questions.filter((question) => regex.test(question.question));
  };

  _onSuggestionsFetchRequested = ({ value }) => {
    const formTypeDate = this.state.formTypeDate;
    formTypeDate[0].input[1].options = this._getSuggestions(value);
    this.setState({
      formTypeDate,
    });
  };

  _onSuggestionsClearRequested = () => {
    const formTypeDate = this.state.formTypeDate;
    formTypeDate[0].input[1].options = [];
    this.setState({
      formTypeDate,
    });
  };

  _addField = (e, pageNumber) => {
    e.preventDefault();
    const
      { input, formTypeDate, input_types } = this.state,
      fieldInput = formTypeDate[input[2].value].input;
    let
      page = this.state.page,
      questionOptions = [],
      field = {
        'order': parseInt(fieldInput[0].value),
        'id': `question_${fieldInput[0].value}`,
        'type': input_types[input[2].value],
        'label': fieldInput[1].value,
        'value': fieldInput[2].value,
        'errorText': fieldInput[3].value,
        'mandatory': fieldInput[4].value,
        'disabled': fieldInput[5].value,
        'dependent': fieldInput[6].value ? fieldInput[6].value : '',
        'dependent_value': fieldInput[7].value ? fieldInput[7].value : '',
        'placeholder': fieldInput[8].value ? fieldInput[8].value : '',
        'error': 0,
      };
    switch (parseInt(input[2].value)) {
      case 1:
        field.options = [{'value': 'no', 'label': 'No'}, {'value': 'yes', 'label': 'Yes'}];
        break;
    }
    if (page && page.questions.length) {
      page.questions = page.questions.map((question, index) => {
        if (parseInt(question.order) >= parseInt(fieldInput[0].value)) {
          question.order = parseInt(question.order) + 1;
        }
        return question;
      });
      page.questions.push(field);
    } else {
      page = {
        'order': parseInt(input[0].value),
        'title': input[1].value,
        'questions': [field],
      };
    }
    questionOptions = formTypeDate[0].input[6].options;
    questionOptions.push({'value': fieldInput[1].value, 'label': fieldInput[1].value});
    formTypeDate.map((form, index) => {
      formTypeDate[index].input[6].options = questionOptions || [];
    });
    this.setState({
      page,
      formTypeDate,
    });
  };

  _createPage = (e) => {
    e.preventDefault();
    let
      { pages } = this.props.appState.home,
      { page, pageNumber, input } = this.state;
    if (pageNumber !== null) {
      pages = pages.map((page, index) => {
        if (parseInt(page.order) >= parseInt(input[0].value)) {
          page.order = parseInt(page.order) + 1;
        }
        return page;
      });
      pages[pageNumber] = page;
    } else {
      pages = pages.map((page, index) => {
        if (parseInt(page.order) >= parseInt(input[0].value)) {
          page.order = parseInt(page.order) + 1;
        }
        return page;
      });
      pages.push(page);
    }
    this.props.actions.setPages(pages);
    browserHistory.push('/home/question');
  };

  // _createPage = (e) => {
  //   if (e) {e.preventDefault();}
  //   this.props.actions.createPage(this.state.page);
  // };

  _editPage = (e, index) => {
    e.preventDefault();
    const
      { pages } = this.props.appState.home,
      { input } = this.state;
    input[1].value = pages[index].title;
    let
      page = pages[index];
    this.setState({
      page,
      pageNumber: index,
      input,
    });
  };

  _addPage = (e) => {
    e.preventDefault();
    const
      { input } = this.state;
    input[0].value = '';
    this.setState({
      page: null,
      pageNumber: null,
      input,
    });
  };
}

Admin.propTypes = {
  actions: PropTypes.shape({
    setPages: PropTypes.func,
    getPages: PropTypes.func,
    getQuestions: PropTypes.func,
    createPage: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: {
      admin: state.admin,
      home: state.home,
    },
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { setPages, getQuestions, createPage } = actions,
      { getPages } = HomeActions;

    return {
      actions: bindActionCreators({ setPages, getPages, getQuestions, createPage }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
