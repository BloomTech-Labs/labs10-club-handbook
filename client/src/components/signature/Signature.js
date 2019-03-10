import React from 'react'
import '../users/Members.css'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { memberSigned } from '../../store/actions/usersActions'
import styled from 'styled-components';
import { size } from '../../style/breakpoints'

const SContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 20;
`;

const SignatureContainer = styled.div`
  width: 400px;
  margin-top: 100px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0 1px 10px gray;
  z-index: 20;
  background: white;
  @media ${size.mobile} {
    width: 95%;
  }
`

const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  input {
    width: 80%;
    line-height: 1.5;
  }
`;

const Notification = styled.div`
  color: red;
  margin: 20px 0 0 0;
`;

class Signature extends React.Component {
  constructor() {
    super()
    this.state = {
      signature: '',
      signatureStatus: false,
      showSignature: false
    }
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const signature = this.state
    this.props.memberSigned(this.props.currentUser.club_id, signature)
    this.signatureConfirmation();
  }

  signatureConfirmation = () => {
    if (this.state.signature.length > 0) {
      this.setState({ signatureStatus: true })
    }
    
    setTimeout(
      function() {
          this.setState({signatureStatus: false});
      }
      .bind(this),
      2000
    );
  }

  render() {
    return (
      <SContainer>
        <SignatureContainer>
            <p>I have read the document and agree to the terms as currently stated in the document and any changes in the future.</p>
            
            <Form onSubmit={this.handleSubmit}>
                <input type="text" name="signature" onChange={this.handleChanges} placeholder="Enter your full name" value={this.state.signature} />
                <Button type="submit">Sign</Button>
              </Form>

            <Notification>{this.state.signatureStatus === true && 'Signature submited!'}</Notification>
        </SignatureContainer>
      </SContainer>
    )
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
