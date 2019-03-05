import React from 'react'
import { AppBar } from '@material-ui/core'
import { connect } from 'react-redux'
import { updateUser, deleteUser } from '../../store/actions/usersActions'
import styled from 'styled-components';
import { size } from '../../style/breakpoints';
import Button from '@material-ui/core/Button'

const UpdateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  @media ${size.tablet} {
    flex-direction: column;
}
`;
const Input = styled.input`
  margin-right: 10px;
  border-radius: 3px;
`;
// const Button = styled.button`

// `;

class UpdateMembers extends React.Component {
  constructor(props) {
    super(props)
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
    event.stopPropagation();
    console.log('handleSubmit() invoked')

    const { userId } = this.props

    const userChanges = {};

    if (this.state.firstname.length > 0) userChanges.firstname = this.state.firstname;
    if (this.state.lastname.length > 0) userChanges.lastname = this.state.lastname;
    if (this.state.email.length > 0) userChanges.email = this.state.email;

    this.props.updateUser(userId, userChanges)

    this.setState({
      firstname: '',
      lastname: '',
      email: ''
    })
  }

  handleDeleteClick = event => {
    event.preventDefault()
    event.stopPropagation();
    console.log('handleDeleteClick() invoked')

    const { userId } = this.props

    this.props.deleteUser(userId)
  }

  render() {
    return (
      <UpdateContainer>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="firstname"
            onChange={this.handleChanges}
            placeholder="First Name"
            value={this.state.firstname}
          />

          <Input
            type="text"
            name="lastname"
            onChange={this.handleChanges}
            placeholder="Last Name"
            value={this.state.lastname}
          />

          <Input
            type="text"
            name="email"
            onChange={this.handleChanges}
            placeholder="Email Address"
            value={this.state.email}
          />
          {/* <Button type="submit">Update</Button> */}
          <Button color="inherit" variant="outlined" type="submit">Update</Button>
        </Form>
          {/* <Button onClick={this.handleDeleteClick}>Delete</Button> */}
          <Button color="inherit" variant="outlined" onClick={this.handleDeleteClick}>Delete</Button>
      </UpdateContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading,
    currentUser: state.auth.currentUser,
  }
}

export default connect(
  mapStateToProps,
  { updateUser, deleteUser }
)(UpdateMembers)
