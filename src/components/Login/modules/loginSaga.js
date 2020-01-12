import {put, takeEvery} from 'redux-saga/effects'
import {userLogin} from '../../../utils/NetworkManager/HttpRequests'
import {formatResponse} from '../../../utils/NetworkManager/NetworkManager'
import {USER_LOGIN_ACTION} from './constants'
import {userLoginSuccess} from './actions'

function* fetchUserEffects(payload) {
  const {email, password} = payload
  const httpRequestObj = {
    urlPath: process.env.REACT_APP_USER_LOGIN_API,
    method: 'post',
    body: {email, password},
    showToast: true,
    toastResponsePath: 'result[0].message',
  }
  const axiosResponse = yield userLogin(httpRequestObj)
  const response = yield formatResponse(axiosResponse, httpRequestObj)
  const {role} = response.responseObject
  yield put(userLoginSuccess(email, password, role))
}

function* loginSagas() {
  yield takeEvery(USER_LOGIN_ACTION, fetchUserEffects)
}

export default loginSagas
