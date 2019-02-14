/* eslint no-restricted-globals: 0 */

import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

class Auth {
    // initialzing Auth0. These are properties that can be found on auth0 webpage.
    auth0 = new auth0.WebAuth({
        domain: "dev-6n5bufcg.auth0.com",
        clientID: "F0bq6WjQXm4UjZeR6ysqG3DSdvi0sfKo",
        redirectUri: "http://localhost:3000/callback", // where the user is redirected after the authentication is done???
        // audience: "https://dev-6n5bufcg.auth0.com/userinfo", // endpoint to get some user information???
        audience: "https://club-handbook.herokuapp.com/", // inserted this audience so that the Access Token returned is a full JWT
        responseType: "token id_token", 
        scope: "openid profile" 
    });

    constructor() {
        this.login = this.login.bind(this); // Ensure our login is binded to the correct context.
    };

    login() {
        this.auth0.authorize(); // This method takes care of redirecting our users to an Auth0 login page.
    };

    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            console.log(authResults);

            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                localStorage.setItem("isLoggedIn", "true");
                // location.hash = "";
                // location.pathname = "/authenticated"; // *** Replace this with where we want to route the user after successfully logging in ***
            } else {
                // location.pathname = LOGIN_FAILURE_PAGE; // *** Replace this with where we want to route the user if login failed ***
                console.log(err);
            };
        })
    };

    // Checks for the "expires_at" key in localStorage. Returns TRUE if CURRENT TIME < expires_at.
    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    };

    // Removes all localStorage that was set by handleAuthentication().
    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        // location.pathname = LOGIN_FAILURE_PAGE; // ***Need to replace this to where we want to route the user after login***
    };

    // If an "id_token" is available on localStorage, this returns the decoded information.
    getProfile() {
        if (localStorage.getItem("id_token")) {
            console.log(jwtDecode(localStorage.getItem("id_token")));
            return jwtDecode(localStorage.getItem("id_token"));
        } else {
            return {};
        }
    };

};

export default Auth;