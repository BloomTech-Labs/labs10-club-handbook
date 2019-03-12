import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../auth/Auth'
// import RenderPropsMenu from './NewDashMenu'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import RenderPropsMenu from './NewDashMenu'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import Book from '@material-ui/icons/Book'
import NoSsr from '@material-ui/core/NoSsr'
import MenuPopupState from './NewMenu'
import logo from '../logos/Cliquebook_combo_white.png'

import menuButton from '../assets/images/nav-hamburger.png'
import menuButtonClose from '../assets/images/nav-hamburger-close.png'
import { connect } from 'react-redux'
import { toggleEditWindow } from '../store/actions/handbookActions'

const auth = new Auth()

const drawerWidth = 150

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    paddingRight: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  navButton: {
    marginRight: 0,
  },
  navButtons: {
    marginRight: 0,
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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabButton: {
    fontSize: 12,
  },
})

function SectionContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

const OpenMenu = styled.img`
  display: ${props => (props.visible === true ? 'block' : 'none')};
  cursor: pointer;
  @media (min-width: 500px) {
    display: none;
  }
`

const CloseMenu = styled.img`
  display: ${props => (props.visible === true ? 'block' : 'none')};
  cursor: pointer;
  @media (min-width: 500px) {
    display: none;
  }
`

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

function LinkTab(props) {
  return <Tab component="a" {...props} />
}

class DashBar extends React.Component {
  state = {
    value: 0,
  }

  componentDidMount() {
    const currentLocation = window.location.href

    if (currentLocation.includes('members')) {
      this.setState({ value: 1 })
    } else if (currentLocation.includes('handbook')) {
      this.setState({ value: 0 })
    }
  }

  logoutUser = () => {
    auth.logout()
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classNames(classes.appBar)}>
          <Toolbar>
            {this.props.history.location.pathname === `/clique/handbook` ? (
              <>
                <OpenMenu
                  visible={!this.props.navOpen}
                  src={menuButton}
                  onClick={this.props.toggleEditWindow}
                />
                <CloseMenu
                  visible={this.props.navOpen}
                  src={menuButtonClose}
                  onClick={this.props.toggleEditWindow}
                />
              </>
            ) : null}
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              <img
                src={logo}
                style={{ height: '45px', cursor: 'pointer' }}
                onClick={() => {
                  this.props.history.push('/clique/handbook')
                  window.location.reload()
                }}
                className="clique-navBar-logo"
              />
            </Typography>

            <div className={classes.navButtons} />
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={this.handleChange}
            >
              <LinkTab
                label="Manage Handbook"
                // href="https://clubhandbook.netlify.com/handbook"
                component={Link}
                to="/clique/handbook"
                icon={<Book />}
                type="tabButton"
                className={classes.tabButton}
              />
              <LinkTab
                label="Manage Members"
                // href="https://clubhandbook.netlify.com/members"
                icon={<PersonPinIcon />}
                component={Link}
                to="/clique/members"
                type="tabButton"
                className={classes.tabButton}
              />
            </Tabs>
            {/* <RenderPropsMenu /> */}
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

        {/* {value === 0 && <TabContainer>Manage Handbook</TabContainer>}
        {value === 1 && <TabContainer>Manage Members</TabContainer>} */}
      </div>
    )
  }
}

DashBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    navOpen: state.handbook.navOpen,
  }
}

export default connect(
  mapStateToProps,
  { toggleEditWindow }
)(withStyles(styles, { withTheme: true })(DashBar))
