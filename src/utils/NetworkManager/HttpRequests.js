import {postRequest} from './NetworkManager'

export const userLogin = (email, password, callback) => {
  const httpRequestObj = {
    urlPath: process.env.REACT_APP_USER_LOGIN_API,
    method: 'post',
    body: {email, password},
    showToast: true,
    toastResponsePath: 'result[0].message',
  }
  postRequest(httpRequestObj, callback)
}
