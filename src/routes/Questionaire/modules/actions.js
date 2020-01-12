import Constants from './constants';
import http from '../../../utils/http';
import { api } from '../../../config';

const
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  requestBegin = () => {
    return {
      type: Constants.QUESTION_REQUEST_BEGIN,
    };
  },

  getQuestionsEnd = (payload = null) => {
    return {
      type: Constants.GET_QUESTION_END,
      payload: payload,
    };
  },

  getQuestions = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      let apiPath = `${api['questionnaire']}/questionnaire/userQuestionnaires/questionnaireId/FIRST_TIME/start`;
      if(payload)
      {apiPath += "?dependentId="+payload.dependentId;}
      return fetch(apiPath, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getQuestionsEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getQuestionsEnd());
      });
    };
  },

  answer = (payload = null) => {
    return {
      type: Constants.SET_ANSWER,
      payload,
    };
  },
  answerDependent = (payload = null) => {
    return {
      type: Constants.SET_SUB_ANSWER,
      payload,
    };
  },
  answerCallout = (payload = null) => {
    return {
      type: Constants.SET_CALLOUT_ANSWER,
      payload,
    };
  },

  validate = (payload = null) => {
    return {
      type: Constants.VALIDATE_ANSWER,
      payload,
    };
  },

  getDieasesEnd = (payload = null) => {
    return {
      type: Constants.GET_DIEASES_END,
      payload: payload,
    };
  },


  getDieases = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      let apiPath = `${api['questionnaire']}/questionnaire/diseases`;
      if(payload)
      {apiPath += "?dependentId="+payload.dependentId;}
      return fetch(apiPath, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getDieasesEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getDieasesEnd());
      });
    };
  },

  submitResponseEnd = (payload = null) => {
    return {
      type: Constants.SUBMIT_RESPONSE_END,
    };
  },

  submitResponse = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['questionnaire']}/questionnaire/userQuestionnaires/questionnaireId/FIRST_TIME`, {
        method: 'put',
        headers,
        body: JSON.stringify(payload),
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(submitResponseEnd());
        });
      })
      .catch((error) => {
        dispatch(submitResponseEnd());
      });
    };
  },

  submitDieasesEnd = (payload = null) => {
    return {
      type: Constants.SUBMIT_DIEASES_END,
    };
  },

  addMoreEnd = (payload = null) => {
    return {
      type: Constants.ADD_MORE_END,
      payload : payload
    };
  },

  submitDieases = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/recommendations/generate`, {
        method: 'post',
        headers,
        body: JSON.stringify(payload),
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(submitDieasesEnd());
        });
      })
      .catch((error) => {
        dispatch(submitDieasesEnd());
      });
    };
  },

  setCompleteEnd = (payload = null) => {
    return {
      type: Constants.SET_COMPLETE_END,
    };
  },

  setComplete = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['questionnaire']}/questionnaire/userQuestionnaires/userQuestionnaireId/${payload.id}/complete`, {
        method: 'put',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(setCompleteEnd());
        });
      })
      .catch((error) => {
        dispatch(setCompleteEnd());
      });
    };
  },

  assignRewardPointsEnd = (payload = null) => {
    return {
      type: Constants.ASSIGN_REWARD_END,
    };
  },

  assignRewardPoints = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/rewards/user/create`, {
        method: 'post',
        headers,
        body: JSON.stringify(payload),
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(assignRewardPointsEnd());
        });
      })
      .catch((error) => {
        dispatch(assignRewardPointsEnd());
      });
    };
  };

export default {
  getQuestions,
  answer,
  answerDependent,
  submitResponse,
  getDieasesEnd,
  getDieases,
  validate,
  submitDieases,
  setComplete,
  assignRewardPoints,
  answerCallout,
  addMoreEnd,
};
