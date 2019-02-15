import React from 'react';
import Auth from './Auth';


class Callback extends React.Component {
    componentDidMount() {
        console.log('Callback!!!!!')
        const auth = new Auth();
        auth.handleAuthentication();
        
        this.props.history.push('/authenticated')
    }

    render() {
        return (
            <div>Loading...</div>
        )
    }
}

export default Callback;