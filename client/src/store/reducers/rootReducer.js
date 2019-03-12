import usersReducer from './usersReducer'
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import clubReducer from './clubReducer'
import signReducer from './signReducer'
import formatReducer from './formatReducer'
import handbookReducer from './handbookReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  clubs: clubReducer,
  sign: signReducer,
  format: formatReducer,
  handbook: handbookReducer,
})

export default rootReducer
