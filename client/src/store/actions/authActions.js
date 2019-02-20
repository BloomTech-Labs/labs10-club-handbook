import axios from 'axios'
import Auth from '../../auth/Auth'

import AuthEmail from '../../auth/AuthEmail'

export const AUTHORIZATION_START = 'AUTHORIZATION_START'
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS'
export const AUTHORIZATION_FAIL = 'AUTHORIZATION_FAIL'
export const LOGOUT_USER = 'LOGOUT_USER'

const auth = new Auth()

const authEmail = new AuthEmail()

export const signinUser = () => dispatch => {
  dispatch({ type: AUTHORIZATION_START, message: 'Starting authorization.' })

  // loads the auth0 lock widget > user signs up/logs in > route to Callback component
  // handleAuthorization action creator is invoked when Callback component mounts
  auth.login()
}

export const handleAuthorization = () => dispatch => {
  auth
    .handleAuthentication()
    .then(res => {
      dispatch({ type: AUTHORIZATION_SUCCESS, message: 'User authorized.' })

      const userObject = {
        accessToken: res.accessToken,
        idToken: res.idToken,
      }

      axios

        // .post(`http://localhost:5000/api/users/register`, userObject)

        .post(
          `https://club-handbook.herokuapp.com/api/users/register`,
          userObject
        )
        .then(res => {
          console.log(res)
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
      console.log('authEmail.handleAuthentication() from authActions invoked')

      dispatch({ type: AUTHORIZATION_SUCCESS, message: 'User authorized.' })

      const userObject = {
        accessToken: res.accessToken,
        idToken: res.idToken,
      }

      axios
        // .post('http://localhost:5000/api/users/register-magiclink', userObject)
        .post(
          `https://club-handbook.herokuapp.com/api/users/register-magiclink`,
          userObject
        )
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: AUTHORIZATION_FAIL, message: 'User not authorized.' })
    })
}
