import { MEMBER_SIGNED, START, FAIL } from '../actions/usersActions'

const initialState = {
  signature: {},
  message: null,
  error: false,
  loading: false
}

const signReducer = (state = initialState, action) => {
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

    case MEMBER_SIGNED:
      return {
        ...state,
        loading: false,
        signature: true,
        message: action.payload,
      }

    default:
      return state
  }
}

export default usersReducer
