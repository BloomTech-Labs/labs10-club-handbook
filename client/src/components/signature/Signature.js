import React from 'react'
import '../users/Members.css'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { memberSigned } from '../../store/actions/usersActions'
import styled from 'styled-components';
import { size } from '../../style/breakpoints'

const SignatureContainer = styled.div`
  width: 500px;
  position: fixed;
  left: 230px;
  top: 75px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0 1px 10px gray;
  z-index: 10;
  background: white;
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
      <SignatureContainer>
          <p>I have read the document and agree to the terms as currently stated in the document and any changes in the future.</p>
          
          <Form onSubmit={this.handleSubmit}>
              <input type="text" name="signature" onChange={this.handleChanges} placeholder="Enter your full name" value={this.state.signature} />
              <Button type="submit">Sign</Button>
            </Form>

          <Notification>{this.state.signatureStatus === true && 'Signature submited!'}</Notification>
      </SignatureContainer>
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
