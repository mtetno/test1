import Constants from './constants';

// ------------------------------------
// Action Handlers
// ------------------------------------
const
  ACTION_HANDLERS = {
    [Constants.RECOMMENDATION_REQUEST_BEGIN]: (state, action) => {
      return {
        ...state,
        fetch: true,
      };
    },
    [Constants.GET_RECOMMENDATION_END]: (state, action) => {
      
      return {
        ...state,
        fetch: false,
       recommendation: action.payload
      
      };
    },
   [Constants.GET_REWARD_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        rewardPoints: action.payload
      
      };
    },
    [Constants.GET_PHENO_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        phenoType: action.payload
      };
    },
    [Constants.GET_PROGRESS_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        userProgress: action.payload,
      };
    },
    [Constants.GET_TIPS_END]: (state, action) => {
     return {
        ...state,
        fetch: false,
        tip: action.payload,
      };
    },
    [Constants.GET_MAXPOINTS_END]: (state, action) => {
      return {
      
        ...state,
        fetch: false,
        maxPoints: action.payload,
      };
    },
    [Constants.SET_EXCERCISE_COMPLETE_END]: (state, action) => {
     return {
        ...state,
        fetch: false,
      };
    },
    [Constants.SET_HOME_REMEDIES_COMPLETE_END]: (state, action) => {
     return {
        ...state,
        fetch: false,
      };
    },
    [Constants.GET_PROGRESS_POINTS_END]: (state, action) => {
      return {
         ...state,
         fetch: false,
         progressPoints:action.payload
       };
     },
     [Constants.SET_CHANGE_SCHEDULES_END]: (state, action) => {
       return {
          ...state,
          fetch: false,
        };
      },
    [Constants.SET_ACCUPRESSURE_COMPLETE_END]: (state, action) => {
     return {
        ...state,
        fetch: false,
      };
    },
  },

  initialState = {
    fetch: false,
    userProgress: null,
  };

export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
