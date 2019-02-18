import axios from 'axios'

export const START = 'START'
export const FAIL = 'FAIL'
export const GET_USERS = 'GET_USERS'
export const GET_USER_BY_ID = 'GET_USER_BY_ID'
export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export const getUsers = () => dispatch => {
  dispatch({ type: START, message: `Fetching users` })

  axios
    .get('https://club-handbook.herokuapp.com/api/users')
    .then(res => {
      dispatch({ type: GET_USERS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const getUserById = id => dispatch => {
  dispatch({ type: START, message: `Getting user` })

  axios
    .get(`https://club-handbook.herokuapp.com/api/users/${id}`)
    .then(res => {
      dispatch({ type: GET_USER_BY_ID, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const addUser = user => dispatch => {
  dispatch({ type: START, message: `Adding a user` })

  axios
    .get('https://club-handbook.herokuapp.com/api/users', user)
    .then(res => {
      dispatch({ type: ADD_USER, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const updateUser = id => dispatch => {
  dispatch({ type: START, message: `Updating user` })

  axios
    .get(`https://club-handbook.herokuapp.com/api/users/${id}`)
    .then(res => {
      dispatch({ type: UPDATE_USER, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const deleteUser = id => dispatch => {
  dispatch({ type: START, message: `Deleting user` })

  axios
    .get(`https://club-handbook.herokuapp.com/api/users/${id}`)
    .then(res => {
      dispatch({ type: DELETE_USER, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}
