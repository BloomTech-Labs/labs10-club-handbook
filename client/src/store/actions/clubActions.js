import axios from 'axios'

export const START = 'START'
export const FAIL = 'FAIL'
export const GET_CLUBS = 'GET_CLUBS'
export const GET_CLUB_BY_ID = 'GET_CLUB_BY_ID'
export const CREATE_CLUB = 'CREATE_CLUB'
export const UPDATE_CLUB = 'UPDATE_CLUB'
export const DELETE_CLUB = 'DELETE_CLUB'
export const GET_CLUB_SECTIONS = 'GET_CLUB_SECTIONS'
export const ADD_SECTION_BY_CLUB_ID = 'ADD_SECTION_BY_CLUB_ID'
export const UPDATE_SECTION_BY_CLUB_ID = 'UPDATE_SECTION_BY_CLUB_ID'
export const DELETE_ALL_SECTIONS_BY_CLUB_ID = 'DELETE_ALL_SECTIONS_BY_CLUB_ID'
export const DELETE_SECTION_BY_SECTION_ID = 'DELETE_SECTION_BY_SECTION_ID'

const header = {
  headers: {
    authorization: localStorage.getItem('access_token'),
  },
}

export const getClubs = () => dispatch => {
  dispatch({ type: START, message: `Getting list of clubs` })

  axios
    .get('https://club-handbook.herokuapp.com/api/clubs')
    .then(res => {
      // returns an array of club objects
      dispatch({ type: GET_CLUBS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const getClubById = id => dispatch => {
  dispatch({ type: START, message: `Getting club by id` })

  axios
    // .get(`http://localhost:5000/api/clubs/${id}`, header)
    .get(`https://club-handbook.herokuapp.com/api/clubs/${id}`, header)
    .then(res => {
      // returns an object with the club details
      dispatch({ type: GET_CLUB_BY_ID, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const createClub = clubInfo => dispatch => {
  dispatch({ type: START, message: `Creating new club` })

  axios
    // .post(`http://localhost:5000/api/clubs`, clubInfo, header)
    .post(`https://club-handbook.herokuapp.com/api/clubs`, clubInfo, header)
    .then(res => {
      // returns an object with the club details
      dispatch({ type: CREATE_CLUB, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const updateClub = (id, clubInfo) => dispatch => {
  dispatch({ type: START, message: `Updating club` })

  axios
    // .patch(`http://localhost:5000/api/clubs/${id}`, clubInfo, header)
    .patch(
      `https://club-handbook.herokuapp.com/api/clubs/${id}`,
      clubInfo,
      header
    )
    .then(res => {
      // returns an object with the club details
      dispatch({ type: UPDATE_CLUB, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

// will not delete if sections for club exist via PSQL constraint
export const deleteClub = id => dispatch => {
  dispatch({ type: START, message: `Deleting club` })

  axios
    .delete(`https://club-handbook.herokuapp.com/api/clubs/${id}`, header)
    .then(res => {
      // returns message: `club deleted`
      dispatch({ type: DELETE_CLUB, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const getClubSections = id => dispatch => {
  dispatch({ type: START, message: `Getting club sections` })

  axios
    // .get(`http://localhost:5000/api/clubs/${id}/sections`, header)
    .get(`https://club-handbook.herokuapp.com/api/clubs/${id}/sections`, header)
    .then(res => {
      // returns an array of section objects
      console.log(res.data)
      dispatch({ type: GET_CLUB_SECTIONS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const addSection = (id, sectionInfo) => dispatch => {
  dispatch({ type: START, message: `Adding a section` })

  axios
    .post(
      `https://club-handbook.herokuapp.com/api/clubs/${id}/sections`,
      sectionInfo,
      header
    )
    .then(res => {
      // returns a section object
      dispatch({ type: ADD_SECTION_BY_CLUB_ID, payload: res.data })
    })
    .catch(err => {
      console.log(id, sectionInfo, header)
      dispatch({ type: FAIL, error: err })
    })
}

export const updateSection = (id, sectionId, sectionInfo) => dispatch => {
  dispatch({ type: START, message: `Updating section` })

  axios
    .patch(
      `https://club-handbook.herokuapp.com/api/clubs/${id}/sections/${sectionId}`,
      sectionInfo,
      header
    )
    .then(res => {
      // returns a section object
      dispatch({ type: UPDATE_SECTION_BY_CLUB_ID, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const deleteAllSections = id => dispatch => {
  dispatch({ type: START, message: `Deleting all sections` })

  axios
    .delete(
      `https://club-handbook.herokuapp.com/api/clubs/${id}/sections`,
      header
    )
    .then(res => {
      // returns a message
      dispatch({ type: DELETE_ALL_SECTIONS_BY_CLUB_ID, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const deleteSectionById = (id, sectionId) => dispatch => {
  dispatch({ type: START, message: `Deleting section` })

  axios
    .delete(
      `https://club-handbook.herokuapp.com/api/clubs/${id}/sections/${sectionId}`,
      header
    )
    .then(res => {
      // returns a message
      dispatch({ type: DELETE_SECTION_BY_SECTION_ID, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}
