import React from 'react'
import { connect } from 'react-redux'
import AuthEmail from '../../auth/AuthEmail';
import styled from 'styled-components';

// #region Styled Components
const SContainer = styled.div`
  background: lightgrey;
  border: 1px solid black;
  width: 700px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -350px;
  z-index: 10;
`;

const ContentContainer = styled.div`
  padding: 10%;

  h2 {
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 30px;
  }

  input {
    width: 50%;
  }

  button {
    margin-left: 5%;
    border-radius: 4%;
    font-size: 1.6rem;
    :hover {
      cursor: pointer;
      background: darkgrey;
      color: white;
    }
  }
`;


// #endregion

const authEmail = new AuthEmail()

class MagicLinkRequest extends React.Component {
  state = {
    email: '',
    emailStatus: false,
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    authEmail.sendEmail(this.state.email)
  }

  render() {
    return (
      <SContainer>
        <ContentContainer>
          <h2>To access this handbook you must sign in</h2>

          <p>
            Enter your email address below. We will send an email to you with a
            link. Clicking that link we authorize you to see this handbook and
            redirect you back to the handbook where you can view and sign it.
          </p>

          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={this.handleChanges}
              placeholder="Email Address"
              value={this.props.email}
            />
            <button type="submit">Send Magic Link</button>
            <p>{this.state.emailStatus === true && 'email sent!'}</p>
          </form>
        </ContentContainer>
      </SContainer>
    )
  }
}

export default MagicLinkRequest
