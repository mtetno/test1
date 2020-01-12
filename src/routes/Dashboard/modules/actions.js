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
      type: Constants.RECOMMENDATION_REQUEST_BEGIN,
    };
  },


  getRecommendationEnd = (payload = null) => {
    return {
      type: Constants.GET_RECOMMENDATION_END,
      payload: payload,
    };
  },
  getRewardEnd = (payload = null) => {
    return {
      type: Constants.GET_REWARD_END,
      payload: payload,
    };
  },
 getPhenoEnd = (payload = null) => {
    return {
      type: Constants.GET_PHENO_END,
      payload: payload,
    };
  },
  getRecommendation = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/recommendations/today`, {
        method: 'get',
        headers,
      })
      .then((response) => {
         return response.json().then((json) => {
          dispatch(getRecommendationEnd(json));
        });
      })
      .catch((error) => {
      dispatch(getRecommendationEnd());
      });
    };
  },
  getReward = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/rewards/user/summary`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getRewardEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getRewardEnd());
      });
    };
  },
  getPhenoType = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['questionnaire']}/questionnaire/userQuestionnaires/phenotype`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getPhenoEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getPhenoEnd());
      });
    };
  },
  getProgressEnd = (payload = null) => {
    return {
      type: Constants.GET_PROGRESS_END,
      payload: payload,
    };
  },
  getProgress = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/recommendations/progress`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getProgressEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getProgressEnd());
      });
    };
  },
  getTipsEnd = (payload = null) => {
    return {
      type: Constants.GET_TIPS_END,
      payload: payload,
    };
  },
  getTips = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/recommendations/tip`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getTipsEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getTipsEnd());
      });
    };
  },
  getMaxPointsEnd = (payload = null) => {
    return {
      type: Constants.GET_MAXPOINTS_END,
      payload: payload,
    };
  },
  getMaxPoints = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/rewards/user/daily/max`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getMaxPointsEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getMaxPointsEnd());
      });
    };
  },  
  getProgressPointsEnd = (payload = null) => {
    return {
      type: Constants.GET_PROGRESS_POINTS_END,
      payload: payload,
    };
  },
  getProgressPoints = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/rewards/user/progress`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getProgressPointsEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getProgressPointsEnd());
      });
    };
  },


  setExcerciseCompleteEnd = (payload = null) => {
    return {
      type: Constants.SET_EXCERCISE_COMPLETE_END,
    };
  },

  setExcerciseComplete = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/exercises/userexercise/${payload.id}/complete`, {
        method: 'put',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(setExcerciseCompleteEnd());
        });
      })
      .catch((error) => {
        dispatch(setExcerciseCompleteEnd());
      });
    };
  },

  setHomeRemediesCompleteEnd = (payload = null) => {
    return {
      type: Constants.SET_HOME_REMEDIES_COMPLETE_END,
    };
  },

  setHomeRemediesComplete = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/homeremedies/userhomeremedy/${payload.id}/complete`, {
        method: 'put',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(setExcerciseCompleteEnd());
        });
      })
      .catch((error) => {
        dispatch(setExcerciseCompleteEnd());
      });
    };
  },
  
  setChangeSchedulesEnd = (payload = null) => {
    return {
      type: Constants.SET_CHANGE_SCHEDULES_END,
    };
  },

  changeSchedules = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/recommendations/postpone`, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(setChangeSchedulesEnd());
        });
      })
      .catch((error) => {
        dispatch(setChangeSchedulesEnd());
      });
    };
  },

  setAccupressureCompleteEnd = (payload = null) => {
    return {
      type: Constants.SET_ACCUPRESSURE_COMPLETE_END,
    };
  },

  setAccupressureComplete = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/acupressure/useracupressure/${payload.id}/complete`, {
        method: 'put',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(setAccupressureCompleteEnd());
        });
      })
      .catch((error) => {
        dispatch(setAccupressureCompleteEnd());
      });
    };
  };


export default {
  getRecommendation,
  getReward,
  getPhenoType,
  getProgress,
  getTips,
  getMaxPoints,
  setExcerciseComplete,
  setHomeRemediesComplete,
  getProgressPoints,
  changeSchedules,
  setAccupressureComplete,
};
