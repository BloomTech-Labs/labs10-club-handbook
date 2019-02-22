import React from 'react'
import { AppBar } from '@material-ui/core'

import { connect } from 'react-redux'
import { addUser } from '../../store/actions/usersActions'

import './Members.css'

class AddMembers extends React.Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
    }
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    }

    this.props.addUser(user)

    this.props.history.push('/members')
  }

  render() {
    // console.log('got to render')
    return (
      <div className="members-container">
        <AppBar position="static">
          <div className="members-header">
            <h1>Add Club Member</h1>
          </div>
        </AppBar>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstname"
            onChange={this.handleChanges}
            placeholder="firstname"
            value={this.state.firstname}
          />

          <input
            type="text"
            name="lastname"
            onChange={this.handleChanges}
            placeholder="lastname"
            value={this.state.lastname}
          />

          <input
            type="text"
            name="email"
            onChange={this.handleChanges}
            placeholder="email"
            value={this.state.email}
          />
          <button>Add New Club Member</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading,
  }
}

export default connect(
  mapStateToProps,
  { addUser }
)(AddMembers)
