import Constants from './constants';
import Helpers from './helpers';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {

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
    [Constants.GET_SAVED_USER_DIEASES_END]: (state, action) => {
     
      let newState = {...state};
      if(action.payload.userAnswers)
      {
        /*
        @author : monika
        77th position is saved user abswer of heekhelp
        TODO : need seperate api call for the saved diases of seekhelp , this is just temporary fix
        */
        action.payload.userAnswers.map((userAnswersItem) => {
        if(userAnswersItem.questionnaireQuestionId == 77){
          newState['userAnswers'] = userAnswersItem;
        }});
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
