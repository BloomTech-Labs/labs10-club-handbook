import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { addUser } from '../../store/actions/usersActions'
import styled from 'styled-components'
import { size } from '../../style/breakpoints'

//#region STYLES
const SCWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${size.mobile} {
    display: none;
  }
`
const StyledH6 = styled.h6`
  font-size: 2.5rem;
  /* color: white; */
  /* margin-bottom: 8px; */
  margin: 0 auto 20px;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${size.tablet} {
    /* flex-direction: column; */
  }
`
const SCName = styled.input`
  width: 25%;
  margin-right: 0 10px;
  line-height: 1.5;
  border-radius: 7px;
  padding: 0 10px;
  @media ${size.tablet} {
    /* width: 50%; */
  }
`
const SCEmail = styled.input`
  width: 35%;
  margin-right: 0 10px;
  line-height: 1.5;
  border-radius: 7px;
  padding: 0 10px;
  @media ${size.tablet} {
    /* width: 50%; */
  }
`
const StyledButton = styled.button`
  min-width: 100px;
  color: #000000;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  text-transform: uppercase;
  padding: 10px;

  :hover {
    /* background-color: orange; */
    color: black;
    border: 1px solid #384aa6;
    cursor: pointer;
    box-shadow: 0 0 15px 0 rgb(65, 65, 65) inset;
  }
  &:active {
    background: rgb(35, 35, 35);
    box-shadow: 0 0 15px 0 white inset;
    color: white;
  }
  @media ${size.tablet} {
    /* width: 100px; */
  }
`
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
    })
    this.nameInput.focus()
  }

  render() {
    return (
      <SCWrapper>
        <StyledH6>Add Some Members to Your Clique</StyledH6>
        <Form onSubmit={this.handleSubmit}>
          <SCName
            type="text"
            name="firstname"
            onChange={this.handleChanges}
            placeholder="First Name"
            value={this.state.firstname}
            ref={input => {
              this.nameInput = input
            }}
            required
            autoFocus
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
