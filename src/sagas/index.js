import {all} from 'redux-saga/effects'
import loginSaga from '../components/Login/modules/loginSaga'

export default function* rootSaga() {
  yield all([loginSaga()])
}
