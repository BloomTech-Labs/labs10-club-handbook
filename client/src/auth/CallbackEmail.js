import React from 'react'
import { connect } from 'react-redux'
import { handleAuthorizationEmail } from '../store/actions/authActions'

class CallbackEmail extends React.Component {
  componentDidMount() {
    console.log('CallbackEmail Component mounted')

    this.props.handleAuthorizationEmail()

    // Need to update this route to redirect the user of the handbook they need to see!
    this.props.history.push('/Dashboard')
  }

  render() {
    return <div>Loading...</div>
  }
}

export default connect(
  null,
  { handleAuthorizationEmail }
)(CallbackEmail)
