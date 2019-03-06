import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { addUser } from '../../store/actions/usersActions'
import styled from 'styled-components'
import { size } from '../../style/breakpoints';

//#region STYLES
const SCWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  @media ${size.mobile} {
    display: none;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${size.tablet} {
    /* flex-direction: column; */
}
`;
const SCName = styled.input`
  width: 25%;
  margin-right: 0 10px;
  line-height: 1.2;
  border-radius: 3px;
  @media ${size.tablet} {
    /* width: 50%; */
}
`;
const SCEmail = styled.input`
  width: 35%;
  margin-right: 0 10px;
  line-height: 1.2;
  border-radius: 3px;
  @media ${size.tablet} {
    /* width: 50%; */
}
`;
const StyledButton = styled.button`
  color: #000000;
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-transform: uppercase;
  background-color: transparent;
  :hover {
    background-color: #384AA6;
    color: white;
    border: 1px solid #384AA6;
    cursor: pointer;
  }
  @media ${size.tablet} {
    width: 100px;
}
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
      email: this.state.email,
    }

    this.props.addUser(user)

    this.setState({
      firstname: '',
      lastname: '',
      email: '',
    });
    this.nameInput.focus();
  }

  render() {
    return (
      <SCWrapper>
       
        <Form onSubmit={this.handleSubmit}>
          <SCName
            type="text"
            name="firstname"
            onChange={this.handleChanges}
            placeholder="First Name"
            value={this.state.firstname}
            ref={(input) => { this.nameInput = input; }}
            required
            autofocus
          />

          <SCName
            type="text"
            name="lastname"
            onChange={this.handleChanges}
            placeholder="Last Name"
            value={this.state.lastname}
            required
          />

          <SCEmail
            type="text"
            name="email"
            onChange={this.handleChanges}
            placeholder="Email Address"
            value={this.state.email}
            required
          />
          {/* <Button>Add Member</Button> */}
          <StyledButton>ADD MEMBER</StyledButton>
        </Form>
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
