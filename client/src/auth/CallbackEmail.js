import React from 'react'
import { connect } from 'react-redux'
import { handleAuthorizationEmail } from '../store/actions/authActions'

class CallbackEmail extends React.Component {
  componentDidMount() {
    console.log('CallbackEmail Component mounted')

    this.props.handleAuthorizationEmail()

    // this.props.history.push('/handbook/member-view')
  }

  componentDidUpdate() {
    if (this.props.userLoggedIn) {
      this.props.history.push('/handbook/member-view')
    }
  }

  render() {
    return <div>Loading...</div>
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.auth.userLoggedIn,
  }
}

export default connect(
  mapStateToProps,
  { handleAuthorizationEmail }
)(CallbackEmail)
