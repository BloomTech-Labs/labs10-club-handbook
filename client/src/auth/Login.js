import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { signinUser } from '../store/actions/authActions';

const StyledButton = styled.div`
    border: 1px solid white;
    border-radius: 3px;
    width: 160px;
    text-align: center;
    padding: 10px;
    background: lightgrey;
    color: black;
    :hover {
        background: darkgrey;
        color: white;
        cursor: pointer;
    }
`;

class Login extends React.Component {

    handleSubmit = event => {
        console.log('handleSubmit button clicked');
        this.props.signinUser();
    };

    render() {
        return (
            <>
                <StyledButton onClick={this.handleSubmit}>Login | Register</StyledButton>
            </>
        )
    }
};

export default connect(null, { signinUser })(Login);