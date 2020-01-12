import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.REQUEST_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.SIGNIN_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    },
    [Constants.SIGNOUT_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        user: null,
        token: null,
      };
    },
    [Constants.SIGNIN_ERROR_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.GET_QUESTION_STATUS]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.GET_USER_DETAILS]: (state, action) => {
      return {
        ...state,
        fetch: false,
        userDetails: action.payload,
      };
    },
  },

  initialState = {
    fetch: false,
    user: null,
    token: null,
  };

export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
