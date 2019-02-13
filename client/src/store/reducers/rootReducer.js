import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
   users: usersReducer,
   auth: authReducer,
});

export default rootReducer;
