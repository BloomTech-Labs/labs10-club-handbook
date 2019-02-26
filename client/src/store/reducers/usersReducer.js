import {
  ADD_MEMBER_START,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_FAIL,
  GET_USERS,
  GET_USER_BY_ID,
  GET_USERS_BY_CLUB_ID,
  UPDATE_USER,
  DELETE_USER,
  START,
  FAIL,
  GET_INFO_FROM_TOKEN,
  FAIL_FROM_TOKEN,
} from '../actions/usersActions'

const initialState = {
  users: [],
  userById: {},
  loading: false,
  message: null,
  error: null,
  failFromToken: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case ADD_MEMBER_START:
      return {
        ...state,
        loading: true,
        message: action.message,
      }

    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
        message: null,
      }

    case ADD_MEMBER_FAIL:
      return {
        ...state,
        loading: false,
        message: null,
        error: action.error,
      }

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        message: null,
      }

    case GET_USER_BY_ID:
      return {
        ...state,
        userById: action.payload,
        loading: false,
        message: null,
      }

    case GET_USERS_BY_CLUB_ID:
      return {
        ...state,
        loading: false,
        message: null,
        users: action.payload,
      }

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
            return { user: action.payload }
          }
        }),
        loading: false,
        message: null,
      }

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        loading: false,
        message: null,
      }

    case GET_INFO_FROM_TOKEN:
      return {
        ...state,
        loading: false,
        message: null,
        userById: action.payload.user,
      }

    case FAIL_FROM_TOKEN:
      return {
        ...state,
        failFromToken: true,
      }

    default:
      return state
  }
}

export default usersReducer
