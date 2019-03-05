import React from 'react'
import { connect } from 'react-redux'
import AuthEmail from '../../auth/AuthEmail'
import styled from 'styled-components'

// #region Styled Components
const SContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(75, 75, 75, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  padding: 20px;
  background: linear-gradient(to right, rgb(65, 82, 179), rgb(78, 98, 215));
  max-width: 700px;
  border-radius: 10px;
  color: white;
  h2 {
    margin: 0;
    margin-bottom: 30px;
  }
  p {
    margin: 0;
    margin-bottom: 30px;
    font-size: 16px;
  }
  input {
    width: 70%;
    max-width: 400px;
    padding: 4px;
  }
  button {
    margin-left: 10px;
    border-radius: 5px;
    font-size: 1.6rem;
    border: 2px solid rgb(65, 82, 179);
    box-shadow: 0 0 5px 5px rgba(65, 82, 179, 0.5) inset;
    background: white;
    color: rgb(65, 82, 179);
    font-weight: bold;
    padding: 8px 10px;
    &:hover {
      cursor: pointer;
      background: rgb(65, 82, 179);
      color: white;
      box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5) inset;
    }
    &:active {
      box-shadow: 0 0 5px 5px rgba(40, 40, 40, 0.5) inset;
      color: black;
      border: 2px solid black;
    }
  }
`

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
            <button type="submit">Send Link</button>
            <p>{this.state.emailStatus === true && 'email sent!'}</p>
          </form>
        </ContentContainer>
      </SContainer>
    )
  }
}

export default MagicLinkRequest