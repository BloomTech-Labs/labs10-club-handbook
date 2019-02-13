import {
   START,
   FAIL,
   GET_USERS,
   GET_USER_BY_ID,
   ADD_USER,
   UPDATE_USER,
   DELETE_USER,
} from '../actions/usersActions';

const initialState = {
   users: [],
   currentUser: null,
   loading: false,
   message: null,
   error: null,
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case START:
         return {
            ...state,
            loading: true,
            message: action.message,
         };

      case FAIL:
         return {
            ...state,
            loading: false,
            message: null,
            error: action.error,
         };

      case GET_USERS:
         return {
            ...state,
            users: action.payload,
            loading: false,
            message: null,
         };

      case GET_USER_BY_ID:
         return {
            ...state,
            currentUser: action.payload,
            message: null,
         };

      case ADD_USER:
         return {
            ...state,
            message: null,
         };

      case UPDATE_USER:
         return {
            ...state,
            message: null,
         };

      case DELETE_USER:
         return {
            ...state,
            message: null,
         };

      default:
         return state;
   }
};

export default usersReducer;
