import React from "react";
import { AppBar, Button, Avatar } from "@material-ui/core";

import { connect } from "react-redux";
import { getUsers } from "../../store/actions/usersActions";

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
          <h1>ClubMembers</h1>
          {/* <Button variant="text" color="white">
            +ADD Member
          </Button> */}
        </AppBar>

        <div className="members-list">
          {users.slice(0, 10).map(user => {
            return (
              <div className="member-row">
                <Avatar />
                <p key={user.username}>{user.username}</p>
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
