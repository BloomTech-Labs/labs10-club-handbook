import { START, FAIL, LOGIN, REGISTER, LOGOUT } from '../actions/authActions';

initialState = {
   currentUser: null,
   loading: false,
   message: null,
   error: null,
};

const authReducer = (state = initialState, action) => {
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

      case LOGIN:
         return {
            ...state,
            currentUser: action.payload,
            loading: false,
            message: null,
         };

      case REGISTER:
         return {
            ...state,
            currentUser: action.payload,
            loading: false,
            message: null,
         };

      case LOGOUT:
         return {
            currentUser: null,
            loading: false,
            message: null,
            error: null,
         };

      default:
         return state;
   }
};

export default authReducer;
