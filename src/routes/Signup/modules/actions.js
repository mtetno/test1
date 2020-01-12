import jwt from 'jsonwebtoken';
import Constants from './constants';
import http from '../../../utils/http';
import { api } from '../../../config';

const
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

  signupEnd = (payload = null) => {
    return {
      type: Constants.SIGNUP_END,
      payload: {token: payload.token, user: jwt.decode(payload.token)},
    };
  },

  signupErrorEnd = () => {
    return {
      type: Constants.SIGNUP_ERROR_END,
    };
  },
  signup = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['usermanagement']}/users/user/register`, {
        method: 'post',
        headers,
        body: JSON.stringify(payload),
      })
      .then((response) => {
        
        return response.json().then((json) => {
          if (json.error) {
            dispatch(signupErrorEnd());
            http.handleError(dispatch, { message: 'Unable to create account.'});
          } else {
            dispatch(signupEnd(json));
            http.notifySuccess(dispatch, 'Account created successfully, please login to get started.');
            return true;
          } 
        });
      })
      .catch((error) => {
        dispatch(signupErrorEnd());
        http.handleError(dispatch, { message: 'Unable to create account.'});
      });
    };
  };

export default {
  signup,
};
