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
  forgetEnd = (payload = null) => {
    return {
      type: Constants.FORGET_END,
      payload: {token: payload.token, user: jwt.decode(payload.token)},
    };
  },

  forgetErrorEnd = () => {
     return {
      type: Constants.FORGET_ERROR_END,
    };
  },

  forget = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return fetch(`${api['usermanagement']}/usermanagement/users/password/forgot?email=${payload.email}`, {
        method: 'post',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          if (json.error) {
            dispatch(forgetErrorEnd());
            http.handleError(dispatch, { message: 'Unable sent mail'});
          } else {
            dispatch(forgetEnd(json));
            http.notifySuccess(dispatch, 'email successfully sent');
            return true;
          } 
        });
      })
      .catch((error) => {
        dispatch(forgetErrorEnd());
        http.handleError(dispatch, { message: 'please check your email address.'});
      });
    };
  };
 

export default {
  forget,
};
