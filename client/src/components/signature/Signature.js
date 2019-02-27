import React from 'react'
import '../users/Members.css'
import { AppBar, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { memberSigned } from '../../store/actions/usersActions'

import { PageContainer, FormContainer } from '../../style/signature'

class Signature extends React.Component {
  constructor() {
    super()
    this.state = {
      signature: '',
    }
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const signature = this.state
    this.props.memberSigned(this.props.currentUser.club_id, signature)
  }
  render() {
    return (
      <PageContainer>
        <div className="signature-page">
          <AppBar position="static">
            <div className="sign-header">
              <Button>Cancel</Button>
              <h1>Sign Handbook</h1>
            </div>
          </AppBar>

          {/* <div className="sign-signature"> */}
          <FormContainer>
            <h6><strong>
              I have read and will comply with the policies herin and any
              revisions made henceforth and forever
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
          </FormContainer>
          {/* </div> */}
        </div>
      </PageContainer>
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
