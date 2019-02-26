import React from 'react'
import '../users/Members.css'
import { AppBar } from '@material-ui/core'
import { connect } from 'react-redux'
import { memberSigned } from '../../store/actions/usersActions'

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

    const signature = this.state.signature
    this.props.memberSigned(this.props.id, signature)
  }
  render() {
    return (
      <div className="signature-page">
        <AppBar position="static">
          <div className="sign-header">
            <button>Cancel</button>
            <h1>Sign Handbook</h1>
          </div>
        </AppBar>
        <div className="sign-body">
          <p>
            I have read and will comply with the policies herin and any
            revisions made henceforth and forever
          </p>
        </div>
        <div className="sign-signature">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="signature"
              onChange={this.handleChanges}
              placeholder="Sign Here"
              value={this.state.signature}
            />
            <button>Sign</button>
          </form>
        </div>
      </div>
    )
  }
}

<<<<<<< HEAD
export default Signature
=======
const mapStateToProps = state => {
  return {
    id: state.auth.currentUser.id,
  }
}

export default connect(
  mapStateToProps,
  { memberSigned }
)(Signature)
>>>>>>> 307064f64eccc80e3d26d33f7f6475805389f04d
