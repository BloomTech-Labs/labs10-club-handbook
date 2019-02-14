import React from 'react';
import Auth from './Auth';

const auth = new Auth();

class Login extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <h2>Hello, please login or register</h2>
                </div>
                <div>
                    <button onClick={auth.login}>Login/Register</button>
                </div>
            </div>
        )
    }
};

export default Login;