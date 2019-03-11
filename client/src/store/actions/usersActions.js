import axios from 'axios'

export const USERS_START = 'USERS_START'
export const FAIL = 'FAIL'
export const ADD_MEMBER_START = 'ADD_MEMBER_START'
export const ADD_MEMBER_SUCCESS = 'ADD_MEMBER_SUCCESS'
export const ADD_MEMBER_FAIL = 'ADD_MEMBER_FAIL'
export const GET_USERS = 'GET_USERS'
export const GET_USER_BY_ID = 'GET_USER_BY_ID'
export const UPDATE_USER_BY_ID = 'UPDATE_USER_BY_ID'
export const GET_USERS_BY_CLUB_ID = 'GET_USERS_BY_CLUB_ID'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const MEMBER_SIGNED = 'MEMBER_SIGNED'
export const GET_INFO_FROM_TOKEN = 'GET_INFO_FROM_TOKEN'
export const FAIL_FROM_TOKEN = 'FAIL_FROM_TOKEN'
export const GET_SUBSCRIPTION_INFO = 'GET_SUBSCRIPTION_INFO'
export const NO_SUBSCRIPTION = 'NO_SUBSCRIPTION'
export const CHANGE_SUB_FAIL = 'CHANGE_SUB_FAIL'
export const RESET_CHANGE_FAIL = 'RESET_CHANGE_FAIL'
export const LOG_OUT = 'LOG_OUT'
export const ADD_MEMBER_RESET = 'ADD_MEMBER_RESET'

const baseURL = 'https://club-handbook.herokuapp.com'
// const baseURL = 'http://localhost:5000'

export const getUsers = () => dispatch => {
  dispatch({ type: USERS_START, message: `Fetching users` })

  axios
    .get('${baseURL}/api/users')
    .then(res => {
      dispatch({ type: GET_USERS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const getUserById = id => dispatch => {
  dispatch({ type: USERS_START, message: `Getting user` })
  const header = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }
  axios
    .get(`${baseURL}/api/users/${id}`, header)
    .then(res => {
      dispatch({ type: GET_USER_BY_ID, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const updateUserById = (id, changes) => dispatch => {
  dispatch({ type: USERS_START, message: `Updating user` })

  const header = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }
  console.log(id)
  console.log(changes)

  axios
    .patch(`${baseURL}/api/users/${id}`, changes, header)
    .then(res => {
      console.log(res.data.user)
      dispatch({ type: UPDATE_USER_BY_ID, payload: res.data.user })
      dispatch(getUserById(id))
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FAIL, error: err })
    })
}

export const getUsersByClubId = clubId => dispatch => {
  dispatch({ type: USERS_START, message: `Getting users in club` })

  const header = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .get(`${baseURL}/api/clubs/${clubId}/members`, header)
    .then(res => {
      console.log(res)
      dispatch({ type: GET_USERS_BY_CLUB_ID, payload: res.data })
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
    .post(`${baseURL}/api/users/addMember`, user, requestOptions)
    .then(res => {
      dispatch({ type: ADD_MEMBER_SUCCESS, payload: res.data.user })
    })
    .catch(err => {
      dispatch({ type: ADD_MEMBER_FAIL, error: err })
    })
}

export const resetAddMember = () => dispatch => {
  dispatch({ type: ADD_MEMBER_RESET })
}

export const updateUser = (id, changes) => dispatch => {
  dispatch({ type: USERS_START, message: `Updating user` })

  const requestOptions = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }
  console.log(id)
  console.log(changes)

  axios
    .patch(`${baseURL}/api/users/addMember/${id}`, changes, requestOptions)
    .then(res => {
      console.log(res.data.user)
      dispatch({ type: UPDATE_USER, payload: res.data.user })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FAIL, error: err })
    })
}

export const deleteUser = id => dispatch => {
  dispatch({ type: USERS_START, message: `Deleting user` })

  const requestOptions = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .delete(`${baseURL}/api/users/addMember/${id}`, requestOptions)
    .then(res => {
      console.log(res)
      dispatch({ type: DELETE_USER, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FAIL, error: err })
    })
}

export const getInfoFromToken = () => dispatch => {
  dispatch({ type: USERS_START, message: `getting user info...` })

  const header = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .get(`${baseURL}/api/users/getInfoFromToken`, header)
    .then(res => {
      if (res.status == 200) {
        dispatch({ type: GET_INFO_FROM_TOKEN, payload: res.data })
        if (res.data.club) {
          dispatch(getUsersByClubId(res.data.club.id))
        }
      } else {
        dispatch({ type: FAIL_FROM_TOKEN })
      }
    })
    .catch(err => {
      dispatch({ type: FAIL_FROM_TOKEN })
      dispatch({ type: FAIL, error: err })
    })
}

export const memberSigned = (id, signature) => dispatch => {
  console.log('memberSigned() invoked in usersActions')
  dispatch({ type: USERS_START, message: `Member Signature` })

  const requestOptions = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .post(`${baseURL}/api/clubs/${id}/signature`, signature, requestOptions)
    .then(res => {
      console.log(res)
      dispatch({ type: MEMBER_SIGNED, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FAIL, error: err })
    })
}

export const getSubscription = () => dispatch => {
  dispatch({ type: USERS_START, message: `getting subscription info...` })

  const requestOptions = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }
  axios
    .get(`${baseURL}/api/payments/subInfo`, requestOptions)
    .then(res => {
      if (res.status == 200) {
        dispatch({ type: GET_SUBSCRIPTION_INFO, payload: res.data })
      } else {
        dispatch({ type: NO_SUBSCRIPTION })
      }
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const changeSubscription = body => dispatch => {
  dispatch({ type: USERS_START, message: `changing subscription...` })

  const auth = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .post(`${baseURL}/api/payments/updateSubscription`, body, auth)
    .then(res => {
      dispatch(getSubscription())
    })
    .catch(err => {
      dispatch({ type: CHANGE_SUB_FAIL })
    })
}

export const cancelFail = () => dispatch => {
  dispatch({ type: RESET_CHANGE_FAIL })
}

export const createSubscription = body => dispatch => {
  dispatch({ type: USERS_START, message: `creating subscription...` })

  let auth = {
    headers: {
      authorization: localStorage.getItem('access_token'),
    },
  }

  axios
    .post(`${baseURL}/api/payments/addSubscription`, body, auth)
    .then(res => {
      dispatch(getSubscription())
    })
    .catch(err => {
      dispatch({ type: FAIL, error: err })
    })
}

export const logOut = () => dispatch => {
  dispatch({ type: LOG_OUT })
}
