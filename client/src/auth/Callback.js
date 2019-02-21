import React from 'react'
import { connect } from 'react-redux'
import { handleAuthorization } from '../store/actions/authActions'

class Callback extends React.Component {
  componentDidMount() {
    console.log('Callback Component mounted')

    this.props.handleAuthorization()
  }

  componentDidUpdate() {
    if (this.props.userLoggedIn) {
      this.props.history.push('/handbook')
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
  { handleAuthorization }
)(Callback)
