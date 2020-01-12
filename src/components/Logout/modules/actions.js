import {ACTION_USER_LOGOUT} from './constants'

function action(type, payload = {}) {
  return {type, ...payload}
}

export const logout = () => action(ACTION_USER_LOGOUT)
