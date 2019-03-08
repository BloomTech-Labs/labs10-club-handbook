import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../store/actions/usersActions'
import styled from 'styled-components'
import { size } from '../../style/breakpoints';

//#region STYLES
const SCWrapper = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  margin-top: 70px;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
`;
const SCName = styled.input`
  width: 75%;
  line-height: 1.2;
  border-radius: 3px;
  margin-bottom: 10px;
`;
const SCEmail = styled.input`
  width: 75%;
  line-height: 1.2;
  border-radius: 3px;
`;
const StyledButton = styled.button`
  color: #000000;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-transform: uppercase;
  background-color: white;
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
const HeaderBar = styled.div`
  width: 100%;
  background: #3648AC;
  font-size: 35px;
  color: #FFFFFF;
  text-align: center;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;
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
    });
    this.nameInput.focus();
  }

  render() {
    return (
      <SCWrapper>
        <HeaderBar>
          <StyledButton onClick={() => this.props.history.push('/clique/members')}>BACK</StyledButton>
          <StyledButton onClick={this.handleSubmit}>ADD MEMBER</StyledButton>
        </HeaderBar>
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