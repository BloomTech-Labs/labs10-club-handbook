import usersReducer from './usersReducer'
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import clubReducer from './clubReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  clubs: clubReducer,
})

export default rootReducer
