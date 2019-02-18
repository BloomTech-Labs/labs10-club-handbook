import {
  START,
  FAIL,
  GET_CLUBS,
  GET_CLUB_BY_ID,
  UPDATE_CLUB,
  DELETE_CLUB,
  GET_CLUB_SECTIONS,
  ADD_SECTION_BY_CLUB_ID,
  UPDATE_SECTION_BY_CLUB_ID,
  DELETE_ALL_SECTIONS_BY_CLUB_ID,
  DELETE_ALL_SECTIONS_BY_CLUB_ID,
  DELETE_SECTION_BY_SECTION_ID,
} from '../actions/clubActions'

const clubReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default clubReducer
