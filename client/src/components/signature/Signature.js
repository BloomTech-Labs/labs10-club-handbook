import React from 'react'
import '../users/Members.css'
import { AppBar, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { memberSigned } from '../../store/actions/usersActions'

import { SignatureContainer, FormContainer } from '../../style/signature'
import styled from 'styled-components';
import { size } from '../../style/breakpoints'

const SCHeader = styled.div`
  display: flex;
  justify-content: center;
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

  showSignatureComponent = () => {
    this.setState(prevState => ({
      showSignature: !prevState.showSignature
    }))
  }

  render() {
    return (
      <SignatureContainer>
        <SCHeader onClick={this.showSignatureComponent}>
          <h3>Ready to sign the handbook?</h3>
        </SCHeader>
        <FormContainer visible={this.state.showSignature}>
          <h6><strong>
              I have read and will comply with the policies herin and any
              revisions made henceforth and forever.
              </strong></h6>
          <br />
          <p>
              Failure to sign this manual may result in your being expunged from
              the club, orgainization, or click. If you can't follow through,
              then you're just not made of the stuff we're looking for. Dig it?
            </p>
          <br />
          <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="signature"
                onChange={this.handleChanges}
                placeholder="Sign Here"
                value={this.state.signature}
              />
              <Button type="submit">Sign</Button>
            </form>
          <Notification>{this.state.signatureStatus === true && 'Signature submited!'}</Notification>
        </FormContainer>
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
