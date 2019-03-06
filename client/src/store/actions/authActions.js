import axios from 'axios'
import Auth from '../../auth/Auth'

import AuthEmail from '../../auth/AuthEmail'
import { getInfoFromToken } from './usersActions'

export const AUTHORIZATION_START = 'AUTHORIZATION_START'
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS'
export const AUTHORIZATION_FAIL = 'AUTHORIZATION_FAIL'
export const LOGOUT_USER = 'LOGOUT_USER'

const baseURL = 'https://club-handbook.herokuapp.com'
// const baseURL = 'http://localhost:5000'

const auth = new Auth()

const authEmail = new AuthEmail()

export const signinUser = () => dispatch => {
  dispatch({ type: AUTHORIZATION_START, message: 'Starting authorization.' })

  // loads the auth0 lock widget > user signs up/logs in > route to Callback component
  // handleAuthorization action creator is invoked when Callback component mounts
  auth.login()
}

export const handleAuthorization = () => dispatch => {
  console.log('handleAuthorization() from authActions invoked')

  auth
    .handleAuthentication()
    .then(res => {
      const userObject = {
        accessToken: res.accessToken,
        idToken: res.idToken,
      }

      axios
        .post(`${baseURL}/api/users/register`, userObject)
        .then(res => {
          console.log(res)
          dispatch({
            type: AUTHORIZATION_SUCCESS,
            payload: res.data.user,
            message: 'User authorized.',
          })
        })
        .then(() => {
          dispatch(getInfoFromToken())
        })
        .catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: AUTHORIZATION_FAIL, message: 'User not authorized.' })
    })
}

export const logoutUser = () => dispatch => {
  auth.logout()
  dispatch({ type: LOGOUT_USER, message: 'User logged out.' })
}

export const handleAuthorizationEmail = () => dispatch => {
  console.log('handleAuthorizationEmail() from authActions invoked')

  authEmail
    .handleAuthentication()
    .then(res => {
      const userObject = {
        accessToken: res.accessToken,
        idToken: res.idToken,
      }

      axios
        .post(`${baseURL}/api/users/register-magiclink`, userObject)
        .then(res => {
          console.log(res)
          dispatch({
            type: AUTHORIZATION_SUCCESS,
            payload: res.data.user,
            message: 'User authorized.',
          })
        })
        .catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: AUTHORIZATION_FAIL, message: 'User not authorized.' })
    })
}
