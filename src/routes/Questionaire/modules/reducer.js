import Constants from './constants';
import Helpers from './helpers';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.QUESTION_REQUEST_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.GET_QUESTION_END]: (state, action) => {
      let payload = Helpers.sortRecursive(action.payload.questionnaire.sections, 'id');
      let userAnswers = action.payload.userAnswers;
      return {
        ...state,
        fetch: false,
        questions: payload,
        userAnswers : userAnswers,
        userQuestionnaireId: action.payload.userQuestionnaireId,
      };
    },
    [Constants.SET_ANSWER]: (state, action) => {
      let newState = {...state};
      let question = newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question];
      let arrayValues = question.value;
      if(question.addMore){
        if(arrayValues instanceof Array){
        }else{
          arrayValues = [];
        }
        action.payload.addMoreIndex = action.payload.addMoreIndex >= 0 ? action.payload.addMoreIndex+1 : 0;
        arrayValues[action.payload.addMoreIndex] = (action.payload.value);
        newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question].value = arrayValues;
      }else{
      newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question].value = action.payload.value;
      }
      return newState;
    },
    [Constants.SET_SUB_ANSWER]: (state, action) => {
      let newState = {...state};
      if (newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question].value) {
        newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question].options.map((option, idIndex) => {
          if (action.payload.optionId == option.id) {
            newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question].options[idIndex].dependentQuestions[action.payload.dependentIndex].value = action.payload.value;
          }
        })
      }
      return newState;
    },
    [Constants.SET_CALLOUT_ANSWER]: (state, action) => {
      let newState = {...state};
      if (newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question].value) {
        newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question].options.map((option, idIndex) => {
          if (action.payload.optionId == option.id) {
            newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question].options[idIndex].callouts[action.payload.dependentIndex].value = action.payload.optionId;
          }
        })
      }
      return newState;
    },
    [Constants.VALIDATE_ANSWER]: (state, action) => {
      let newState = {...state};
      newState.questions[action.payload.section].subSections[action.payload.subSection].questions = action.payload.value;
      return newState;
    },
    [Constants.GET_DIEASES_END]: (state, action) => {
      return {
        ...state,
        dieases: action.payload,
      };
    },
    [Constants.SUBMIT_RESPONSE_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.SUBMIT_DIEASES_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.SET_COMPLETE_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.ASSIGN_REWARD_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.ADD_MORE_END]: (state, action) => {
      let newState = {...state};
      let question = newState.questions[action.payload.section].subSections[action.payload.subSection].questions[action.payload.question];
      if(question['addMoreValue']){
        question['addMoreValue'] = question['addMoreValue']  +  1;
      }else{
        question['addMoreValue'] = 1;
      }
      return newState;
    },
  },

  initialState = {
    fetch: false,
    questions: [],
    dieases: [],
    userQuestionnaireId: null,
  };

export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
