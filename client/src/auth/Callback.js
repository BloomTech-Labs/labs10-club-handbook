import React from 'react';
import { connect } from 'react-redux';
import { handleAuthorization } from '../store/actions/authActions';


class Callback extends React.Component {
    
    componentDidMount() {
        this.props.handleAuthorization();
        this.props.history.push('/authenticated')
    };

    render() {
        return (
            <div>Loading...</div>
        );
    };
};

export default connect(null, { handleAuthorization })(Callback);