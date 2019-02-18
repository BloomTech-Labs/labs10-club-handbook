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
  DELETE_SECTION_BY_SECTION_ID,
  CREATE_CLUB,
} from '../actions/clubActions'

const initialState = {
  clubs: [],
  clubById: {},
  sections: [],
  sectionById: {},
  loading: false,
  message: null,
  error: null,
}

const clubReducer = (state = initialState, action) => {
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

    case GET_CLUBS:
      return {
        ...state,
        clubs: action.payload,
        loading: false,
      }

    case GET_CLUB_BY_ID:
      return {
        ...state,
        clubById: action.payload,
        loading: false,
      }

    case CREATE_CLUB:
      return {
        ...state,
        clubs: [...state.clubs, action.payload],
        loading: false,
      }

    case UPDATE_CLUB:
      return {
        ...state,
        clubs: state.clubs.map(club => {
          if (club.id === action.payload.id) {
            return { club: action.payload }
          }
        }),
        loading: false,
      }

    case DELETE_CLUB:
      return {
        ...state,
        clubs: state.clubs.filter(club => club.id !== action.payload),
        loading: false,
      }

    case GET_CLUB_SECTIONS:
      return {
        ...state,
        sections: action.payload,
        loading: false,
      }

    case ADD_SECTION_BY_CLUB_ID:
      return {
        ...state,
        sections: [...state.sections, action.payload],
        loading: false,
      }

    case UPDATE_SECTION_BY_CLUB_ID:
      return {
        ...state,
        sections: state.sections.map(section => {
          if (section.id === action.payload.id) {
            return { section: action.payload }
          }
        }),
        loading: false,
      }

    case DELETE_ALL_SECTIONS_BY_CLUB_ID:
      return {
        ...state,
        sections: [],
        loading: false,
      }

    case DELETE_SECTION_BY_SECTION_ID:
      return {
        ...state,
        sections: state.sections.filter(
          section => section.id !== action.payload
        ),
      }

    default:
      return state
  }
}

export default clubReducer
