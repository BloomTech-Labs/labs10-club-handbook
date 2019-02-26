import axios from 'axios'

export const START = 'START'
export const FAIL = 'FAIL'
export const ADD_MEMBER_START = 'ADD_MEMBER_START'
export const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS'
export const ADD_MEMBER_FAIL = 'ADD_MEMBER_FAIL'
export const GET_USERS = 'GET_USERS'
export const GET_USER_BY_ID = 'GET_USER_BY_ID'
export const GET_USERS_BY_CLUB_ID = 'GET_USERS_BY_CLUB_ID'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const GET_INFO_FROM_TOKEN = 'GET_INFO_FROM_TOKEN'
export const FAIL_FROM_TOKEN = 'FAIL_FROM_TOKEN'

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
  const header = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }
  axios
    // .get(`http://localhost:5000/api/users/${id}`, header)
    .get(`https://club-handbook.herokuapp.com/api/users/${id}`, header)
    .then(res => {
      // returns a user object
      dispatch({ type: GET_USER_BY_ID, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const getUsersByClubId = clubId => dispatch => {
  dispatch({ type: START, message: `Getting users in club` })

  const header = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    // .get(`http://localhost:5000/api/users/`, header)
    .get(`https://club-handbook.herokuapp.com/api/users`)
    .then(res => {
      const users = res.data.filter(user => {
        return user.club_id === clubId
      })

      dispatch({ type: GET_USERS_BY_CLUB_ID, payload: users })
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
      dispatch({ type: ADD_MEMBER_SUCCESS, payload: res.data.user })
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
  console.log(id)
  console.log(changes)

  axios
    .patch(
      `https://club-handbook.herokuapp.com/api/users/${id}`,
      changes,
      requestOptions
    )
    .then(res => {
      // returns the user id
      console.log(res)
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

export const getInfoFromToken = () => dispatch => {
  dispatch({ type: START, message: `getting user info...` })

  const header = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    // .get(`http://localhost:5000/api/users/getInfoFromToken`, header)
    .get(
      `https://club-handbook.herokuapp.com/api/users/getInfoFromToken`,
      header
    )
    .then(res => {
      if (res.status == 200) {
        dispatch({ type: GET_INFO_FROM_TOKEN, payload: res.data })
      } else {
        dispatch({ type: FAIL_FROM_TOKEN })
      }
    })
    .catch(err => {
      dispatch({ type: FAIL_FROM_TOKEN })
      dispatch({ type: FAIL, error: err })
    })
}
