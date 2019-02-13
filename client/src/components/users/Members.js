import React from "react";
import { AppBar, Button, Avatar } from "@material-ui/core";

import { connect } from "react-redux";
import { getUsers } from "../../store/actions/usersActions";

import "./Members.css";

class Members extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props;
    console.log(users[0]);
    return (
      <div className="members-container">
        <AppBar position="static">
          <div className="members-header">
            <h1>ClubMembers</h1>
            <Button variant="text" color="white">
              +ADD Member
            </Button>
          </div>
        </AppBar>

        <div className="members-list">
          {users.slice(0, 2).map(user => {
            return (
              <div className="members-info">
                <Avatar />
                <div className="members-details">
                  <div className="members-text">
                    <h3>first name</h3>
                    <h3>last name</h3>
                    <h3>email</h3>
                  </div>
                  <div className="members-actions">
                    <h3>Edit</h3>
                    <h3>Remove</h3>
                    <h3>Send Notification</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    loading: state.users.loading
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(Members);
