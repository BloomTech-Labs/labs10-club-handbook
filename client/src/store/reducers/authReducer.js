import {
  AUTHORIZATION_START,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAIL,
  LOGOUT_USER,
} from '../actions/authActions'
import { START, FAIL, GET_INFO_FROM_TOKEN } from '../actions/usersActions'

const initialState = {
  currentUser: {},
  loading: false,
  message: null,
  error: null,
  authorizingUser: false,
  userAuthorized: false,
  userLoggedIn: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_START:
      return {
        ...state,
        authorizingUser: true,
        userAuthorized: false,
        message: action.message,
      }

    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        authorizingUser: false,
        userAuthorized: true,
        userLoggedIn: true,
        message: action.message,
        currentUser: action.payload,
      }

    case AUTHORIZATION_FAIL:
      return {
        ...state,
        authorizingUser: false,
        userAuthorized: false,
        userLoggedIn: false,
        message: action.message,
      }

    case LOGOUT_USER:
      return {
        ...state,
        userAuthorized: false,
        userLoggedIn: false,
        message: action.message,
      }

    case START:
      return {
        ...state,
        loading: true,
        message: action.message,
      }

    case FAIL:
      return {
        ...state,
        loading: false,
        message: null,
        error: action.error,
      }

    case GET_INFO_FROM_TOKEN:
      return {
        ...state,
        loading: false,
        message: null,
        currentUser: action.payload.user,
      }

    default:
      return state
  }
}

export default authReducer
