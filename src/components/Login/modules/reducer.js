import {USER_LOGIN_ACTION_SUCCESS} from './constants'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_LOGIN_ACTION_SUCCESS]: (state, action) => {
    return {
      ...state,
      email: action.email,
      password: action.password,
      role: action.role,
    }
  },
}
const initialState = {}

export default function signinReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
