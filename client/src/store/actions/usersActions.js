import axios from 'axios'

export const START = 'START'
export const FAIL = 'FAIL'
export const ADD_MEMBER_START = 'ADD_MEMBER_START'
export const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS'
export const ADD_MEMBER_FAIL = 'ADD_MEMBER_FAIL'
export const GET_USERS = 'GET_USERS'
export const GET_USER_BY_ID = 'GET_USER_BY_ID'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

const header = {
  headers: {
    authorization: localStorage.getItem('access_token'),
  },
}

export const getUsers = () => dispatch => {
  dispatch({ type: START, message: `Fetching users` })

  axios
    .get('https://club-handbook.herokuapp.com/api/users')
    .then(res => {
      // returns an array of user objects
      dispatch({ type: GET_USERS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const getUserById = id => dispatch => {
  dispatch({ type: START, message: `Getting user` })

  axios
    .get(`https://club-handbook.herokuapp.com/api/users/${id}`, header)
    .then(res => {
      // returns a user object
      dispatch({ type: GET_USER_BY_ID, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const addUser = user => dispatch => {
  dispatch({ type: ADD_MEMBER_START, message: `Adding a user` })

  const requestOptions = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .post(
      'https://club-handbook.herokuapp.com/api/users/addMember',
      user,
      requestOptions
    )
    .then(res => {
      // returns an object with the added user details
      dispatch({ type: ADD_MEMBER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_MEMBER_FAIL, error: err })
    })
}

export const updateUser = (id, changes) => dispatch => {
  dispatch({ type: START, message: `Updating user` })

  const requestOptions = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .patch(
      `https://club-handbook.herokuapp.com/api/users/${id}`,
      changes,
      requestOptions
    )
    .then(res => {
      // returns the user id
      dispatch({ type: UPDATE_USER, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const deleteUser = id => dispatch => {
  dispatch({ type: START, message: `Deleting user` })

  const requestOptions = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .delete(
      `https://club-handbook.herokuapp.com/api/users/${id}`,
      requestOptions
    )
    .then(res => {
      // returns the user id
      dispatch({ type: DELETE_USER, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}
