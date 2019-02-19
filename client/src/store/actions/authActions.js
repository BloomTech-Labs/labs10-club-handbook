import axios from 'axios'
import Auth from '../../auth/Auth'

export const AUTHORIZATION_START = 'AUTHORIZATION_START'
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS'
export const AUTHORIZATION_FAIL = 'AUTHORIZATION_FAIL'
export const LOGOUT_USER = 'LOGOUT_USER'

const auth = new Auth()

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
        email: res.idTokenPayload.email,
        accessToken: res.accessToken,
        idToken: res.idToken,
      }

      axios
        // .post(`https://club-handbook.herokuapp.com/api/users/register`, userObject)
        .post(`http://localhost:5000/api/users/register`, userObject)
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
