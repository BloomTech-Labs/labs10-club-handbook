import React from 'react'
import { connect } from 'react-redux'
import AuthEmail from '../../auth/AuthEmail'
import styled from 'styled-components'
import { size } from '../../style/breakpoints'
import logo from '../../logos/Cliquebook_combo.png'

// #region Styled Components
const SContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(150, 150, 150, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    position: absolute;
    top: 60px;
    margin: auto;
    z-index: 2;

    @media (max-width: 500px) {
      top: 20px;
      height: 100px;
    }
  }
`

const ContentContainer = styled.div`
  padding: 20px;
  background: linear-gradient(
    to right,
    rgba(82, 157, 248, 0.9),
    rgba(78, 98, 215, 0.9)
  );
  max-width: 700px;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  h2 {
    margin: 20px 0 30px;
    text-align: center;
  }
  p {
    display: ${props => (props.visible === true ? 'block' : 'none')};
    margin-top: 10px;
    color: orange;
    border: 1px solid red;
  }
  form {
    /* margin: 30px 0; */
    width: 100%;
    display: flex;
    justify-content: center;
  }
  input {
    width: 70%;
    max-width: 400px;
    padding: 4px;
  }
  li {
    margin-bottom: 15px;
  }
  span {
    font-style: italic;
  }
  button {
    margin-left: 30px;
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
const EmailSent = styled.div`
  visibility: ${props => (props.visible === true ? 'visible' : 'hidden')};
  margin-top: 50px;
  color: orange;
  align-self: flex-start;
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

    this.setState({
      emailStatus: true,
    })
  }

  render() {
    return (
      <SContainer>
        <img src={logo} />
        <ContentContainer>
          <h2>You must sign in to access your Clique Book</h2>

          <ol>
            <li>
              Enter your email address and click <span>Send Link</span>. We will
              send an email to you with a link.
            </li>
            <li>Clicking that link will redirect you back here.</li>
            <li>
              Then you'll be able to read and digitally sign off on your Clique
              Book!
            </li>
          </ol>

          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={this.handleChanges}
              placeholder="Email Address"
              value={this.props.email}
              required
              autoFocus
            />
            <button type="submit">Send Link</button>
          </form>
          <EmailSent visible={this.state.emailStatus}>
            Link sent! Check your email inbox.
          </EmailSent>
        </ContentContainer>
      </SContainer>
    )
  }
}

export default MagicLinkRequest
