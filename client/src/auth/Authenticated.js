import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';

const auth = new Auth();

class Authenticated extends React.Component {
    state = {
        email: ''
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    emailSubmitHandler = e => {
        e.preventDefault();
        auth.sendEmail(this.state.email);
    }
    
    logoutUser = () => {
        auth.logout();
        this.props.history.push('/login');
    };

    render() {
        return (
            <div>
                <h2>You've been authenticated! Yaaaahhhh!</h2>
                <button onClick={this.logoutUser}>Logout</button>
                <form onSubmit={this.emailSubmitHandler}>
                    <input
                        onChange={this.handleInputChange}
                        type="email"
                        name="email"
                        placeholder="email address"
                        value={this.state.email}
                    />
                    <button type="submit">Send Email</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { logoutUser })(Authenticated);