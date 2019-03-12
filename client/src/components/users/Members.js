import React from 'react'
// import { AppBar, Button, Avatar, SvgIcon } from '@material-ui/core'

import { connect } from 'react-redux'
import {
  getUsers,
  getUsersByClubId,
  resetAddMember,
} from '../../store/actions/usersActions'
import { Link } from 'react-router-dom'
// import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
// import SignedManual from './SignedManual'
// import EmailButton from './SendEmail'
// import ViewedManual from './ViewedManual'
import AddMember from './AddMembers'
import styled from 'styled-components'
// import DashBar from '../NewDash'
import { size } from '../../style/breakpoints'
import Member from './Member'
import LoadingPage from '../loading/loading'

//#region STYLES
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 115px 30px;
  min-height: 100vh;
  @media ${size.tablet} {
    /* width: 75%; */
    /* padding-top: 70px; */
  }
  /* border: 2px solid red; */
  background: rgb(200, 200, 200);
  background: white;

  .shadow-wrapper {
    /* border-radius: 7px; */

    box-shadow: 0 0 5px 5px rgb(230, 230, 230);
  }

  @media ${size.mobile} {
    padding: 115px 15px;
  }
`

const MembersList = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  /* margin-top: 30px; */
  /* border-bottom-right-radius: 7px; */
  /* border-bottom-left-radius: 7px; */
  /* border-radius: 7px; */
  padding: 20px 15px 40px;
  /* box-shadow: 0px 5px 10px 5px gray; */
  h1 {
    text-align: center;
  }

  @media ${size.mobile} {
    padding: 20px 5px 40px;
  }
`

const StatusHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Visited = styled.h2`
  font-size: 1.8rem;
  margin-right: 15px;
  margin-bottom: 3px;
  /* color: white; */
  @media ${size.mobile} {
    font-size: 1rem;
    margin-right: 5px;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
    margin-right: 5px;
  }
`
const Signed = styled.h2`
  font-size: 1.8rem;
  margin-right: 14%;
  /* color: white; */
  @media ${size.mobile} {
    font-size: 1rem;
    margin-right: 7%;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
    margin-right: 5%;
  }
  @media (max-width: 340px) {
    margin-right: 2%;
  }
`

const PopupButton = styled.div`
  display: none;
  color: white;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  text-transform: uppercase;
  background: linear-gradient(to right, rgb(82, 157, 248), rgb(66, 126, 199));
  font-size: 1.7rem;
  &:hover {
    box-shadow: 0 0 15px 2px white inset;
  }
  &:active {
    background: white;
    color: #384aa6;
    box-shadow: 0 0 15px 2px #384aa6 inset;
  }
  @media ${size.mobile} {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 10;
  }
`
const AddMembersWarning = styled.h3`
  font-size: 2rem;
  margin-top: 50px;
  padding: 20px;
  width: 100%;
  text-align: center;
`

const FailedPage = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(150, 150, 150, 0.5);

  div {
    margin: 100px auto;
    background: white;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    border-radius: 7px;
    border: 2px solid rgb(82, 157, 248);

    h3 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
    button {
      padding: 5px 15px;
      background: rgb(82, 157, 248);
      color: white;
      border: 2px solid rgb(82, 157, 248);
      cursor: pointer;
      border-radius: 5px;
      font-weight: bold;

      &:hover {
        background: rgb(82, 157, 248);
        color: white;
        box-shadow: 0 0 4px 3px rgb(255, 255, 255, 0.5) inset;
        border: 2px solid white;
      }
      &:active {
        color: rgb(82, 157, 248);
        background: white;
        box-shadow: 0 0 10px 0 rgb(82, 157, 248) inset;
      }
    }
  }
`

//#endregion

class Members extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const clubId = this.props.currentUser.club_id

    this.props.getUsersByClubId(clubId)
  }

  render() {
    const { users } = this.props

    return (
      <>
        {/* <DashBar /> */}
        {this.props.addMemberFailed ? (
          <FailedPage>
            <div>
              <h3>Add Member FAILED:</h3>
              <p>
                You have reaced your member limit, please update your
                subscription in the billing section of the settings page.
              </p>
              <button onClick={this.props.resetAddMember}>OK</button>
            </div>
          </FailedPage>
        ) : null}

        <Container>
          {/* <HeaderBar>{this.props.clubName} Members</HeaderBar> */}
          <div className="shadow-wrapper">
            <AddMember />

            <MembersList>
              <h1>Clique Members</h1>
              {users.length > 1 && (
                <StatusHeader>
                  <Visited>Visited</Visited>
                  <Signed>Signed</Signed>
                </StatusHeader>
              )}

              {users.length <= 1 && (
                <AddMembersWarning>
                  You need some members! They'll show up here.
                </AddMembersWarning>
              )}

              {users
                .filter(user => user.admin === false)
                .map((user, idx) => {
                  if (idx % 2 === 0) {
                    return (
                      <Member
                        key={user.id}
                        user={user}
                        clubName={this.props.clubName}
                        adminFirstName={this.props.currentUser.firstname}
                        adminLastName={this.props.currentUser.lastname}
                        isEven
                      />
                    )
                  } else {
                    return (
                      <Member
                        key={user.id}
                        user={user}
                        clubName={this.props.clubName}
                        adminFirstName={this.props.currentUser.firstname}
                        adminLastName={this.props.currentUser.lastname}
                      />
                    )
                  }
                })}
            </MembersList>
          </div>
          <Link to={'/clique/members/add-members-mobile'}>
            <PopupButton>ADD MEMBER</PopupButton>
          </Link>
        </Container>
        {this.props.loading ? <LoadingPage /> : null}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading,
    currentUser: state.auth.currentUser,
    clubName: state.clubs.clubById.name,
    addMemberFailed: state.users.addMemberFailed,
  }
}

export default connect(
  mapStateToProps,
  { getUsers, getUsersByClubId, resetAddMember }
)(Members)
