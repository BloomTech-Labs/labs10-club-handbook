import auth0 from 'auth0-js'
import jwtDecode from 'jwt-decode'

class Auth {
  // accessToken;
  // idToken;
  // expiresAt;
  auth0 = new auth0.WebAuth({
    domain: 'club-handbook.auth0.com',
    clientID: 'LL5WL3YD7vxOZ5tw5yMDmtQb2QxRpTkU',
    redirectUri: "https://clubhandbook.netlify.com/callback",
    // redirectUri: 'http://localhost:3000/callback',
    audience: 'https://club-handbook.herokuapp.com/',
    responseType: 'token id_token',
    scope: 'openid profile email',
  })

  login = () => {
    this.auth0.authorize()
  }

  handleAuthentication = () => {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResults) => {
        if (authResults && authResults.accessToken && authResults.idToken) {
          console.log('handleAuthentication() invoked from Auth.js')

          let expiresAt = JSON.stringify(
            authResults.expiresIn * 1000 + new Date().getTime()
          )

          localStorage.setItem('access_token', authResults.accessToken)
          localStorage.setItem('id_token', authResults.idToken)
          localStorage.setItem('expires_at', expiresAt)

          console.log(authResults)

          resolve(authResults)
        } else if (err) {
          reject(err)
        }
      })
    })
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
  }

  getProfile = () => {
    if (localStorage.getItem('id_token')) {
      console.log(jwtDecode(localStorage.getItem('id_token')))
      return jwtDecode(localStorage.getItem('id_token'))
    } else {
      return {}
    }
  }

  // sendEmail = emailAddress => {
  //   console.log('sendEmail from Auth.js invoked');

  //   this.auth0.passwordlessStart({ connection: 'email', send: 'link', email: emailAddress }, (err, res) => {
  //     console.log(err);
  //   })
  // }
}

export default Auth
