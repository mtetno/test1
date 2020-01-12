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
    [Constants.SIGNUP_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    },
    [Constants.SIGNUP_ERROR_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
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
