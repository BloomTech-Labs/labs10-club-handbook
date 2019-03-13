import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signinUser } from '../store/actions/authActions'
import styled from 'styled-components'
import bgImage from '../assets/images/bg-abstract-lightblue.jpg'

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  padding: 10rem;
  background: url(${bgImage});
  background-size: cover;

  @media (max-width: 800px) {
    padding: 10rem 3rem;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

const Card = styled.div`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25rem;
  padding: 2rem;
  height: 20rem;
  background: white;
  border-radius: 10px;
  color: rgb(100, 100, 100);
  box-shadow: 0 1px 5px black;

  :not(:last-child) {
    margin-right: 7rem;

    @media (max-width: 800px) {
      margin-right: 3rem;
    }

    @media (max-width: 550px) {
      margin: 10rem 0 5rem;
    }
  }

  @media (max-width: 550px) {
    width: 30rem;
    margin: 0;
  }

  h5,
  p {
    text-align: center;
  }

  h5 {
    text-transform: uppercase;
  }
`

const MemberButton = styled(Link)`
  margin: 0 auto;
  text-align: center;
  padding: 1rem 1rem;
  border-radius: 10px;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px black;
  background: rgb(81, 159, 248);
  color: white;
  line-height: 1.4;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    color: rgb(81, 159, 248);
    background: white;
  }

  :active {
    transform: translateY(0);
  }
`

const AdminButton = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  text-align: center;
  padding: 1rem 1rem;
  border-radius: 10px;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px black;
  background: rgb(81, 159, 248);
  color: white;
  line-height: 1.4;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    color: rgb(81, 159, 248);
    background: white;
  }

  :active {
    transform: translateY(0);
  }
`

const Image = styled.img`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 850px) {
    width: 80%;
  }
`

const GetStarted = props => {
  return (
    <Container>
      <Image src={require('../logos/Cliquebook_combo2.png')} />
      <Card>
        <h5>For Members</h5>
        <p>View your club's handbook</p>
        <MemberButton to="/handbook/member-view">Access Handbook</MemberButton>
      </Card>

      <Card>
        <h5>For Admins</h5>
        <p>Manage Handbook</p>
        <AdminButton onClick={props.signinUser}>Signup / Signin</AdminButton>
      </Card>
    </Container>
  )
}

export default connect(
  null,
  { signinUser }
)(GetStarted)
