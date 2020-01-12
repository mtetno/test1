import Constants from './constants';

const
  getPages = () => {
    const pages = JSON.parse(sessionStorage.getItem('pages'));
    return {
      type: Constants.GET_PAGES,
      payload: pages || [],
    };
  };

export default {
  getPages,
};
