import jwt from 'jsonwebtoken';
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
      type: Constants.FORGET_REQUEST_BEGIN,
    };
  },

  forgetEnd = (payload = null) => {
    return {
      type: Constants.FORGET_END,
      payload: {token: payload.token, user: jwt.decode(payload.token)},
    };
  },
  addMemberEnd = (payload = null) => {
    return {
      type: Constants.GET_ADDMEMBER_END,
      payload: payload,
    };
  },

  addMember = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
    headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['usermanagement']}/users/dependent`, {
        method: 'post',
        headers,
        body: JSON.stringify(payload),
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(addMemberEnd());
        });
      })
      .catch((error) => {
        dispatch(addMemberEnd());
      });
    };
  },

  saveMemberEnd = (payload = null) => {
    return {
      type: Constants.SAVE_MEMBER_END,
      payload: payload,
    };
  },



  getMembers = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['usermanagement']}/users/dependent`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(saveMemberEnd(json));
        });
      })
      .catch((error) => {
        dispatch(saveMemberEnd());
      });
    };
  },

  forget = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return http.post(
          '/auth/forget',
          null,
          payload,
          forgetEnd,
          dispatch,
          getState,
          true,
          false,
      );
    };
  };

export default {
  forget,
  forgetEnd,
  addMember,
  getMembers,
};
