import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../store/actions/usersActions'
import styled from 'styled-components'
import { size } from '../../style/breakpoints'

//#region STYLES
const SCWrapper = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  background: rgb(55, 55, 55);
  min-height: 100vh;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
`
const SCName = styled.input`
  width: 75%;
  line-height: 1.2;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 2px 6px;
`
const SCEmail = styled.input`
  width: 75%;
  line-height: 1.2;
  border-radius: 7px;
  padding: 2px 6px;
`
const StyledButton = styled.button`
  width: 100px;
  color: #000000;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  text-transform: uppercase;
  padding: 10px 0;

  :hover {
    /* background-color: orange; */
    color: black;
    border: 1px solid #384aa6;
    color: #384aa6;
    cursor: pointer;
    box-shadow: 0 0 10px 3px #384aa6 inset;
  }
  &:active {
    background: #384aa6;
    box-shadow: 0 0 10px 2px white inset;
    color: white;
  }
  @media ${size.tablet} {
    /* width: 100px; */
  }
`
const HeaderBar = styled.div`
  width: 100%;
  margin-top: 20px;
  /* background: #3648ac; */
  font-size: 35px;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
`
//#endregion

class AddMembersMobile extends React.Component {
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
    this.props.history.push('/clique/members')
  }

  render() {
    return (
      <SCWrapper>
        <HeaderBar>
          <StyledButton
            onClick={() => this.props.history.push('/clique/members')}
          >
            BACK
          </StyledButton>
          <StyledButton onClick={this.handleSubmit}>ADD MEMBER</StyledButton>
        </HeaderBar>
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
)(AddMembersMobile)
