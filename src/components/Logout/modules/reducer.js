import {ACTION_USER_LOGOUT} from './constants'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTION_USER_LOGOUT]: (state, action) => {
    return {}
  },
}
const initialState = {}

export default function logoutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
