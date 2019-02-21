import React from 'react'
import { connect } from 'react-redux'
import AuthEmail from '../../auth/AuthEmail';

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
      <div>
        <h2>To access this handbook you must sign in</h2>

        <p>
          Enter your email address below. We will send an email to you with a
          link. Clicking that link we authorize you to see this handbook and
          redirect you back to this page
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
      </div>
    )
  }
}

export default MagicLinkRequest
