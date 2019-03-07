import {
  GET_FORMATS_START,
  GET_FORMATS_SUCCESS,
  GET_FORMATS_FAIL,
} from '../actions/formatActions'
import { LOG_OUT } from '../actions/usersActions'

const initialState = {
  gettingFormats: false,
  colors: [],
  fonts: [],
  error: '',
}

const formatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORMATS_START:
      return {
        ...state,
        gettingFormats: true,
      }

    case GET_FORMATS_SUCCESS:
      return {
        ...state,
        gettingFormats: false,
        colors: action.payload.colors,
        fonts: action.payload.fonts,
      }

    case GET_FORMATS_FAIL:
      return {
        ...state,
        gettingFormats: false,
        error: action.error,
      }

    case LOG_OUT:
      return {
        initialState,
      }

    default:
      return state
  }
}

export default formatReducer
