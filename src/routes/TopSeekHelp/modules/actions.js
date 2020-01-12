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
      return fetch(`${api['questionnaire']}/questionnaire/diseases`, {
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

  getUserSavedDieasesEnd = (payload = null) => {
    return {
      type: Constants.GET_SAVED_USER_DIEASES_END,
      payload: payload,
    };
  },

  getUserSavedDieases = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['questionnaire']}/questionnaire/userQuestionnaires/questionnaireId/FIRST_TIME/start`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getUserSavedDieasesEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getUserSavedDieasesEnd());
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
  submitResponse,
  getDieasesEnd,
  getDieases,
  submitDieases,
  setComplete,
  assignRewardPoints,
  getUserSavedDieases,
};
