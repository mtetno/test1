import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.RESET_REQUEST_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.RESET_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
  },

  initialState = {
    fetch: false,
  };

export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
