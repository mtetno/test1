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
    [Constants.CREATE_PAGE_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.SET_PAGES]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.GET_QUESTIONS_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.GET_QUESTIONS_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        questions: action.payload,
      };
    },
  },

  initialState = {
    fetch: false,
    questions: [],
  };

export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
