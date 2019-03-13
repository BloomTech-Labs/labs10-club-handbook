import React from 'react'
import '../users/Members.css'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { memberSigned } from '../../store/actions/usersActions'
import styled from 'styled-components'
import { size } from '../../style/breakpoints'

const SContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 20;
  background: rgba(150, 150, 150, 0.5);
`

const SignatureContainer = styled.div`
  width: 400px;
  max-width: 100vw;
  margin-top: 100px;
  padding: 20px;
  border: 2px solid rgb(68, 125, 197);
  border-radius: 5px;
  box-shadow: 0 1px 10px gray;
  z-index: 20;
  background: linear-gradient(to right, rgb(82, 157, 248), rgb(66, 126, 199));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  margin-left: 0;
  @media ${size.mobile} {
    /* width: 95%; */
  }

  h2 {
    margin-bottom: 15px;
  }
`

const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  input {
    width: 100%;
    line-height: 1.5;
    padding: 0px 5px;
    border-radius: 5px;
  }

  button {
    padding: 5px 15px;
    background: rgb(65, 82, 179);
    color: white;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background: rgb(65, 82, 179);
      color: white;
      box-shadow: 0 0 4px 3px rgb(255, 255, 255, 0.5) inset;
      border: 2px solid white;
    }
    &:active {
      color: rgb(65, 82, 179);
      background: white;
      box-shadow: 0 0 10px 0 rgb(65, 82, 179) inset;
    }
  }
  .button-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
  }
`

const Notification = styled.div`
  color: red;
  margin: 20px 0 0 0;
`

class Signature extends React.Component {
  constructor() {
    super()
    this.state = {
      signature: '',
      signatureStatus: false,
      showSignature: false,
    }
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const signature = this.state
    this.props.memberSigned(this.props.currentUser.club_id, signature)
    this.signatureConfirmation()
  }

  signatureConfirmation = () => {
    if (this.state.signature.length > 0) {
      this.setState({ signatureStatus: true })
    }

    setTimeout(
      function() {
        this.setState({ signatureStatus: false })
      }.bind(this),
      2000
    )
  }

  render() {
    if (this.props.signed === false) {
      return (
        <SContainer>
          <SignatureContainer>
            <h2>Sign the Book</h2>
            <p>
              I have read the document and agree to the terms as currently
              stated in the document and any changes in the future.
            </p>

            <Form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="signature"
                onChange={this.handleChanges}
                placeholder="Enter your full name"
                value={this.state.signature}
              />
              <div className="button-wrapper">
                <button
                  type="button"
                  className="close-btn"
                  onClick={this.props.showSignature}
                >
                  Close
                </button>
                <button type="submit">Sign</button>
              </div>
            </Form>

            <Notification>
              {this.state.signatureStatus === true && 'Signature submited!'}
            </Notification>
          </SignatureContainer>
        </SContainer>
      )
    } else {
      return (
        <SContainer>
          <SignatureContainer>
            <p>You have signed the CliqueBook!</p>
            <Form>
              <div className="button-wrapper">
                <button onClick={this.props.showSignature}>Close</button>
              </div>
            </Form>
          </SignatureContainer>
        </SContainer>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default connect(
  mapStateToProps,
  { memberSigned }
)(Signature)
