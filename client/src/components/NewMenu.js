import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, {
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/index'
import { Link } from 'react-router-dom'
import { getUsers, getUsersByClubId } from '../store/actions/usersActions'
import { connect } from 'react-redux'
import { logOut as stateLogOut } from '../store/actions/usersActions'
import { withStyles } from '@material-ui/core/styles'

class MenuPopupState extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // const clubId = this.props.currentUser.club_id
    // this.props.getUsersByClubId(clubId)
  }

  logOut = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('lsid')

    // axios.get('https://club-handbook.auth0.com/v2/logout')
    window.location.replace('https://club-handbook.auth0.com/v2/logout')
    this.props.stateLogOut()
  }

  render() {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {popupState => (
          <React.Fragment>
            <Button
              variant="outlined"
              color="inherit"
              type="pupUpTrigger"
              className={this.props.classes.popUpTrigger}
              {...bindTrigger(popupState)}
            >
              {this.props.currentUser.firstname
                ? this.props.currentUser.firstname
                : 'User'}
            </Button>
            <Menu
              type="pupUpWrapper"
              className={this.props.classes.popUpWrapper}
              {...bindMenu(popupState)}
            >
              {this.props.isMembers ? null : (
                <MenuItem
                  component={Link}
                  to="/clique/settings"
                  type="pupUp"
                  className={this.props.classes.popUp}
                >
                  Settings
                </MenuItem>
              )}
              <MenuItem
                // component={Link}
                // to="/"
                type="pupUp"
                className={this.props.classes.popUp}
                onClick={this.logOut}
              >
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    )
  }
}

const styles = theme => ({
  popUp: {
    fontSize: 16,
  },
  popUpWrapper: {
    marginTop: 40,
    marginLeft: 0,
  },
  popUpTrigger: {
    fontSize: 16,
  },
})

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default connect(
  mapStateToProps,
  { getUsers, getUsersByClubId, stateLogOut }
)(withStyles(styles)(MenuPopupState))
