import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox,Row } from 'react-bootstrap';
import _ from 'lodash';
import Autosuggest from 'react-autosuggest';
import DatePicker from 'react-bootstrap-date-picker';
import autosuggestHighlightMatch from 'autosuggest-highlight/match';
import autosuggestHighlightParse from 'autosuggest-highlight/parse';
import RadioComponent from './inputs/RadioComponent';
import CheckboxComponent from './inputs/CheckboxComponent';
import SliderComponent from './inputs/SliderComponent';
import ImageButtonComponent from './inputs/ImageButtonComponent';
import RadioButtonComponent from './inputs/RadioButtonComponent';
import DialogueBox from './DialogueBox';
import DialogueBoxEmbeded from './DialogueBoxEmbeded';
import DependentQuestionnaireFormBuilder from './DependentQuestionnaireFormBuilder';

class QuestionnaireFormBuilder extends Component {
  render () {
    const {
      formData,
      fullDate,
      handleChange,
      handleDependentChange,
      parentIndex,
      optionId,
      signin,
      userAnswers,
      handleAddMoreChanges,
    } = this.props;
    let formComponent = null;
    return (
      <Col className="questionnaire-form">
        {formData.map((form, index) => {
          switch (form.typeCd) {
            case 'radio':
            let selectedUserOptionId = null;
            userAnswers ? userAnswers.map( (userAnswersItem) => { if(userAnswersItem.questionnaireQuestionId == form.id){
               selectedUserOptionId = userAnswersItem.questionnaireQAOptionId;
            } }) : null;
            form.value = selectedUserOptionId ? selectedUserOptionId : form.value;
              const options = form.options;
              formComponent = (
                <FormGroup className="col-md-12 no-padding custom-group" key={index} controlId='formBasicText' validationState={form.error ? 'error' : null}>
                  <ControlLabel className="col-xs-12 no-padding">{form.text}</ControlLabel>
                  { options.map((option, key) => <RadioComponent index={index} value={ form.value } handleChange={handleChange} key={key} data={option}  />)}
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break
            case 'radio_textfield':
              const radioTextfieldOptions = form.options;
              formComponent = (
                <FormGroup className="col-md-12 no-padding custom-group" key={index} controlId='formBasicText' validationState={form.error ? 'error' : null}>
                  <ControlLabel className="col-xs-12 no-padding">{form.text}</ControlLabel>
                  { radioTextfieldOptions.map((option, key) => <RadioComponent index={index} value={form.value} handleChange={handleChange} key={key} data={option} />)}
                  {form.value && form.value == 224 ? <Col md={12} className="no-padding"><FormControl
                    type={'text'}
                    name={form.name}
                    placeholder={form.placeholder}
                    disabled={form.disabled}
                  /></Col> : null}
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
            case 'checkbox':
              const checkboxOptions = form.options;
              const dropdownCheckboxYearOptions = [];
              dropdownCheckboxYearOptions.push('');
              for (var i = 1900; i < 2018; i++) {
                dropdownCheckboxYearOptions.push(i);
              }
              const noObject = _.find(checkboxOptions, 'text', 'NO');
              const questionDepdent = checkboxOptions.length ? checkboxOptions[1].dependentQuestions[0].text : null;
              formComponent = (
                <Col>
                  <FormGroup className="col-md-12 no-padding custom-group" key={index} controlId='formBasicText' validationState={form.error ? 'error' : null}>
                    <ControlLabel className="col-xs-12 no-padding">{form.text}</ControlLabel>
                    { checkboxOptions.map((option, key) => <CheckboxComponent checkboxOptions={checkboxOptions} index={index} value={form.value} handleChange={handleChange} key={key} data={option} />)}
                  </FormGroup>
                  { form.value && form.value.length && form.value[0] !== noObject.id ? <FormGroup key={index+'01'}  className="col-md-12 no-padding custom-group" controlId="formControlsSelect">
                    <ControlLabel>{questionDepdent}</ControlLabel>
                    {
                      form.value && form.value.length && form.value.map((dropdown, dropdownIndex) =>
                        <Col key={dropdownIndex} md={12} style={{margin: '8px 0'}}>
                          <Col md={2} style={{padding: '8px 0'}}>{(_.find(checkboxOptions, { 'id': dropdown })).text}</Col>
                          <Col md={10}>
                            <FormControl
                              componentClass="select"
                              value={(_.find(checkboxOptions, { 'id': dropdown })).dependentQuestions[0].value}
                              onChange={(event) => {
                                handleDependentChange(event.target.value, index, 0, dropdown)
                              }}
                            >
                            { dropdownCheckboxYearOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                            </FormControl>
                          </Col>
                        </Col>
                      )
                    }
                  </FormGroup> : null }
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </Col>
              );
              break;
            case 'radio_image':
            selectedUserOptionId = null;
            userAnswers ? userAnswers.map( (userAnswersItem) => { if(userAnswersItem.questionnaireQuestionId == form.id){
               selectedUserOptionId = userAnswersItem.questionnaireQAOptionId;
            } }) : null;
            form.value = selectedUserOptionId ? selectedUserOptionId : form.value;
              const radioImageOptions = form.options;
              formComponent = (
                <FormGroup className="col-md-12 no-padding custom-group" key={index} controlId='formBasicText' validationState={form.error ? 'error' : null}>
                  <Row>
                  <ControlLabel className="col-xs-12 no-padding">{form.text}</ControlLabel>
                  { radioImageOptions.map((option, key) => <ImageButtonComponent index={index} value={form.value} handleChange={handleChange} key={key} data={option}/>)}
                  </Row>
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
            case 'radio_button':
            selectedUserOptionId = null;
            userAnswers ? userAnswers.map( (userAnswersItem) => { if(userAnswersItem.questionnaireQuestionId == form.id){
               selectedUserOptionId = userAnswersItem.questionnaireQAOptionId;
            } }) : null;
            form.value = selectedUserOptionId ? selectedUserOptionId : form.value;
              const radioButtonOptions = form.options;
              formComponent = (
                <FormGroup className="col-md-12 no-padding custom-group" key={index} controlId='formBasicText' validationState={form.error ? 'error' : null}>
                  <ControlLabel className="col-xs-12 no-padding">{form.text}</ControlLabel>
                  { radioButtonOptions.map((option, key) => <RadioButtonComponent index={index} value={form.value} handleChange={handleChange} key={key} data={option}/>)}
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
              case 'slider_height':
              let userSelectedAnswer = [4];
            userAnswers ?   userAnswers.map( (userAnswersItem) => { if(userAnswersItem.questionnaireQuestionId == form.id){
                 userSelectedAnswer = userAnswersItem.answerText ? [userAnswersItem.answerText] : [4];
              } }) : null;
              form.value = userSelectedAnswer ? userSelectedAnswer : form.value;
              formComponent = (
                <FormGroup className="custom-group" key={index} controlId='formBasicText'>
                  <ControlLabel className="col-xs-12 no-padding" style={{display: 'inline-flex'}}>
                    {form.text}
                    <FormControl
                      componentClass="select"
                      placeholder="select"
                      style={{marginLeft: '20px'}}
                      >
                      <option key={1} value={'Feets'}>{'Feets'}</option>
                    </FormControl>
                  </ControlLabel>
                  <SliderComponent domain={[4,10]} defaultValues={ form.value } index={index} value={form.value} handleChange={handleChange}/>
                  <RadioComponent index={index} value={form.value} handleChange={handleChange} key={1} data={form.options[0]}/>
                </FormGroup>
              );
              break;
            case 'slider_weight':
              userSelectedAnswer = [30];
              userAnswers ? userAnswers.map( (userAnswersItem) => { if(userAnswersItem.questionnaireQuestionId == form.id){
                 userSelectedAnswer = userAnswersItem.answerText ? [userAnswersItem.answerText] : [30];
              }}) : null;
              form.value = userSelectedAnswer ? userSelectedAnswer : form.value;
              formComponent = (
                <FormGroup className="custom-group" key={index} controlId='formBasicText'>
                  <ControlLabel className="col-xs-12 no-padding" style={{display: 'inline-flex'}}>
                    {form.text}
                    <FormControl
                      componentClass="select"
                      placeholder="select"
                      style={{marginLeft: '20px'}}
                      >
                      <option key={1} value={'Kgs'}>{'Kgs'}</option>
                    </FormControl>
                  </ControlLabel>
                  <SliderComponent domain={[30,150]} defaultValues={form.value} index={index} value={form.value} handleChange={handleChange}/>
                  <RadioComponent index={index} value={form.value} handleChange={handleChange} key={1} data={form.options[0]}/>
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
              case "textfield":
              userSelectedAnswer = form.value;
              let addMoreWidgets = new Array(form.addMoreValue);
              for(let i=0;i<form.addMoreValue;i++){
                addMoreWidgets.push(
                  <FormControl
                    type={'text'}
                    placeholder={"city"}
                    value={form.value instanceof Array && form.value && form.value.length>0 ? form.value[i+1] : '' }
                    onChange={(event) => handleChange ? handleChange(event.target.value, index,i) : handleDependentChange(event.target.value, parentIndex, index,optionId)}
                  />
                );
              }
                formComponent = (
                  <FormGroup className="custom-group" key={index} controlId='formBasicText'>
                    <ControlLabel>{form.text}</ControlLabel>
                    <FormControl
                      type={'text'}
                      name={form.name}
                      placeholder={form.placeholder}
                      value={form.value instanceof Array && form.value && form.value.length>0 ? form.value[0] : form.value }
                      onChange={(event) => handleChange ? handleChange(event.target.value, index) : handleDependentChange(event.target.value, parentIndex, index,optionId)}
                      disabled={form.disabled}
                    />
                    { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                    { form.addMore ?
                    <FormControl
                      type={'button'}
                      value={"Add more"}
                      onClick = { () => handleAddMoreChanges(index) }
                    /> : null }
                    { addMoreWidgets }
                  </FormGroup>
                );
                break;
            case 'date_picker':
              formComponent = (
                <FormGroup key={index} className="custom-group">
                  <ControlLabel>{form.text}</ControlLabel>
                    <DatePicker
                    dateFormat={'DD/MM/YYYY'}
                    value={ form.value ? new Date(form.value).toISOString() : ''}
                    onChange={(value, formattedValue) => handleChange(formattedValue, index)}
                    />
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
            case 'time_dropdown':
              const timeSelectOptions = [];
              timeSelectOptions.push('');
              for (var i = 1; i < 25; i++) {
                timeSelectOptions.push(i);
              }
              formComponent = (
                <FormGroup key={index} className="custom-group" controlId="formControlsSelect">
                  <ControlLabel>{form.text}</ControlLabel>
                  <FormControl
                    componentClass="select"
                    value={form.value?form.value:''}
                    onChange={(event) => handleChange ? handleChange(event.target.value, index) : handleDependentChange(event.target.value, parentIndex, index)}
                    placeholder="select">
                    { timeSelectOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                  </FormControl>
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
            case 'select':
            case 'dropdown':
            case 'year_dropdown':
              const yearOptions = [];
                yearOptions.push('');
              for (var i = 1900; i < 2018; i++) {
                yearOptions.push(i);
              }
              formComponent = (
                <FormGroup key={index} className="custom-group" controlId="formControlsSelect">
                  <ControlLabel>{form.text}</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="select"
                    value={form.value?form.value:''}
                    onChange={(event) => handleChange ? handleChange(event.target.value, index) : handleDependentChange(event.target.value, parentIndex, index,optionId )}
                  >
                    { yearOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                  </FormControl>
                  { form.error ? <Col className="col-md-12  no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
            case 'number_dropdown':
              const numberOptions = [];
              numberOptions.push('');
              for (var i = 1; i < 8; i++) {
                numberOptions.push(i);
              }
              formComponent = (
                <FormGroup key={index} className="custom-group" controlId="formControlsSelect">
                  <ControlLabel>{form.text}</ControlLabel>
                  <FormControl
                    componentClass="select"
                    value={form.value?form.value:''}
                    onChange={(event) => handleChange ? handleChange(event.target.value, index) : handleDependentChange(event.target.value, parentIndex, index)}
                    placeholder="select">
                    { numberOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                  </FormControl>
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
              case 'two_dropdown':
              userSelectedAnswer = form.value;
              userAnswers ? userAnswers.map( (userAnswersItem) => { if(userAnswersItem.questionnaireQuestionId == form.id){
                 userSelectedAnswer = userAnswersItem.answerText ? userAnswersItem.answerText : userSelectedAnswer;
              }}) : null;
              form.value = userSelectedAnswer ? userSelectedAnswer : form.value;
              let formValueObject = form.value ? JSON.parse(form.value) : form.value;
              let brotherSelection = formValueObject ? (formValueObject.brother ? formValueObject.brother : '')  : '';
              let sisterSelection =  formValueObject ? (formValueObject.sister ? formValueObject.sister : '')  : '';
                const twoDropdownOptions = [];
                for (var i = 0; i < 10; i++) {
                  twoDropdownOptions.push(i);
                }
                formComponent = (
                  <FormGroup key={index} className="custom-group" controlId="formControlsSelect">
                    <ControlLabel>{form.text}</ControlLabel>
                    <Col md={12} style={{margin: '8px 0'}}>
                      <FormControl
                        componentClass="select"
                        placeholder="select"
                        value= { formValueObject ? formValueObject.brother : 'Brothers...'}
                        onChange={(event) => {
                        brotherSelection = event.target.value;
                        let valueObject = {"brother" : brotherSelection,"sister" : sisterSelection };
                        handleChange(JSON.stringify(valueObject), index)
                        }}
                        style={{float: 'left', marginRight: 10}}
                        >
                        <option key={0+'key'} value={''}>{'Brothers...'}</option>
                        { twoDropdownOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                      </FormControl>
                      <FormControl
                        componentClass="select"
                        placeholder="select"
                        value= { formValueObject ? formValueObject.sister : 'Sisters...'}
                        onChange={(event) => {
                        sisterSelection = event.target.value;
                        let valueObject = {"brother" : brotherSelection,"sister" : sisterSelection };
                        handleChange(JSON.stringify(valueObject), index)
                        }}
                        style={{float: 'left', marginRight: 10}}
                        >
                        <option key={0+'key'} value={''}>{'Sisters...'}</option>
                        { twoDropdownOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                      </FormControl>
                    </Col>
                    { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                  </FormGroup>
                );
                break;
                case 'textfield_dropdown':
                case 'textfield_year_dropdown':
                const textfieldYearDropdownOptions = [];
                textfieldYearDropdownOptions.push('');
                for (var i = 1900; i < 2018; i++) {
                  textfieldYearDropdownOptions.push(i);
                }
                let formValueObj = form.value;
                let textValue = formValueObj ? (formValueObj.textValue ? formValueObj.textValue : '')  : '';
                let dropdownValue =  formValueObj ? (formValueObj.dropdownValue ? formValueObj.dropdownValue : '')  : '';
                formComponent = (
                <FormGroup key={index} className="custom-group" controlId="formControlsSelect">
                <ControlLabel>{form.text}</ControlLabel>
                <Col md={12} style={{margin: '8px 0'}}>
                <FormControl
                style={{float: 'left', marginRight: 10}}
                type={'text'}
                name={form.name}
                value = { textValue ? textValue: ''}
                placeholder={form.placeholder}
                  onChange={(event) =>
                {
                    textValue = event.target.value;
                    let valueObject = {"textValue" : textValue,"dropdownValue" : dropdownValue };
                    handleChange ? handleChange(event.target.value, index) :
                    handleDependentChange(valueObject, parentIndex, index,optionId);
                }}
                disabled={form.disabled}
                />
                <FormControl
                componentClass="select"
                placeholder="select"
                onChange={(event) =>
                {
                  dropdownValue = event.target.value;
                  let valueObject = {"textValue" : textValue,"dropdownValue" : dropdownValue };
                  handleChange ? handleChange(event.target.value, index) :
                  handleDependentChange(valueObject, parentIndex, index,optionId);
                }}
                value = { dropdownValue ? dropdownValue: ''}
                style={{float: 'left', marginRight: 10}}>
                { textfieldYearDropdownOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                </FormControl>
                </Col>
                { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
                );
                break;
            case 'dropdown_by_checkbox':
              const dropdownOptions = [];
              const dropdownCheckboxOptions = form.options;
              formComponent = (
                <FormGroup key={index} className="custom-group" controlId="formControlsSelect">
                  <ControlLabel>{form.text}</ControlLabel>
                  {
                    dropdownOptions.map((dropdown, dropdownIndex) =>
                      <Col key={dropdownIndex} md={12} style={{margin: '8px 0'}}>
                        <Col md={2} style={{padding: '8px 0'}}>{dropdown}</Col>
                        <Col md={10}>
                          <FormControl
                            componentClass="select"
                            onChange={(event) => handleChange(event.target.value, index)}
                          >
                          { dropdownCheckboxOptions.map((option, key) => <option key={key} value={option}>{option}</option>)}
                          </FormControl>
                        </Col>
                      </Col>
                    )
                  }
                  { form.error ? <Col className="col-md-12 no-padding error">{form.errorText}</Col> : null}
                </FormGroup>
              );
              break;
            case 'callout':
              formComponent = (
                <DialogueBox data={form}  handleChange={handleChange} index={index}/>
              );
              break;
            default:
              formComponent = (
                <FormGroup key={index} className="custom-group">
                  <ControlLabel>{form.text}</ControlLabel>
                    <DatePicker />
                </FormGroup>
              );
              break;
          }
          let dependentFormComponent = null;
          let callOutComponent = null;
          let bmiComponent = null;
          if (form.value) {
            const dependentForm = _.find(form.options, { 'id': form.value });
            if (dependentForm && dependentForm.dependentQuestions.length) {
              dependentFormComponent = <DependentQuestionnaireFormBuilder handleDependentChange={handleDependentChange} formData={dependentForm.dependentQuestions} fullDate={fullDate} optionId={dependentForm.id} parentIndex={index}  />;
            }
            const dependentCallout = _.find(form.options, { 'id': form.value });
            if (dependentCallout && dependentCallout.callouts && dependentCallout.callouts.length && dependentCallout.callouts[0].value != form.value) {
              callOutComponent = <DialogueBox signin={signin} options={dependentForm} value={form.value} data={dependentCallout.callouts[0]}  handleChange={handleDependentChange} index={index}/>;
            }
            if (formData[0].typeCd == 'slider_height' && formData[0].value && formData[0].value != 1 && formData[1].value != 2 && formData[1].value && index == 1) {
              let bmidata = null;
              const ftInMt = formData[0].value/3.28;
              const bmi = formData[1].value / (ftInMt*ftInMt);
              switch (true) {
                case (bmi <= 16):
                  bmidata = {id: 0, calloutText: 'Severely underweight. Ideal bmi is in raneg of 18.5 to 25. ', calloutText2: 'Your readings are far off the mark. This is your wake up sign. Time to pull up your socks, tighten your belt and follow our recommendations sincerely. You will be feeling proud of yourself within a month.'}
                  break;
                case (bmi > 16 && bmi <= 18.5):
                  bmidata = {id: 0, calloutText: 'Underweight. Ideal bmi is in raneg of 18.5 to 25.', calloutText2: 'You are slightly on the lower side but don’t worry, a little effort and you will be as good as new. '}
                  break;
                case (bmi > 18.5 && bmi <= 25):
                  bmidata = {id: 0, calloutText: 'You are perfectly within range.', calloutText2: ''}
                  break;
                case (bmi > 25 && bmi <= 30):
                  bmidata = {id: 0, calloutText: 'Modertely over weight. Ideal bmi is in raneg of 18.5 to 25.', calloutText2: 'You are on the slightly higher side but don’t worry, a little effort and you will be as good as new. '}
                  break;
                default:
                  bmidata = {id: 0, calloutText: 'I need not tell you <<UserName>>, you know that you are quite over weight. Ideal bmi is in raneg of 18.5 to 25.', calloutText2: 'Your readings are far off the mark. This is your wake up sign. Time to pull up your socks, tighten your belt and follow our recommendations sincerely. You will be feeling proud of yourself within 3 months.'}
                  break;
              }
              bmiComponent = <DialogueBoxEmbeded bmi={bmi}  signin={signin} value={formData[0].value} data={bmidata}  handleChange={handleDependentChange} index={index}/>;
            }
          }
          return (
            <div>
              {formComponent}
              {bmiComponent}
              {dependentFormComponent}
              {callOutComponent}
            </div>
          );
        })}
      </Col>
    );
  }
}

QuestionnaireFormBuilder.propTypes = {
  formData: PropTypes.array,
  fullDate: PropTypes.array,
  handleChange: PropTypes.func,
};

export default QuestionnaireFormBuilder;
