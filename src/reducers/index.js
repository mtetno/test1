import {combineReducers} from 'redux'
import signinReducer from '../components/Login/modules/reducer'
import { reducer } from 'redux-form'
export const rootReducer = combineReducers({
  user: signinReducer,
  form: reducer
})

export default rootReducer
