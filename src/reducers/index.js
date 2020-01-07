import * as ActionTypes from '../actions'
import { merge } from 'lodash/object'
import paginate from './paginate'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.SEND_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  userApi : paginate({
    mapActionToKey: action => action.login,
    types: [
      ActionTypes.PAGINATION_API.REQUEST,
      ActionTypes.PAGINATION_API.SUCCESS,
      ActionTypes.PAGINATION_API.FAILURE
    ]
  }),
  userDashboard : paginate({
    mapActionToKey: action => action.fullName,
    types: [
      ActionTypes.DASHBOARD_API.REQUEST,
      ActionTypes.DASHBOARD_API.SUCCESS,
      ActionTypes.DASHBOARD_API.FAILURE
    ]
  })
})

function router(state = { pathname: '/' }, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_ROUTER_STATE:
      return action.state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  router
})

export default rootReducer
