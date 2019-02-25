import React from 'react'
import { AppBar, Button, Avatar, SvgIcon } from '@material-ui/core'

import { connect } from 'react-redux'
import { getUsers, getUsersByClubId } from '../../store/actions/usersActions'
import { Link } from 'react-router-dom'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import SignedManual from './SignedManual'
import EmailButton from './SendEmail'
import ViewedManual from './ViewedManual'

import './Members.css'

class Members extends React.Component {
  componentDidMount() {
    const clubId = this.props.currentUser.club_id

    this.props.getUsersByClubId(clubId);
  }

  render() {
    const { users } = this.props

    return (
      <div className="members-container">
        <AppBar position="static">
          <div className="members-header">
            <h1>ClubMembers</h1>
            <Button
              variant="text"
              color="secondary"
              onClick={() => {
                this.props.history.push('/add-members')
              }}
            >
              +ADD Member
            </Button>
          </div>
        </AppBar>

        <div className="members-list">
          {users.map(user => {
            if (user.admin === false) {
              return (
                <div className="members">
                  <div className="members-info">
                    <Avatar />
                    <div className="members-details">
                      <div className="members-text">
                        <h3>{user.firstname}</h3>
                        <h3>{user.lastname}</h3>
                        <h3>{user.email}</h3>
                      </div>
                      <div className="members-management">
                        <Link className="links" to={`update-members/${user.id}`}>
                          Edit
                        </Link>
                        <Link className="links" to="/members/:id">
                          Remove
                        </Link>
                        <EmailButton email={user.email} />
                        <DeleteTwoToneIcon />
                      </div>
                    </div>
                  </div>
                  <div className="members-actions">
                    <div>
                      <h3>Visited</h3>
                      <ViewedManual key={user.email} sub_id={user.sub_id} />
                      <h3>date</h3>
                    </div>
                  </div>
                  <div>
                    <h3>Signed</h3>
                    <SignedManual key={user.email} signed={user.signed} />
                    <h3>date</h3>
                  </div>
                </div>
              )
            }
          })}
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
