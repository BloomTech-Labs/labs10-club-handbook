import React from 'react'
import { connect } from 'react-redux'
import { handleAuthorizationEmail } from '../store/actions/authActions'
import LoadingPage from '../components/loading/loading'

class CallbackEmail extends React.Component {
  componentDidMount() {
    console.log('CallbackEmail Component mounted')

    this.props.handleAuthorizationEmail()

    this.props.history.push('/handbook/member-view')
  }

  // componentDidUpdate() {
  //   if (this.props.userLoggedIn) {
  //     this.props.history.push('/handbook/member-view')
  //   } else {
  //     this.props.history.push('/handbook/member-view')
  //   }
  // }

  render() {
    return <LoadingPage />
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.auth.userLoggedIn,
    error: state.auth.error,
  }
}

export default connect(
  mapStateToProps,
  { handleAuthorizationEmail }
)(CallbackEmail)
