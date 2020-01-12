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
    [Constants.GET_PHENO_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        phenoType: action.payload
      };
    },
    [Constants.GET_ARTICLE_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        articles: action.payload,
      };
    },
    [Constants.GET_FAV_ARTICLE_END]: (state, action) => {
      return {
        ...state,
        fetch: false,
        favArticles: action.payload,
      };
    },
    [Constants.SET_FAV_ARTICLE_END]: (state, action) => {
        return {
        ...state,
        fetch: false,
      };
    },
    [Constants.UPLOAD_DOCUMENTS_END]: (state, action) => {
   
      return {
        ...state,
        fetch: false,
      };
    },
    [Constants.GET_DOCUMENTS_END]: (state, action) => {
     return {
        ...state,
        fetch: false,
        documents: action.payload,
      };
    },
    [Constants.GET_GRECOMMENDATION_END]: (state, action) => {
     return {
        ...state,
        fetch: false,
        Grecommendation:action.payload,
      };
    },
    [Constants.GET_DOWNLOAD_DOCUMENT_END]: (state, action) => {
      console.log(action.payload);
     return {
        ...state,
        fetch: false,
        documentData:action.payload
      };
    }
  },

  initialState = {
    fetch: false,
  };

export default function adminReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
