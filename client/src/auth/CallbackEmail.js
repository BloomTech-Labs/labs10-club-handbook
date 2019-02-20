import React from 'react'
import { connect } from 'react-redux'
import { handleAuthorizationEmail } from '../store/actions/authActions'

class CallbackEmail extends React.Component {
  componentDidMount() {
    console.log('CallbackEmail Component mounted')

    this.props.handleAuthorizationEmail()
    this.props.history.push('/authenticated')
  }

  render() {
    return <div>Loading...</div>
  }
}

export default connect(
  null,
  { handleAuthorizationEmail }
)(CallbackEmail)
