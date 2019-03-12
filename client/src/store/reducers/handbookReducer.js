import { TOGGLE_BAR } from '../actions/handbookActions'

const initialState = {
  navOpen: true,
}

const handbookReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BAR:
      return {
        ...state,
        navOpen: !state.navOpen,
      }

    default:
      return state
  }
}

export default handbookReducer
