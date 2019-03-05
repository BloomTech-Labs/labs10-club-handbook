import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

import Auth from '../auth/Auth'
import MenuPopupState from './NewDashMenu'

const auth = new Auth()

const drawerWidth = 150

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    paddingRight: 40,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  navButton: {
    margin: 10,
  },
  navButtons: {
    marginRight: 40,
  },
  userMenu: {},
  toolbarTitle: {
    flex: 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
})

function SectionContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

class DashBar extends React.Component {
  logoutUser = () => {
    auth.logout()
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classNames(classes.appBar)}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Clique.Book
            </Typography>

            <div className={classes.navButtons}>
              <Button
                className={classes.navButton}
                component={Link}
                to="/members"
                color="secondary"
                variant="contained"
                // lassName={classes.toolbar}
                // onClick={this.logoutUser}
              >
                Manage Members
              </Button>
              <Button
                className={classes.navButton}
                component={Link}
                to="/handbook"
                color="primary"
                variant="contained"
                // lassName={classes.toolbar}
                // onClick={this.logoutUser}
              >
                Manage Handbook
              </Button>
            </div>
            <MenuPopupState />
            {/* <a href="https://club-handbook.auth0.com/v2/logout">
              <Button
                // component={Link}
                // to="/"
                color="inherit"
                variant="outlined"
                lassName={classes.toolbar}
                onClick={this.logoutUser}
              >
                Do Not Logout
              </Button>
            </a> */}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

DashBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(DashBar)
