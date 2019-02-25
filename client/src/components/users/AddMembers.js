import React from 'react'
import { AppBar } from '@material-ui/core'

import { connect } from 'react-redux'
import { addUser } from '../../store/actions/usersActions'
import styled from 'styled-components'

import './Members.css'

//#region STYLES
const SCWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  button {
    :hover {
      cursor: pointer;
    }
  }
`;

const SCName = styled.input`
  width: 25%;
  margin-right: 0 10px;
  line-height: 1.2;
`;

const SCEmail = styled.input`
  width: 35%;
  margin-right: 0 10px;
  line-height: 1.2;
`;
//#endregion

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

    this.setState({
      firstname: '',
      lastname: '',
      email: ''
    });
  }

  render() {
    return (
      <SCWrapper>
        {/* <AppBar position="static">
          <div className="members-header">
            <h1>Add Club Member</h1>
          </div>
        </AppBar> */}
        <form onSubmit={this.handleSubmit}>
          <SCName
            type="text"
            name="firstname"
            onChange={this.handleChanges}
            placeholder="First Name"
            value={this.state.firstname}
          />

          <SCName
            type="text"
            name="lastname"
            onChange={this.handleChanges}
            placeholder="Last Name"
            value={this.state.lastname}
          />

          <SCEmail
            type="text"
            name="email"
            onChange={this.handleChanges}
            placeholder="Email Address"
            value={this.state.email}
          />
          <button>Add Member</button>
        </form>
      </SCWrapper>
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
