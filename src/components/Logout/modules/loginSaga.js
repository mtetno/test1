import {put, takeEvery} from 'redux-saga/effects'
import {ACTION_USER_LOGOUT} from './constants'
import {logout} from './actions'

function* logoutUserEffects() {
  yield put(logout())
}

function* loginSagas() {
  yield takeEvery(ACTION_USER_LOGOUT, logoutUserEffects)
}

export default loginSagas
