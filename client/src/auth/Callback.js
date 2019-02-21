import React from 'react';
import { connect } from 'react-redux';
import { handleAuthorization } from '../store/actions/authActions';


class Callback extends React.Component {
    
    componentDidMount() {
        console.log('Callback Component mounted')
        
        this.props.handleAuthorization();
        this.props.history.push('/Dashboard')
    };

    render() {
        return (
            <div>Loading...</div>
        );
    };
};

export default connect(null, { handleAuthorization })(Callback);