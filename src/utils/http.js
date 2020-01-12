import { actions as toastrActions } from 'react-redux-toastr';
import { forIn, join } from 'lodash';
import { api } from '../config';

const
  defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  handleError = (dispatch, json) => {
    const {message, detail, errors} = json,
      detailedErrorMessages = [];

    // api weirdness returning objects instead of arrays:
    forIn(errors || [], (error, type) => {
      forIn(error, (details) => {
        detailedErrorMessages.push(`${type}: ${details.message}`);
      });
    });

    dispatch(toastrActions.add({
      type: 'error',
      message: join(detailedErrorMessages, ', ') || detail || message,
      options: {
        showCloseButton: true,
        onHideComplete: () => {
          dispatch(toastrActions.removeByType('error'));
        },
      },
    }));
  },
  notifySuccess = (dispatch, message = 'Data has been saved successfully.') => {
    dispatch(toastrActions.add({
      type: 'success',
      message,
      options: {
        'time-out':20,
        showCloseButton: true,
        onHideComplete: () => {
          dispatch(toastrActions.removeByType('success'));
        },
      },
    }));
  },
  post = (service = 'usermanagement', url, headers, data, done, dispatch, getState, showSuccess = false, auth = true) => {
    /* eslint-disable one-var */
    headers = headers || defaultHeaders;
    
    headers['Authorization'] = 'Basic SFBTLVdFTExORVNTLWo5cGp2cTFmY2hhamk1bnRpcTJqZmNsYzhwOGExOWY3Omswc2hiVDRJWl80OTYyMTQ1ODUzMjhfYVlxMFJYTm1GVUpqYjA=';

    return fetch(`${api[service]}${url}`, {
      method: 'post',
      headers,
      body: JSON.stringify(data),
    })
    .then((response) => {
      return response.json().then((json) => {
        if (!json.success) {
          // handleError(dispatch, json);
        } else {
          if (showSuccess) {
            const { message } = json;
            notifySuccess(dispatch, message);
          }
        }
        dispatch(done(json));
        return json;
      });
    })
    .catch((error) => {
      dispatch(done());
      return error;
    });
  },
  get = (service = 'usermanagement', url, headers, data, done, dispatch, getState, showSuccess = false, auth = true) => {
    /* eslint-disable one-var */
    headers = headers || defaultHeaders;
    if (auth) {
      const
      { user } = getState().signin;
      headers['Authorization'] = 'Basic SFBTLVdFTExORVNTLWo5cGp2cTFmY2hhamk1bnRpcTJqZmNsYzhwOGExOWY3Omswc2hiVDRJWl80OTYyMTQ1ODUzMjhfYVlxMFJYTm1GVUpqYjA=';
    }
    return fetch(`${api[service]}${url}`, {
      method: 'get',
      headers,
    })
    .then((response) => {
      return response.json().then((json) => {
        if (!json.success) {
          // handleError(dispatch, json);
        } else {
          if (showSuccess) {
            const { message } = json;
            notifySuccess(dispatch, message);
          }
        }
        dispatch(done(json));
        return json;
      });
    })
    .catch((error) => {
      dispatch(done());
      return error;
    });
  };

export default {
  post,
  get,
  notifySuccess,
  handleError,
};
