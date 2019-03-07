import React from 'react'
// import { AppBar } from '@material-ui/core'
import { connect } from 'react-redux'
import { updateUser, deleteUser } from '../../store/actions/usersActions'
import styled from 'styled-components';
import { size } from '../../style/breakpoints';
// import Button from '@material-ui/core/Button'

// const UpdateContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin-top: 5px;
// `;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* margin-bottom: 20px; */
  @media ${size.tablet} {

}
`;

const InputWrapper = styled.div`
  /* display: flex; */
  /* width: 100%; */
  margin-bottom: 15px;
  @media ${size.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const InputName = styled.input`
  margin-right: 1%;
  border-radius: 3px;
  width: 29%;
  line-height: 1.5;
  @media ${size.mobile} {
    width: 90%;
    margin-bottom: 10px;
  }
`;

const InputEmail = styled.input`
  margin-right: 1%;
  border-radius: 3px;
  width: 39%;
  line-height: 1.5;
  @media ${size.mobile} {
    width: 90%;
  }
`;

const ButtonWrapper = styled.div`
  
`;

const StyledButton = styled.button`
  width: 100px;
  color: #000000;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-transform: uppercase;
  padding: 10px 0;
  margin-right: 30px;
  :hover {
    background-color: orange;
    color: black;
    border: 1px solid #384AA6;
    cursor: pointer;
  }
  @media ${size.tablet} {
    width: 100px;
}
`;

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
      // <UpdateContainer>
        
        <Form onSubmit={this.handleSubmit}>

          <InputWrapper>
            <InputName
              type="text"
              name="firstname"
              onChange={this.handleChanges}
              placeholder="First Name"
              value={this.state.firstname}
            />

            <InputName
              type="text"
              name="lastname"
              onChange={this.handleChanges}
              placeholder="Last Name"
              value={this.state.lastname}
            />

            <InputEmail
              type="text"
              name="email"
              onChange={this.handleChanges}
              placeholder="Email Address"
              value={this.state.email}
            />
          </InputWrapper>

          <ButtonWrapper>
            <StyledButton type="submit">Update</StyledButton>
            {/* <Button color="inherit" variant="outlined" type="submit">Update</Button> */}
            <StyledButton onClick={this.handleDeleteClick}>Delete</StyledButton>
            {/* <Button color="inherit" variant="outlined" onClick={this.handleDeleteClick}>Delete</Button> */}
          </ButtonWrapper>

        </Form>

      // </UpdateContainer>
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
