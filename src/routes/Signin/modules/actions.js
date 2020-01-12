import jwt from 'jsonwebtoken';
import { browserHistory } from 'react-router';
import Constants from './constants';
import http from '../../../utils/http';
import { api } from '../../../config';

const
  basicToken = 'SFBTLVdFTExORVNTLWo5cGp2cTFmY2hhamk1bnRpcTJqZmNsYzhwOGExOWY3Omswc2hiVDRJWl80OTYyMTQ1ODUzMjhfYVlxMFJYTm1GVUpqYjA=',
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic SFBTLVdFTExORVNTLWo5cGp2cTFmY2hhamk1bnRpcTJqZmNsYzhwOGExOWY3Omswc2hiVDRJWl80OTYyMTQ1ODUzMjhfYVlxMFJYTm1GVUpqYjA='
  },
  requestBegin = () => {
    return {
      type: Constants.REQUEST_BEGIN,
    };
  },

  signinEnd = (payload = null) => {
    return {
      type: Constants.SIGNIN_END,
      payload: {token: payload.access_token, user: {user_id: payload.userId, username: payload.username}},
    };
  },

  signinErrorEnd = (payload = null) => {
    return {
      type: Constants.SIGNIN_ERROR_END,
    };
  },

  signin = (payload) => {
    return (dispatch, getState) => {
      headers['Authorization'] = `Basic ${basicToken}`;
      dispatch(requestBegin());
      return fetch(`${api['oauth']}/authorization/oauth/token?grant_type=password&username=${payload.username}&password=${payload.password}`, {
        method: 'post',
        headers,
        body: JSON.stringify(payload),
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(signinEnd(json));
          if (json.error) {
            dispatch(signinErrorEnd());
            http.handleError(dispatch, { message: 'Invalid credentials'});
          } else {
            dispatch(signinEnd(json));
            sessionStorage.setItem('hpsSignIn', JSON.stringify(json));
            return true;
          } 
        });
      })
      .catch((error) => {
        dispatch(signinErrorEnd());
        http.handleError(dispatch, { message: 'Invalid credentials'});
      });
    };
  },

  signOutEnd = (payload = null) => {
    return {
      type: Constants.SIGNOUT_END,
    };
  },

  signOut = () => {
    return (dispatch, getState) => {
      sessionStorage.removeItem('hpsSignIn');
      dispatch(signOutEnd());
      http.notifySuccess(dispatch, 'You have signed out successfully.');
      browserHistory.push('/');
    };
  },

  verify = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return http.post(
          '/auth/verify',
          null,
          payload,
          signinEnd,
          dispatch,
          getState,
          false,
          false,
      );
    };
  },

  getQuestionnaireStatusEnd = (payload = null) => {
    return {
      type: Constants.GET_QUESTION_STATUS,
      payload: payload,
    };
  },

  getQuestionnaireStatus = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['questionnaire']}/questionnaire/userQuestionnaires/questionnaireId/FIRST_TIME/status`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getQuestionnaireStatusEnd(json));
          return json;
        });
      })
      .catch((error) => {
        dispatch(getQuestionnaireStatusEnd());
          return false;
      });
    };
  },

  getUserDetailsEnd = (payload = null) => {
    return {
      type: Constants.GET_USER_DETAILS,
      payload: payload,
    };
  },

  getUserDetails = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['usermanagement']}/users/user`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getUserDetailsEnd(json));
          sessionStorage.setItem('hpsSignInUser', JSON.stringify(json));
          return json;
        });
      })
      .catch((error) => {
        dispatch(getUserDetailsEnd());
          return false;
      });
    };
  };

export default {
  signin,
  signinEnd,
  signOut,
  verify,
  getQuestionnaireStatus,
  getUserDetails,
  getUserDetailsEnd,
};
