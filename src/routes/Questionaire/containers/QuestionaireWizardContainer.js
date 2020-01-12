import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';
import actions from '../modules/actions';
import SectionWizardMarkup from '../components/SectionWizardMarkup';
import globalHelpers from '../../../utils/helpers';
import _ from 'lodash';

class QuestionaireWizard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSection: 0,
      currentSubSection: 0,
      showSymptomQuestions:false,
      dieases:[],
      allDieasesKey: [],
      dieasesKey: null,
      selectedDieases: [],
      selectedDiease: null,
      percentageCompleted: 0,
      isTop: 0,
      dependentId : undefined,
    }
  }

  componentWillReceiveProps (newProps) {
    this._init(newProps.appState.dieases);
  }
  componentDidMount () {
    const { query } = this.props.location;
    let dependentId = query.dependentId;
    if (query.dependentId) {
      this.setState({
        dependentId,
      });
    }
    let payload = undefined;
    if(query.dependentId)
    {
      payload  =   { 'dependentId' : query.dependentId } ;
    }
        this.props.actions.getQuestions(payload);
        this.props.actions.getDieases(payload);
        this._checkScroll();
      }

  render () {
    return (
      <SectionWizardMarkup
        signin={this.props.signin}
        appState={this.props.appState}
        currentSection={this.state.currentSection}
        currentSubSection={this.state.currentSubSection}
        nextHandler={this._nextHandler}
        backHandler={this._backHandler}
        handleChange={this._handleChange}
        showSymptomQuestions={this.state.showSymptomQuestions}
        toggleSymptomQuestions={this._toggleSymptomQuestions}
        dieases={this.state.dieases}
        allDieasesKey={this.state.allDieasesKey}
        dieasesKey={this.state.dieasesKey}
        selectedDieases={this.state.selectedDieases}
        selectedDiease={this.state.selectedDiease}
        dieasesKeyhandleChange={this._dieasesKeyhandleChange}
        percentageCompleted={this.state.percentageCompleted}
        handleDependentChange={this._handleDependentChange}
        handleAddMoreChanges = {this._handleAddMoreChanges}
        isTop={this.state.isTop}
      />
    );
  }

  _checkScroll() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY })
    });
  }

  _init(allDieases, key) {
    if (allDieases.length) {
      const grouped = _.mapValues(_.groupBy(allDieases, 'section'),
                            clist => clist.map(diease => _.omit(diease, 'section')));
      const allDieasesKey = _.keysIn(grouped);
      allDieasesKey.shift();
      const dieasesKey = key ? key : this.state.dieasesKey ? this.state.dieasesKey : allDieasesKey[0];
      const dieases = grouped[dieasesKey];
      const { questions } = this.props.appState;
      const percentageCompleted = globalHelpers.questionnaireProgress(questions);
      this.setState({dieases, allDieasesKey, dieasesKey, percentageCompleted});
    }
  }

  @autobind
  _handleChange (value, index,addMoreIndex) {
    const {currentSection, currentSubSection} = this.state;
    this.props.actions.answer({section: currentSection, subSection: currentSubSection, value: value, question: index, addMoreIndex : addMoreIndex});
  }

  @autobind
  _handleDependentChange (value, parentIndex, index, optionId) {
    const {currentSection, currentSubSection} = this.state;
    if (value == 'hide') {
      this.props.actions.answerCallout({section: currentSection, subSection: currentSubSection, value: value, question: parentIndex, dependentIndex: index, optionId: optionId});
    } else {
      this.props.actions.answerDependent({section: currentSection, subSection: currentSubSection, value: value, question: parentIndex, dependentIndex: index, optionId: optionId});
    }
  }


  @autobind
  _handleAddMoreChanges (parentIndex) {
    const {currentSection, currentSubSection} = this.state;
    this.props.actions.addMoreEnd({section: currentSection, subSection: currentSubSection,  question: parentIndex});
  }


  @autobind
  _dieasesKeyhandleChange (event) {
    this._init(this.props.appState.dieases, event.target.value);
  }

  @autobind
  _nextHandler (event) {
    if (event) {
      event.preventDefault();
    }
    window.scrollTo(0, 0);
    const
      { questions, userQuestionnaireId } = this.props.appState,
      totalSection = questions.length,
      totalSubSection = questions[totalSection - 1].subSections.length,
      { currentSubSection, currentSection } = this.state,
      input = globalHelpers.validation(questions[currentSection].subSections[currentSubSection].questions);
    this.props.actions.validate({section: currentSection, subSection: currentSubSection, value: input});
    if (input.valid) {
      const currentAnswers = questions[currentSection].subSections[currentSubSection].questions,
            submitPayload  = currentAnswers.map(question => {
              return {
                questionnaireQuestionId: question.id,
                questionnaireQAOptionId: question.typeCd == 'radio' || question.typeCd == 'radio_button' || question.typeCd == 'radio_image' ? question.value || '' : null,
                answerText: question.typeCd == 'checkbox' || question.typeCd == 'symptom_checker' ? question.value ? JSON.stringify(question.value) : '' :  question.value || '',
              }
            })
        let payload = {
          userQuestionnaireId: userQuestionnaireId,
          questionAnswers: submitPayload,
        }

        if(this.state.dependentId){
          payload['dependentId'] = this.state.dependentId;
        }
      this.props.actions.submitResponse(payload)

      if (currentSection >= (totalSection - 1) && currentSubSection >= (totalSubSection - 1)) {
        this._goForCompletion();

      } else {
        if (currentSubSection < questions[currentSection].subSections.length - 1) {
          this.setState({currentSubSection: currentSubSection + 1});
        } else {
          this.setState({currentSection: currentSection + 1, currentSubSection: 0});
        }
      }
    }
  }

  @autobind
  _backHandler (event) {
    if (event) {
      event.preventDefault();
    }
    window.scrollTo(0, 0);
    const
      { questions } = this.props.appState,
      { currentSubSection, currentSection } = this.state;
    if (currentSubSection > 0) {
      this.setState({currentSubSection: currentSubSection - 1});
    } else {
      this.setState({currentSection: currentSection - 1, currentSubSection: questions[currentSection].subSections.length});
    }
  }

  @autobind
  _toggleSymptomQuestions (value, part, item) {
    let
      selectedDieases = this.state.selectedDieases,
      selectedDiease = this.state.selectedDiease,
      showSymptomQuestions = true;
    if(item) {
      if (_.find(selectedDieases, ['diease_id', item.id])) {
        selectedDieases = _.filter(selectedDieases, function (f) { return f.diease_id !== item.id; });
        showSymptomQuestions = false;
      } else {
        selectedDieases.push({diease_id: item.id});
        showSymptomQuestions = true;
      }
      this.setState({showSymptomQuestions, selectedDieases, selectedDiease: item});
    }
    if(part) {
      selectedDieases = this.updateSymptomValue(selectedDiease.id, part, value);
    }
    this._handleChange(selectedDieases, 0);
    this.setState({ selectedDieases });
  }

  @autobind
  updateSymptomValue( dieaseId, part, value ) {
    let selectedDieases = this.state.selectedDieases;
    for (var i in selectedDieases) {
      if (selectedDieases[i].diease_id == dieaseId) {
        selectedDieases[i][part] = value;
        break;
      }
    }
    return selectedDieases;
  }

  @autobind
  _goForCompletion() {
    const { questions, userQuestionnaireId } = this.props.appState;
    let dieasesArray = _.map(this.state.selectedDieases, "diease_id");

    let completePayload = {id: userQuestionnaireId};
    let submitDieasesPayload = {diseases: dieasesArray};
    let assignRewardPointsPayload = {activityType: 'REGISTRATION', points: 50};

    if(this.state.dependentId){
      completePayload['dependentId'] = this.state.dependentId;
      submitDieasesPayload['dependentId'] = this.state.dependentId;
      assignRewardPointsPayload['dependentId'] = this.state.dependentId;
    }

    this.props.actions.setComplete(completePayload).then(() => {
      this.props.actions.submitDieases(submitDieasesPayload).then(() => {
        this.props.actions.assignRewardPoints(assignRewardPointsPayload).then(() => {
          browserHistory.push('/dashboard');
        })
      })
    })
  }
}

QuestionaireWizard.propTypes = {
  actions: PropTypes.shape({
    getQuestions: PropTypes.func,
    answer: PropTypes.func,
    getDieases: PropTypes.func,
    validate: PropTypes.func,
    submitDieases: PropTypes.func,
    setComplete: PropTypes.func,
    answerDependent: PropTypes.func,
    assignRewardPoints: PropTypes.func,
    answerCallout: PropTypes.func,
    addMoreEnd: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.questionaire,
    signin: state.signin,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { getQuestions, answer, submitResponse, getDieases, validate, submitDieases, setComplete, answerDependent, assignRewardPoints, answerCallout,addMoreEnd } = actions;

    return {
      actions: bindActionCreators({ getQuestions, answer, submitResponse, getDieases, validate, submitDieases, setComplete, answerDependent, assignRewardPoints, answerCallout,addMoreEnd }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(QuestionaireWizard);
