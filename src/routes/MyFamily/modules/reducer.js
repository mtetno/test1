import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.FORGET_REQUEST_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.FORGET_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
      };
    },

  [Constants.GET_ADDMEMBER_END]: (state, action) => {
    return {
      ...state,
      fetch: false,
    };
  },


  [Constants.SAVE_MEMBER_END]: (state, action) => {
      let newState = {...state};
      if(action.payload && action.payload.dependentVOs )
      {newState.dependentVOs = action.payload.dependentVOs;}
      return newState;
    },
},

  initialState = {
    fetch: false,
  };

export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
