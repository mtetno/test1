import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio } from 'react-bootstrap';
import _ from 'lodash';
import Autosuggest from 'react-autosuggest';
import autosuggestHighlightMatch from 'autosuggest-highlight/match';
import autosuggestHighlightParse from 'autosuggest-highlight/parse';
import RadioButtonComponent from './inputs/RadioButtonComponent';
import DatePicker from 'react-bootstrap-date-picker';
class FormBuilder extends Component {
  render () {
    const {
      formData,
      formType,
      fullDate,
      updateValue,
      onSuggestionsClearRequested,
      onSuggestionsFetchRequested,
      checkDependent,
    } = this.props;
    return (
      <Col>
        {formData.map((form, index) => {
          if (form.dependent && form.dependent !== '' && !checkDependent) {
            const questionList = _.flatMap(fullDate, (item) =>
              _(item.questions)
                .map((v) => ({value: v.value, question: v.question}))
                .value()
            ),
              dependent = _.find(questionList, {'question': form.dependent});
            if (form.dependent_value !== dependent.value) return null;
          }
          switch (form.type) {
            case 'short_input':
              return (
                <FormGroup key={index} controlId={form.id} validationState={form.error ? 'error' : null}>
                  <ControlLabel>{form.label}</ControlLabel>
                  <FormControl
                    type={ form.inputType ? form.inputType  : 'text'}
                    name={form.name}
                    placeholder={form.placeholder}
                    value={form.value}
                    onChange={(e) => updateValue(e, form.order, formType)}
                    disabled={form.disabled}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>{form.error ? form.errorText : ''}</HelpBlock>
                </FormGroup>
              );
            case 'short_password':
              return (
                <FormGroup key={index} controlId='formBasicText' validationState={form.error ? 'error' : null}>
                  <ControlLabel>{form.label}</ControlLabel>
                  <FormControl
                    type={'password'}
                    name={form.name}
                    placeholder={form.placeholder}
                    value={form.value}
                    onChange={(e) => updateValue(e, form.order, formType)}
                    disabled={form.disabled}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>{form.error ? form.errorText : ''}</HelpBlock>
                </FormGroup>
              );
            case 'date_input':
              return (
                <FormGroup key={index} controlId='formBasicText' validationState={form.error ? 'error' : null}>
                  <ControlLabel>{form.label}</ControlLabel>
                 <Col className='datepicker'> <DatePicker dateFormat= 'DD/MM/YYYY'showClearButton={false} value={form.value} onChange= {(e) => updateValue(e,form.order, formType)}/>
                  </Col><FormControl.Feedback />
                  <HelpBlock>{form.error ? form.errorText : ''}</HelpBlock>
                </FormGroup>
              );
              case 'radio_button':
              return (
                <FormGroup key={index}>
                  <FormControl>
                  <Radio
                    name={form.name}
                    value={form.value}                    
                    disabled={form.disabled}
                  >
                    {form.label}
                  </Radio>
                  </FormControl>
               <HelpBlock>{form.error ? form.errorText : ''}</HelpBlock>
                </FormGroup>
              );
              case 'radio_button_group':
              return (
                <FormGroup key={index} validationState={form.error ? 'error' : 'no-error'}>
                 <ControlLabel>{form.label}</ControlLabel>
                 <Col xs={12} className="no-padding radio-container">
                  {
                  form.options.map((data)=> <Radio
                    name={form.label}
                    onChange={(e) => updateValue(e,data,formType)}
                  >
                  {data}
                 
                </Radio>)
                  }
                  <HelpBlock>{form.error ? form.errorText : ''}</HelpBlock>
                  </Col>
                  
                </FormGroup>
              );
            case 'single_select':
              const options = form.options.map((option, optionIndex) => {
                return (<option key={optionIndex} value={option.value}>{option.label}</option>);
              });
              return (
                <FormGroup key={index} controlId='formBasicText' validationState={form.error ? 'error' : null}>
                  <ControlLabel>{form.label}</ControlLabel>
                  <FormControl
                    componentClass='select'
                    name={form.name}
                    value={form.value}
                    onChange={(e) => updateValue(e, form.order, formType)}
                    disabled={form.disabled}
                  >
                    {options}
                  </FormControl>
                  <FormControl.Feedback />
                  <HelpBlock>{form.error ? form.errorText : ''}</HelpBlock>
                </FormGroup>
              );
            case 'single_checkbox':
              return (
                <FormGroup key={index}>
                  <Checkbox
                    name={form.name}
                    value={form.value}
                    onChange={(e) => updateValue(e, form.order, formType)}
                    disabled={form.disabled}
                  >
                    {form.label}
                  </Checkbox>
                </FormGroup>
              );
            case 'autosuggest':
              let inputProps = {
                placeholder: form.placeholder,
                value: form.value,
                onChange: this._onChange,
              };
              return (
                <FormGroup key={index}>
                  <ControlLabel>{form.label}</ControlLabel>
                  <Autosuggest
                    id={`autosuggest_${form.order}`}
                    suggestions={form.options}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={this._getSuggestionValue}
                    renderSuggestion={this._renderSuggestion}
                    inputProps={inputProps}
                  />
                </FormGroup>
              );
          }
        })}
      </Col>
    );
  }

  _onChange = (event, { newValue }) => {
    const
      { formType, updateValue } = this.props,
      newEvent = {
        target: {
          value: newValue,
        },
      },
      key = event.target.nextSibling.id.replace('react-autowhatever-autosuggest_', '');
    updateValue(newEvent, key, formType);
  };

  _getSuggestionValue = (suggestion) => {
    return suggestion.question;
  };

  _renderSuggestion = (suggestion, { query }) => {
    const
      matches = autosuggestHighlightMatch(suggestion.question, query, true),
      parts = autosuggestHighlightParse(suggestion.question, matches);

    return (
      <span>
        {parts.map((part, index) => {
          const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;

          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    );
  };
}

FormBuilder.propTypes = {
  formData: PropTypes.array,
  fullDate: PropTypes.array,
  updateValue: PropTypes.func,
  checkDependent: PropTypes.bool,
  formType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onSuggestionsClearRequested: PropTypes.func,
  onSuggestionsFetchRequested: PropTypes.func,
};

export default FormBuilder;
