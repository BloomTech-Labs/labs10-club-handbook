import {
  AUTHORIZATION_START,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAIL,
  LOGOUT_USER,
} from '../actions/authActions'
import {
  USERS_START,
  FAIL,
  GET_INFO_FROM_TOKEN,
  LOG_OUT,
  GET_USERS_BY_CLUB_ID,
  GET_USER_BY_ID,
} from '../actions/usersActions'
import { CREATE_CLUB } from '../actions/clubActions'

const initialState = {
  currentUser: {},
  loading: false,
  message: null,
  error: null,
  authorizingUser: false,
  userAuthorized: false,
  userLoggedIn: false,
  authError: false,
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
        authError: false,
        loading: false,
      }

    case AUTHORIZATION_FAIL:
      return {
        ...state,
        authorizingUser: false,
        userAuthorized: false,
        userLoggedIn: false,
        message: action.message,
        authError: true,
      }

    case LOGOUT_USER:
      return {
        ...state,
        userAuthorized: false,
        userLoggedIn: false,
        message: action.message,
      }

    case USERS_START:
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

    case GET_USER_BY_ID:
      return {
        ...state,
        loading: false,
        message: null,
        currentUser: action.payload,
      }

    case GET_USERS_BY_CLUB_ID:
      return {
        ...state,
        loading: false,
        message: null,
      }

    case LOG_OUT:
      return {
        initialState,
      }

    case CREATE_CLUB:
      return {
        ...state,
        currentUser: { ...state.currentUser, club_id: action.payload.club.id },
      }

    default:
      return state
  }
}

export default authReducer
