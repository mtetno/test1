import Constants from './constants';
import http from '../../../utils/http';
import { api } from '../../../config';

const
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  requestBegin = () => {
    return {
      type: Constants.RECOMMENDATION_REQUEST_BEGIN,
    };
  },
  getPhenoEnd = (payload = null) => {
    return {
      type: Constants.GET_PHENO_END,
      payload: payload,
    };
  },
  getPhenoType = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['questionnaire']}/questionnaire/userQuestionnaires/phenotype`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
          dispatch(getPhenoEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getPhenoEnd());
      });
    };
  },
  getArticleEnd = (payload = null) => {
    return {
      type: Constants.GET_ARTICLE_END,
      payload: payload,
    };
  },
  getArticles = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/article/get`, {
        method: 'post',
        headers,
        body: JSON.stringify({age:25,gender:"male",phenotype:"P"})
      })
      .then((response) => {
        
        return response.json().then((json) => {
           dispatch(getArticleEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getArticleEnd());
      });
    };
  },
  getFavArticleEnd = (payload = null) => {
    return {
      type: Constants.GET_FAV_ARTICLE_END,
      payload: payload,
    };
  },
  getFavArticles = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/article/viewIsFavorite`, {
        method: 'post',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
           dispatch(getFavArticleEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getFavArticleEnd());
      });
    };
  },
  setFavArticleEnd = (payload = null) => {
    return {
      type: Constants.SET_FAV_ARTICLE_END,
      payload: payload,
    };
  },
  setFavArticles = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/article/markIsFavorite/${payload}?isFavorite=true`, {
        method: 'PUT',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
           dispatch(setFavArticleEnd(json));
        });
      })
      .catch((error) => {
       dispatch(setFavArticleEnd());
      });
    };
  },
  uploadDocumentsEnd = (payload = null) => {
    return {
      type: Constants.UPLOAD_DOCUMENTS_END,
      payload: payload,
    };
  },
  uploadDocuments = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      const headers1={'Authorization': `Bearer ${token}`
    };
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/documents/upload`, {
        method: 'POST',
        headers:headers1,
        body:payload
      })
      .then((response) => {
         return response.json().then((json) => {
         dispatch(uploadDocumentsEnd(json));
        });
      })
      .catch((error) => {
        dispatch(uploadDocumentsEnd());
      });
    };
  },
  getDocumentsEnd = (payload = null) => {
    return {
     type: Constants.GET_DOCUMENTS_END,
     payload: payload
    };
  },
  getDocuments = (payload) => {
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/documents/view`, {
        method: 'get',
        headers,
      })
      .then((response) => {
        return response.json().then((json) => {
           dispatch(getDocumentsEnd(json));
        });
      })
      .catch((error) => {
        dispatch(getDocumentsEnd());
      });
    };
  },
  getGRecommendationEnd = (payload = null) => {
    return {
     type: Constants.GET_GRECOMMENDATION_END,
     payload: payload
    };
  },
  getGRecommendation = (payload) => {
  
    return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/recommendations`, {
        method: 'put',
        body:JSON.stringify({
          phenotype : "P",
          disease : "General"
        }),
        headers,
      })
      .then((response) => {

        return response.json().then((json) => {
           dispatch(getGRecommendationEnd(json));
        });
      })
      .catch((error) => {
         dispatch(getGRecommendationEnd());
      });
    };
  },
  downloadDocumentsEnd = (payload = null) => {
    return {
     type: Constants.GET_DOWNLOAD_DOCUMENT_END,
     payload: payload
    };
  },
  downloadDocuments = (payload) => {
  return (dispatch, getState) => {
      const { user, token } = getState().signin;
      headers['Authorization'] = `Bearer ${token}`;
      dispatch(requestBegin());
      return fetch(`${api['dashboard']}/dashboard/documents/files/${payload}`, {
        method: 'get',
        headers,
      })
      .then((response) => {
         return  response.blob().then((re)=>{dispatch(downloadDocumentsEnd(URL.createObjectURL(re)))});
      })
      .catch((error) => {
         dispatch(downloadDocumentsEnd());
      });
    };
  };

export default {
  getPhenoType,
  getArticles,
  getFavArticles,
  setFavArticles,
  uploadDocuments,
  getDocuments,
  getGRecommendation,
  downloadDocuments
};
