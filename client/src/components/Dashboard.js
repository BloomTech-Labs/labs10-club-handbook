import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
// import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import SettingsIcon from '@material-ui/icons/Settings'
import SubjectIcon from '@material-ui/icons/Subject'
import CreditCardIcon from '@material-ui/icons/CreditCard'
// import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import { Link } from 'react-router-dom'

import Settings from './Settings'
import Members from './users/Members'
import SectionForm from './sections/SectionForm'
import Billing from './billing/Payment'
import HandbookPage from './handbook/HandbookPage'
import Auth from '../auth/Auth'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Theme from '../style/colors'

const auth = new Auth()

const drawerWidth = 150

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
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

class DashDrawer extends React.Component {
  state = {
    open: false,
  }

  handleDash = () => {
    this.setState({ value: 0 })
  }
  handleMembers = () => {
    this.setState({ value: 1 })
  }
  handleHandbook = () => {
    this.setState({ value: 2 })
  }
  handleSections = () => {
    this.setState({ value: 3 })
  }
  handleSettings = () => {
    this.setState({ value: 4 })
  }
  handleBilling = () => {
    this.setState({ value: 5 })
  }
  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  logoutUser = () => {
    auth.logout()
  }

  render() {
    const { classes, theme } = this.props
    const { open, value } = this.state

    return (
      <MuiThemeProvider theme={Theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
              >
                Club.Handbook
              </Typography>
              <a href="https://club-handbook.auth0.com/v2/logout">
                <Button
                  // component={Link}
                  // to="/"
                  color="inherit"
                  variant="outlined"
                  onClick={this.logoutUser}
                >
                  Logout
                </Button>
              </a>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            value={value}
            onChange={this.handleChange}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            {/* <ListItem button onClick={this.handleDash}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem> */}
            <ListItem button component={Link} to="./handbook">
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText primary="Handbook" />
            </ListItem>
            <ListItem button component={Link} to="./members">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Members" />
            </ListItem>
            {/* <ListItem button onClick={this.handleSections}>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText primary="Sections" />
          </ListItem> */}
            <ListItem button component={Link} to="./billing">
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText primary="Billing" />
            </ListItem>
            <ListItem button component={Link} to="./settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {value === 0 && <SectionContainer>Dashboard</SectionContainer>}
            {value === 1 && (
              <SectionContainer>
                <Members />
              </SectionContainer>
            )}
            {value === 2 && (
              <SectionContainer>
                <HandbookPage />
              </SectionContainer>
            )}
            {value === 3 && (
              <SectionContainer>
                <SectionForm />
              </SectionContainer>
            )}
            {value === 4 && (
              <SectionContainer>
                <Settings />
              </SectionContainer>
            )}
            {value === 5 && (
              <SectionContainer>
                <Billing />
              </SectionContainer>
            )}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

DashDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(DashDrawer)
