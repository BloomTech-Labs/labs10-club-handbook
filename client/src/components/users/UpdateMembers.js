import React from 'react'
import { AppBar } from '@material-ui/core'

import { connect } from 'react-redux'
import { updateUser } from '../../store/actions/usersActions'

import './Members.css'

class UpdateMembers extends React.Component {
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
    
    const userId = this.props.match.params.id;

    const userInfo = {};

    if (this.state.firstname.length > 0) userInfo.firstname = this.state.firstname;
    if (this.state.lastname.length > 0) userInfo.lastname = this.state.lastname;
    if (this.state.email.length > 0) userInfo.email = this.state.email;

    this.props.updateUser(userId, userInfo)
  }

  render() {
    return (
      <div className="members-container">
        <AppBar position="static">
          <div className="members-header">
            <h1>Update Club Member Info</h1>
          </div>
        </AppBar>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstname"
            onChange={this.handleChanges}
            placeholder="firstname"
            value={this.props.firstname}
          />

          <input
            type="text"
            name="lastname"
            onChange={this.handleChanges}
            placeholder="lastname"
            value={this.props.lastname}
          />

          <input
            type="text"
            name="email"
            onChange={this.handleChanges}
            placeholder="email"
            value={this.props.email}
          />
          <button>Update Club Member Info</button>
        </form>
        <button>Delete Club Member</button>
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
  { updateUser }
)(UpdateMembers)
