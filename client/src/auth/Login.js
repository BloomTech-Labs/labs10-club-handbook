import React from 'react';
// import Auth from './Auth';
import { connect } from 'react-redux';
import { signinUser } from '../store/actions/authActions';

// const auth = new Auth();

class Login extends React.Component {

    handleSubmit = event => {
        console.log('handleSubmit button clicked');
        this.props.signinUser();
    };

    render() {
        return (
            <div>
                <div>
                    <h2>Hello, please login or register</h2>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Login/Register</button>
                </div>
            </div>
        )
    }
};

export default connect(null, { signinUser })(Login);