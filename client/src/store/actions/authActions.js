import axios from 'axios';

export const START = 'START';
export const FAIL = 'FAIL';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

export const login = userInfo => dispatch => {
   dispatch({ type: START, message: 'Logging in.' });

   axios
      .post(`https://club-handbook.herokuapp.com/api/users/login`, userInfo)
      .then(res => {
         localStorage.setItem('token', res.data.token);

         dispatch({ type: LOGIN, payload: res.data });
      })
      .catch(err => {
         dispatch({ type: FAIL, error: err });
      });
};

export const register = userInfo => dispatch => {
   dispatch({ type: START, message: 'New user is registering.' });

   axios
      .post(`https://club-handbook.herokuapp.com/api/users/register`, userInfo)
      .then(res => {
         localStorage.setItem('token', res.data.token);
         dispatch({ type: REGISTER, payload: res.data });
      })
      .catch(err => {
         dispatch({ type: FAIL, error: err });
      });
};

export const logout = () => {
   localStorage.removeItem('token');
   return { type: LOGOUT };
};
