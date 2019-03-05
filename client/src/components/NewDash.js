import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router-dom'

import Settings from './Settings'
import Members from './users/Members'
import SectionForm from './sections/SectionForm'
import Billing from './billing/Payment'
import HandbookPage from './handbook/HandbookPage'
import Auth from '../auth/Auth'
// import RenderPropsMenu from './NewDashMenu'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import RenderPropsMenu from './NewDashMenu'

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
    marginRight: 10,
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
    padding: theme.spacing.unit * 3,
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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

class DashBar extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, theme } = this.props
    const { open, value } = this.state

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            {/* <IconButton
              color="inherit"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Clique.Book
            </Typography>

            <div className={classes.navButtons}>
              {/* <Button
                className={classes.navButton}
                component={Link}
                to="/handbook"
                color="secondary"
                variant="contained"
                // lassName={classes.toolbar}
                // onClick={this.logoutUser}
              >
                Manage Handbook
              </Button>
              <Button
                className={classes.navButton}
                component={Link}
                to="/members"
                color="primary"
                variant="contained"
                // lassName={classes.toolbar}
                // onClick={this.logoutUser}
              >
                Manage Members
              </Button> */}
            </div>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab
                label="Manage Handbook"
                onClick={() => this.props.history.push('/handbook')}
              />
              <Tab
                label="Manage Members"
                onClick={() => this.props.history.push('/members')}
              />
            </Tabs>
            <RenderPropsMenu />
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

        {value === 0 && <TabContainer>Manage Handbook</TabContainer>}
        {value === 1 && <TabContainer>Manage Members</TabContainer>}
      </div>
    )
  }
}

DashBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles, { withTheme: true })(DashBar))
