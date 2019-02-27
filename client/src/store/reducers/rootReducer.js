import usersReducer from './usersReducer'
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import clubReducer from './clubReducer'
import signReducer from './signReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  clubs: clubReducer,
  sign: signReducer
})

export default rootReducer
