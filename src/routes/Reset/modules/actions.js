import Constants from './constants';
import http from '../../../utils/http';

const
  requestBegin = () => {
    return {
      type: Constants.RESET_REQUEST_BEGIN,
    };
  },

  resetEnd = (payload = null) => {
    return {
      type: Constants.RESET_END,
    };
  },

  reset = (payload, token) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return http.post(
          `/auth/reset/${token}`,
          null,
          payload,
          resetEnd,
          dispatch,
          getState,
          true,
          false,
      );
    };
  },

  verifyReset = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return http.get(
          `/auth/reset/${payload.token}`,
          null,
          payload,
          resetEnd,
          dispatch,
          getState,
          false,
          false,
      );
    };
  };

export default {
  reset,
  verifyReset,
};
