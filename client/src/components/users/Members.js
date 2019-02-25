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
import DashDrawer from '../Dashboard'

import './Members.css'

class Members extends React.Component {
  componentDidMount() {
    const clubId = this.props.currentUser.club_id

    this.props.getUsersByClubId(clubId)
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <DashDrawer />
        <div className="members-container">
          <AppBar position="static">
            <div className="members-header">
              <h1>ClubMembers</h1>
              {/* <Button
              variant="text"
              color="secondary"
              onClick={() => {
                this.props.history.push('/add-members')
              }}
            >
              +ADD Member
            </Button> */}
            </div>
          </AppBar>

          <div className="members-list">
            <AddMember />

            <div className="status-header">
              <h3>Visited</h3>
              <h3>Signed</h3>
            </div>

            {users.reverse().map(user => {
              if (user.admin === false) {
                return (
                  <div className="members">
                    <div className="members-info">
                      {/* <Avatar /> */}

                      <div className="members-details">
                        <div className="members-text">
                          <div className="members-name">
                            <h3>{user.firstname}</h3>
                            <h3>{user.lastname}</h3>
                          </div>
                          <div className="members-email">
                            <h3>{user.email}</h3>
                          </div>
                        </div>
                        <div className="members-management">
                          <Link
                            className="links"
                            to={`update-members/${user.id}`}
                          >
                            Edit
                          </Link>
                          <EmailButton email={user.email} />
                          {/* <DeleteTwoToneIcon /> */}
                        </div>
                      </div>
                    </div>

                    <div className="members-actions">
                      <div>
                        <ViewedManual key={user.email} sub_id={user.sub_id} />
                      </div>
                      <div>
                        <SignedManual key={user.email} signed={user.signed} />
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
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
  { getUsers, getUsersByClubId }
)(Members)
