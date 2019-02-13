import usersReducer from './usersReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   users: usersReducer,
});

export default rootReducer;
