import React from 'react';
import Auth from './Auth';

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

export default Authenticated;