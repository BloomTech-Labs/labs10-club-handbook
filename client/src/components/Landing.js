import React from 'react'
import PropTypes from 'prop-types'
import {
  AppBar,
  Button,
  Card,
  Paper,
  CardActions,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'

import { Link } from 'react-router-dom'

import Login from '../auth/Login'
import ProcessStepper from './Process'
import Parallax from './Header'
import GridContainer from './Grid'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import PersonPinIcon from '@material-ui/icons/PersonPin'
import Group from '@material-ui/icons/Group'
import Settings from '@material-ui/icons/Settings'
import { connect } from 'react-redux'
import { signinUser } from '../store/actions/authActions'
import logo from '../logos/Cliquebook_combo_white.png'
import {
  Heading,
  ActionButton,
  ProcessContainer,
  SubscriptionCard,
} from '../style/landing-page'
import { Gradient } from '@material-ui/icons'

const CardContainer = styled.div`
  margin: 12rem auto 5rem;
  max-width: 120rem;
  display: flex;
  justify-content: space-evenly;
  color: rgba(120, 120, 120);

  h4 {
    font-size: 3rem;
    margin: 2rem auto;
  }

  h6 {
    font-size: 1.8rem;
  }
`

const styles = theme => ({
  appBar: {
    position: 'fixed',
    zIndex: 2,
    color: 'white',
    fontWeight: 'bold',
  },
  actionButton: {
    padding: '10px 20px',
    border: '0 solid black',
    borderRadius: '25px',
    boxShadow: '0 1px 5px black',
    color: 'rgb(0, 153, 255)',
    background: 'white',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '14px',
    fontWeight: 'bolder',
    cursor: 'pointer',
  },
  navButton: {
    padding: '10px 20px',
    border: '0 solid black',
    borderRadius: '25px',
    boxShadow: '0 1px 5px black',
    background: 'rgb(0, 153, 255)',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  toolbarTitle: {
    flex: 1,
  },

  landingContent: {
    maxWidth: 700,
    margin: '0 auto',
    marginTop: 20,
    marginBottom: 30,
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  headerContent: {
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: 20,
    marginBottom: 30,
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  processContent: {
    margin: 'auto',
    padding: 40,
    marginBottom: '3rem',
  },
  packagesContent: {
    margin: 'auto',
    padding: '10rem 6rem 15rem',
    backgroundImage:
      'linear-gradient(to top right, rgb(0, 153, 255, 0.3), rgb(255,255,255, 0.7),  rgb(0, 153, 255, 0.3))',
    color: 'black',
    textShadow: '0 1px 0 gray',
    borderBottom: `1px solid rgb(0, 153, 255, 0.3)`,
  },
  mainLandingPost: {
    marginBottom: theme.spacing.unit * 4,
  },
  mainLandingPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  margin: {
    margin: theme.spacing.unit,
    fontSize: 14,
    padding: '5px 20px',
  },
  heading: {
    position: 'relative',
    zIndex: 'auto',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

const subscriptions = [
  {
    title: 'Free Plan',
    price: '0',
    description: '5 members',
    buttonText: 'Sign up',
    buttonVariant: 'outlined',
  },
  {
    title: 'Small Business',
    price: '5',
    description: '20 members',
    buttonText: 'Great value',
    buttonVariant: 'outlined',
  },
  {
    title: 'Enterprise',
    price: '20',
    description: '500 members',
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
]

function LinkTab(props) {
  return <Tab component="a" {...props} style={{ fontSize: '1.4rem' }} />
}

class Landing extends React.Component {
  state = {
    open: false,
    value: null,
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <React.Fragment>
        <CssBaseline />
        {/* Navbar */}
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              <img
                src={logo}
                style={{ height: '45px' }}
                className="navBar-logo"
              />
            </Typography>

            <Tabs
              variant="fullWidth"
              value={value}
              onChange={this.handleChange}
            >
              <LinkTab
                label="Group Member Access"
                // href="https://clubhandbook.netlify.com/handbook"
                component={Link}
                to="/magic-link-request"
                icon={<Group />}
              />
              <LinkTab
                label="Admin Portal"
                icon={<Settings />}
                onClick={this.props.signinUser}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
        <main>
          <Parallax
            className={classes.mainContent}
            filter
            image={require('../assets/images/bg-abstract-lightblue.jpg')}
          >
            <Heading>
              <div className="heading-title">
                <h1>
                  Create a handbook for your organization <br />
                  and stay connected with your members.
                </h1>
              </div>

              <div className="action-div">
                <div className="for-members">
                  <h5>For Members</h5>
                  <ActionButton
                    members
                    className={classes.actionButton}
                    component={Link}
                    to="/get-started"
                    color="inherit"
                    variant="contained"
                  >
                    Access Handbook
                  </ActionButton>
                </div>

                <div className="for-admins">
                  <h5>For Admins</h5>
                  <ActionButton
                    className={classes.actionButton}
                    onClick={this.props.signinUser}
                    color="secondary"
                    variant="contained"
                  >
                    Access Application
                  </ActionButton>
                </div>
              </div>
            </Heading>
          </Parallax>

          <ProcessContainer>
            <Grid container xl={12}>
              <div className={classes.processContent}>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  style={{ marginBottom: '4rem' }}
                  gutterBottom
                >
                  The Process
                </Typography>
                <Typography
                  variant="h4"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  With CliqueBook we make bringing your club members together as
                  easy as possible:
                </Typography>
              </div>
            </Grid>
            <ProcessStepper />
          </ProcessContainer>

          {/* Package Section */}
          <div className={classes.packagesContent}>
            <h3
              style={{
                fontSize: '3.75rem',
                textAlign: 'center',
                marginBottom: '4rem',
              }}
            >
              Packages
            </h3>
            {/* <h5
              style={{
                fontSize: '2.125rem',
                textAlign: 'center',
                marginBottom: '2rem',
                lineHeight: 1.2,
                color: 'rgba(0, 0, 0, 0.54)',
              }}
            >
              Optimized for desktop, tablet, and mobile viewing. Update in
              real-time. Password protect your handbook. Custom domains (ie.
              handbook.yourcompany.com)
            </h5> */}

            <CardContainer>
              {subscriptions.map(tier => (
                <SubscriptionCard>
                  <h6>{tier.title}</h6>
                  <h4>
                    ${tier.price}{' '}
                    <span style={{ fontSize: '1.4rem' }}>/mo</span>
                  </h4>
                  <h6>{tier.description}</h6>
                  <Button
                    onClick={Link}
                    href="https://club-handbook.auth0.com/login?state=g6Fo2SBnaG93SXFoSmd2ZURjMVJ5ZGtfajFxcnVVMVhYcWNEcaN0aWTZIDg4Y3h5Z29qVzFNaUFoTHNPcGE4dEJHcjZxX0s5eXM4o2NpZNkgTEw1V0wzWUQ3dnhPWjV0dzV5TURtdFFiMlF4UnBUa1U&client=LL5WL3YD7vxOZ5tw5yMDmtQb2QxRpTkU&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fclubhandbook.netlify.com%2Fcallback&scope=openid%20profile%20email&audience=https%3A%2F%2Fclub-handbook.herokuapp.com%2F&nonce=HyZ9_DQHaKIlzNyw-jglUXZILckQGMHR&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4wIn0%3D"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.margin}
                    style={{ marginTop: '2.5rem', marginBottom: '-0.5rem' }}
                  >
                    Sign Up
                  </Button>
                </SubscriptionCard>
              ))}
            </CardContainer>
          </div>

          {/* Bottom Section */}
          <div
            // className={classes.packagesContent}
            style={{ background: 'white', padding: '10rem' }}
          >
            <h3
              style={{
                fontSize: '3.75rem',
                textAlign: 'center',
                marginBottom: '4rem',
              }}
            >
              All in one easy-to-use platform.
            </h3>
            <h5
              style={{
                fontSize: '2.125rem',
                textAlign: 'center',
                marginBottom: '2rem',
                lineHeight: 1.2,
                color: 'rgba(0, 0, 0, 0.54)',
              }}
            >
              Optionally add a password to your handbook and change it anytime
              so you are always in control of who can access it. Require
              employees to sign your handbook with a legally binding electronic
              signature. Invite as many people as you'd like to help with the
              handbook. They'll be able to make changes anytime.
            </h5>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button
                  onClick={Link}
                  href="https://club-handbook.auth0.com/login?state=g6Fo2SBnaG93SXFoSmd2ZURjMVJ5ZGtfajFxcnVVMVhYcWNEcaN0aWTZIDg4Y3h5Z29qVzFNaUFoTHNPcGE4dEJHcjZxX0s5eXM4o2NpZNkgTEw1V0wzWUQ3dnhPWjV0dzV5TURtdFFiMlF4UnBUa1U&client=LL5WL3YD7vxOZ5tw5yMDmtQb2QxRpTkU&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fclubhandbook.netlify.com%2Fcallback&scope=openid%20profile%20email&audience=https%3A%2F%2Fclub-handbook.herokuapp.com%2F&nonce=HyZ9_DQHaKIlzNyw-jglUXZILckQGMHR&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4wIn0%3D"
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.margin}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={Link}
                  href="https://club-handbook.auth0.com/login?state=g6Fo2SBnaG93SXFoSmd2ZURjMVJ5ZGtfajFxcnVVMVhYcWNEcaN0aWTZIDg4Y3h5Z29qVzFNaUFoTHNPcGE4dEJHcjZxX0s5eXM4o2NpZNkgTEw1V0wzWUQ3dnhPWjV0dzV5TURtdFFiMlF4UnBUa1U&client=LL5WL3YD7vxOZ5tw5yMDmtQb2QxRpTkU&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fclubhandbook.netlify.com%2Fcallback&scope=openid%20profile%20email&audience=https%3A%2F%2Fclub-handbook.herokuapp.com%2F&nonce=HyZ9_DQHaKIlzNyw-jglUXZILckQGMHR&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4wIn0%3D"
                  variant="outlined"
                  color="primary"
                  size="large"
                  className={classes.margin}
                >
                  Contact Us
                </Button>
              </Grid>
            </Grid>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect(
  null,
  { signinUser }
)(withStyles(styles)(Landing))
