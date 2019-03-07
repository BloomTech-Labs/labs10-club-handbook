import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import toRenderProps from 'recompose/toRenderProps'
import withState from 'recompose/withState'
import { connect } from 'react-redux'
import { logOut as stateLogOut } from '../store/actions/usersActions'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null))

class RenderPropsMenu extends React.Component {
  logOut = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('lsid')
    this.stateLogOut()
  }

  render() {
    return (
      <WithState>
        {({ anchorEl, updateAnchorEl }) => {
          const open = Boolean(anchorEl)
          const handleClose = () => {
            updateAnchorEl(null)
          }

          return (
            <React.Fragment>
              <Button
                aria-owns={open ? 'render-props-menu' : undefined}
                aria-haspopup="true"
                onClick={event => {
                  updateAnchorEl(event.currentTarget)
                }}
                variant="outlined"
                color="inherit"
              >
                Profile
              </Button>
              <Menu
                id="render-props-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem component={Link} to="/clique/settings">
                  Settings
                </MenuItem>
                <MenuItem component={Link} to="/" onClick={this.logOut}>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          )
        }}
      </WithState>
    )
  }
}

export default connect(
  null,
  { stateLogOut }
)(RenderPropsMenu)
