import React from 'react'
import { AppBar, Button, Avatar } from '@material-ui/core'

import { connect } from 'react-redux'
import { getUsers } from '../../store/actions/usersActions'
import { Link } from 'react-router-dom'

import './Members.css'

class Members extends React.Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    const { users } = this.props
    console.log(users[0])
    return (
      <div className="members-container">
        <AppBar position="static">
          <div className="members-header">
            <h1>ClubMembers</h1>
            <Button variant="text" color="secondary">
              +ADD Member
            </Button>
          </div>
        </AppBar>

        <div className="members-list">
          {users.slice(0, 10).map(user => {
            return (
              <div className="members">
                <div className="members-info">
                  <Avatar />
                  <div className="members-details">
                    <div className="members-text">
                      <h3>first name</h3>
                      <h3>last name</h3>
                      <h3>{user.email}</h3>
                    </div>
                    <div className="members-management">
                      <Link className="links" to="/members/:id">
                        Edit
                      </Link>
                      <Link className="links" to="/members/:id">
                        Remove
                      </Link>
                      <Link className="links" to="/members/:id">
                        Send Notification
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="members-actions">
                  <div>
                    <h3>Visited</h3>
                    {/* <img alt="checkmark">CheckMark</img> */}
                    <h3>date</h3>
                  </div>

                  <div>
                    <h3>Signed</h3>
                    {/* <img alt="checkmark">CheckMark</img> */}
                    <h3>date</h3>
                  </div>
                </div>
              </div>
            )
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
  }
}

export default connect(
  mapStateToProps,
  { getUsers }
)(Members)
