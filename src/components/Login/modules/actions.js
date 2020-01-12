import {USER_LOGIN_ACTION, USER_LOGIN_ACTION_SUCCESS} from './constants'

function action(type, payload = {}) {
  return {type, ...payload}
}

export const userLogin = (email, password) =>
  action(USER_LOGIN_ACTION, {email, password})
export const userLoginSuccess = (email, password, role) =>
  action(USER_LOGIN_ACTION_SUCCESS, {email, password, role})
