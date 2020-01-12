import Constants from './constants';
import http from '../../../utils/http';

const
  requestBegin = () => {
    return {
      type: Constants.REQUEST_BEGIN,
    };
  },

  createPageEnd = (payload = null) => {
    return {
      type: Constants.CREATE_PAGE_END,
      payload,
    };
  },

  createPage = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return http.post(
          '/api/page/create1',
          null,
          payload,
          createPageEnd,
          dispatch,
          getState,
          false,
          false,
      );
    };
  },

  setPages = (payload = []) => {
    sessionStorage.setItem('pages', JSON.stringify(payload));
    return {
      type: Constants.SET_PAGES,
    };
  },

  getQuestionsBegin = () => {
    return {
      type: Constants.GET_QUESTIONS_BEGIN,
    };
  },

  getQuestionsEnd = (payload = null) => {
    return {
      type: Constants.GET_QUESTIONS_END,
      payload,
    };
  },

  getQuestions = (payload) => {
    return (dispatch, getState) => {
      dispatch(requestBegin());
      return http.get(
          '/question/list',
          null,
          payload,
          getQuestionsEnd,
          dispatch,
          getState,
          false,
          false,
      );
    };
  };

export default {
  setPages,
  getQuestions,
  createPage,
};
