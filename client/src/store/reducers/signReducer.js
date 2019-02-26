import { MEMBER_SIGNED } from '../actions/usersActions'

const initialState = {
  signature: {},
  message: null,
  error: null,
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
        signature: true,
        message: action.payload,
      }

    default:
      return state
  }
}

export default usersReducer
