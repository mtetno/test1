import jwt from 'jsonwebtoken';
import Constants from './constants';
import http from '../../../utils/http';

const
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
};
