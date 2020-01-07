import axios from 'axios'
import {get} from 'lodash'
import Logger from '../LogManager/Logger'
import NotificationManager from '../NotificationManager/NotificationManager'

/**
  Request Object Template :
  {
    urlPath : (String) Api Path,
    method : (String) get/post/delete/put,
    headers : (Object) {Key:value},
    body : (Object) {key:value},
    showErrorToast : (boolean) true/false,
    showErrorToastFromDescription : (String) Incase of failure of request show this description,
    showErrorToastFromResponse : (String) Response path - path of object key in string format which will be parsed to show error response description
  }
  Note :
  1. Any object key extra from above key will be rejected
  2. Incase showErrorToast is true then showErrorToastFromDescription OR showErrorToastFromResponse has to be present else rejected

  Response Object Template :
  {
   responseCode : (int) 200/400/500,
   responseText : (String) "success"/"error"
   responseObject : (Object) {} response object,
  }
  * */

/*eslint-disable */
const validHttpRequestProperties = [
  'urlPath',
  'method',
  'headers',
  'body',
  'showToast',
  'toastResponsePath',
]

const isTokenExpired = () => {
  return false // testing is not done yet
}

const getTokenFromApi = () => {
  resolve('Token goes here')
}

const issueToken = () => {
  return new Promise((resolve, reject) => {
    return getTokenFromApi()
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const setInterceptors = () => {
  axios.interceptors.request.use(
    (request) => {
      Logger.info('##### Starting Request #####', request)
      let originalRequest = request
      if (isTokenExpired()) {
        return issueToken().then((token) => {
          originalRequest['Authorization'] = 'Bearer ' + token
          return Promise.resolve(originalRequest)
        })
      }
      return request
    },
    (err) => {
      return Promise.reject(err)
    }
  )

  axios.interceptors.response.use((response) => {
    return response
  })
}

const validateRequest = (httpRequestObj) => {
  if (httpRequestObj === undefined) {
    return false
  }
  const httpProperties = Object.keys(httpRequestObj)
  let isValid = true

  httpProperties.map((element) => {
    if (validHttpRequestProperties.includes(element) === false) {
      isValid = false
      return isValid
    }
    return true
  })

  isValid = httpRequestObj.showToast
    ? httpRequestObj.toastResponsePath !== undefined
    : false
  return isValid
}

const notifyResponse = (response, httpRequestObj) => {
  if (httpRequestObj.showToast) {
    if (response.responseCode !== 500) {
      NotificationManager.showInfoNotification(
        get(response.responseObject, httpRequestObj.toastResponsePath)
      )
    } else {
      NotificationManager.showErrorNotification(
        process.env.REACT_APP_INTERNAL_SERVER_ERROR_TEXT
      )
    }
  }
}

const formatResponse = (response, httpRequestObj) => {
  const responseObject = {}
  responseObject.responseCode = response.status === undefined ? 500 : response.status
  responseObject.responseText =
    response.statusText === undefined ? response.message : response.statusText
  responseObject.responseObject =
    response.data === undefined ? response.stack : response.data
  notifyResponse(responseObject, httpRequestObj)
  Logger.info('#####    Request ENDS  #####', responseObject)
  return responseObject
}

export const getRequest = (httpRequestObj, callback) => {
  if (validateRequest(httpRequestObj) === false) {
    Logger.error('Invalid http Request')
    return
  }
  if (process.env.REACT_APP_ENABLE_AXIOS_INTERCEPTOR) {
    setInterceptors()
  }

  const config = {
    headers: httpRequestObj.headers,
    withCredentials: true, // note for cookies to work, send headers: {Authorization: `Bearer ${cookie_value}`}
  }

  axios.get(process.env.REACT_APP_BASE_URL + httpRequestObj.urlPath, config).then(
    (response) => {
      callback(formatResponse(response, httpRequestObj))
    },
    (error) => {
      callback(formatResponse(error, httpRequestObj))
    }
  )
}

export const postRequest = (httpRequestObj, callback) => {
  if (validateRequest(httpRequestObj) === false) {
    Logger.error('Invalid http Request')
    return
  }
  if (process.env.REACT_APP_ENABLE_AXIOS_INTERCEPTOR) {
    setInterceptors()
  }

  const config = {
    headers: httpRequestObj.headers,
  }

  axios
    .post(
      process.env.REACT_APP_BASE_URL + httpRequestObj.urlPath,
      httpRequestObj.body,
      config
    )
    .then(
      (response) => {
        callback(formatResponse(response, httpRequestObj))
      },
      (error) => {
        callback(formatResponse(error, httpRequestObj))
      }
    )
}

export const putRequest = () => {}

export const deleteRequest = () => {}
/* eslint-enable */
