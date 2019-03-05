import React from 'react'
import { connect } from 'react-redux'
import AuthEmail from '../../auth/AuthEmail';
import styled from 'styled-components';
import { size } from '../../style/breakpoints'

// #region Styled Components
const H2 = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;
const P = styled.p`
  margin-bottom: 30px;
`;
const Form = styled.form`
  display: flex;
  @media ${size.tablet} {
    flex-direction: column;
}
`;
const Input = styled.input`
  width: 50%;
  @media ${size.tablet} {
    width: 80%;
}
`;
const Button = styled.button`
  margin-left: 5%;
    border-radius: 4%;
    font-size: 1.6rem;
    :hover {
      cursor: pointer;
      background: darkgrey;
      color: white;
    }
    @media ${size.tablet} {
    width: 150px;
    margin: 10px 0 0 0;
  }
`;
const SContainer = styled.div`
  background: lightgrey;
  border: 1px solid black;
  max-width: 700px;
  width: 75%;
  z-index: 10;
  margin: 30px auto;
  /* position: fixed; */
  /* top: 50%; */
  /* left: 50%; */
  /* margin-top: -150px; */
  /* margin-left: -350px; */
`;
const ContentContainer = styled.div`
  padding: 10%;
`;
const Notification = styled.div`
  color: red;
  margin: 20px 0 0 0;
`;
// #endregion

const authEmail = new AuthEmail()

class MagicLinkRequest extends React.Component {
  state = {
    email: '',
    emailStatus: false,
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  emailSentConfirmation = () => {
    if (this.state.email.length > 0 && this.state.email.includes('@')) {
      this.setState({ emailStatus: true })
    }
    
    setTimeout(
      function() {
          this.setState({emailStatus: false});
      }
      .bind(this),
      2000
    );
  }

  handleSubmit = event => {
    event.preventDefault()
    authEmail.sendEmail(this.state.email)
    this.setState({ email: '' })
    this.emailSentConfirmation()
  }

  render() {
    return (
      <SContainer>
        <ContentContainer>
          <H2>Sign in to view this handbook</H2>

          <P>
            Enter your email address below. We will send an email to you with a
            link. Clicking that link we authorize you to see this handbook and
            redirect you back to the handbook where you can view and sign it.
          </P>

          <Form onSubmit={this.handleSubmit}>
            <Input
              type="email"
              name="email"
              onChange={this.handleChanges}
              placeholder="Email Address"
              value={this.state.email}
            />
            <Button type="submit">Send Magic Link</Button>
          </Form>
          <Notification>{this.state.emailStatus === true && 'Email sent!'}</Notification>
          <Notification>{this.props.authError === true && 'Something whent wrong. Please try again.'}</Notification>
        </ContentContainer>
      </SContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.auth.userLoggedIn,
    authError: state.auth.authError,
  }
}

export default connect(
  mapStateToProps,
  {}
)(MagicLinkRequest)