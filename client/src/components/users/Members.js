import React from 'react'
import { AppBar, Button, Avatar, SvgIcon } from '@material-ui/core'

import { connect } from 'react-redux'
import { getUsers, getUsersByClubId } from '../../store/actions/usersActions'
import { Link } from 'react-router-dom'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import SignedManual from './SignedManual'
import EmailButton from './SendEmail'
import ViewedManual from './ViewedManual'
import AddMember from './AddMembers'
import styled from 'styled-components'
import DashBar from '../NewDash'
import { size } from '../../style/breakpoints'
import Member from './Member'
import LoadingPage from '../loading/loading'

//#region STYLES
const Container = styled.div`
  max-width: 800px;
  margin: 115px auto;
  padding: 0 2%;
  @media ${size.tablet} {
    /* width: 75%; */
}
`;
const HeaderBar = styled.div`
  width: 100%;
  background: #3648AC;
  font-size: 35px;
  color: #FFFFFF;
  text-align: center;
  padding: 10px 0;
`;
const MembersList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Visited = styled.h2`
  font-size: 1.8rem;
  margin-right: 15px;
`;
const Signed = styled.h2`
  font-size: 1.8rem;
  margin-right: 14%;
`;

const PopupButton = styled.div`
  display: none;
  color: white;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-transform: uppercase;
  background-color: #384AA6;
  font-size: 1.7rem;
  @media ${size.mobile} {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 10;
  }
`;
const AddMembersWarning = styled.h3`
  font-size: 2rem;
  margin-top: 100px;
`;
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

        <DashBar />
        
        <Container>
          {/* <HeaderBar>{this.props.clubName} Members</HeaderBar> */}
          
            <AddMember />

          <MembersList>

            {
            users.length > 1 &&
              <StatusHeader>
                <Visited>Visited</Visited>
                <Signed>Signed</Signed>
              </StatusHeader>
            }

            {
              users.length <= 1 && <AddMembersWarning>You need some members! They'll show up here when you add some.</AddMembersWarning>
            }

            {users.map(user => {
              if (user.admin === false) {
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
          <Link to={'/add-members-mobile'}><PopupButton>ADD MEMBER</PopupButton></Link>
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
  }
}

export default connect(
  mapStateToProps,
  { getUsers, getUsersByClubId }
)(Members)