import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.GET_PAGES]: (state, action) => {
      return {
        ...state,
        fetch: false,
        pages: action.payload,
      };
    },
  },

  initialState = {
    fetch: false,
    pages: [],
  };

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
