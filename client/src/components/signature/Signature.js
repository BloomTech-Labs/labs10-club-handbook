import React from 'react'
import SignaturePad from 'react-signature-pad-wrapper'
import '../users/Members.css'
import { AppBar } from '@material-ui/core'

class Signature extends React.Component {
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
          <form>
            <input
              type="text"
              name="signature"
              // onChange={this.handleChanges}
              placeholder="Sign Here"
              // value={this.state.firstname}
            />
            <input
              type="date"
              name="date"
              // onChange={this.handleChanges}
              placeholder="Date"
              // value={this.state.firstname}
            />
            <button>Sign</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signature
