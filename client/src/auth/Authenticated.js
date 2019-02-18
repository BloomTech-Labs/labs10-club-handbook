import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';

const auth = new Auth();

class Authenticated extends React.Component {

    logoutUser = () => {
        auth.logout();
        this.props.history.push('/login');
    };

    render() {
        return (
            <div>
                <h2>You've been authenticated! Yaaaahhhh!</h2>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        )
    }
}

export default connect(null, { logoutUser })(Authenticated);