import React from 'react'
import { connect } from 'react-redux'
import { handleAuthorization } from '../store/actions/authActions'
import LoadingPage from '../components/loading/loading'

class Callback extends React.Component {
  componentDidMount() {
    console.log('Callback Component mounted')

    this.props.handleAuthorization()
  }

  componentDidUpdate() {
    if (this.props.userLoggedIn) {
      if (this.props.currentUser.club_id && !this.props.currentUser.admin) {
        this.props.history.push('/handbook/member-view')
      } else {
        this.props.history.push('/clique/handbook')
      }
    }
  }

  render() {
    return <LoadingPage />
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.auth.userLoggedIn,
    currentUser: state.auth.currentUser,
  }
}

export default connect(
  mapStateToProps,
  { handleAuthorization }
)(Callback)
