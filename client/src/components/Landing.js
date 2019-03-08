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

const CardContainer = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const styles = theme => ({
  appBar: {
    position: 'fixed',
    zIndex: 1,
  },
  navButton: {
    margin: 20,
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
  },
  packagesContent: {
    margin: 'auto',
    padding: 80,
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
  mainContent: {
    position: 'relative',
    zIndex: 0,
  },
})

const subscriptions = [
  {
    title: 'Startup',
    price: '0',
    description: ['5 members'],
    buttonText: 'Sign up',
    buttonVariant: 'outlined',
  },
  {
    title: 'Small Biz',
    price: '5',
    description: ['20 members'],
    buttonText: 'Great value',
    buttonVariant: 'outlined',
  },
  {
    title: 'Enterprise',
    price: '20',
    description: ['500 members'],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
]

function LinkTab(props) {
  return <Tab component="a" {...props} />
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
              <img src={logo} style={{ height: '45px' }} />
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
          {/* Parallax Header */}
          <Parallax
            className={classes.mainContent}
            filter
            image={require('../assets/images/pexels-photo-1289898.jpeg')}
          >
            <div className={classes.headerContent}>
              <GridContainer>
                <Fade left>
                  <GridContainer xs={12} sm={12} md={6}>
                    <Typography variant="h3" color="primary" gutterBottom>
                      Create a Handbook for Your Group. <br />
                      Stay Connected with your Members.
                    </Typography>
                    <Typography variant="h6" color="primary" paragraph>
                      An easy way to create a handbook for your group that
                      allows your members to electronically sign their agreement
                      to your group's terms and condition. Your rules. Keep
                      track of who has seen the handbook and who has
                      electronically signed the handbook.
                    </Typography>
                    <br />
                    <div>
                      <Button
                        className={classes.navButton}
                        component={Link}
                        to="/handbook/member-view"
                        color="inherit"
                        variant="contained"
                      >
                        I'm a Member and need to View My Group's Handbook
                      </Button>
                      <Button
                        className={classes.navButton}
                        component={Link}
                        to="/handbook/member-view"
                        color="secondary"
                        variant="contained"
                      >
                        I'm an Admin and need to Create My Group's Handbook{' '}
                      </Button>
                    </div>
                  </GridContainer>
                </Fade>
              </GridContainer>
            </div>
          </Parallax>
          {/* Process Section */}
          <Paper className={classes.mainContent}>
            <Grid container xl={12}>
              <div className={classes.processContent}>
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  The Process
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  With Club.Handbook we make bringing your club members together
                  as easy as possible:
                </Typography>
              </div>
            </Grid>
            <ProcessStepper />
          </Paper>
          {/* Package Section */}
          <div className={classes.packagesContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Packages
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              component="p"
            >
              Optimized for desktop, tablet, and mobile viewing. Update in
              real-time. Password protect your handbook. Custom domains (ie.
              handbook.yourcompany.com)
            </Typography>
          </div>
          {/* Price Cards */}
          <CardContainer>
            <Grid
              container
              spacing={40}
              xl={6}
              alignItems="flex-end"
              className={classes.mainContent}
            >
              {subscriptions.map(tier => (
                <Grid
                  item
                  key={tier.title}
                  xs={12}
                  sm={tier.title === 'Enterprise' ? 12 : 6}
                  md={4}
                >
                  <Fade bottom>
                    <Card>
                      <CardHeader
                        title={tier.title}
                        subheader={tier.subheader}
                        titleTypographyProps={{ align: 'center' }}
                        subheaderTypographyProps={{ align: 'center' }}
                        className={classes.cardHeader}
                      />
                      <CardContent>
                        <div className={classes.cardPricing}>
                          <Typography
                            component="h2"
                            variant="h3"
                            color="textPrimary"
                          >
                            ${tier.price}
                          </Typography>
                          <Typography variant="h6" color="textSecondary">
                            /mo
                          </Typography>
                        </div>
                        {tier.description.map(line => (
                          <Typography
                            variant="subtitle1"
                            align="center"
                            key={line}
                          >
                            {line}
                          </Typography>
                        ))}
                      </CardContent>
                      <CardActions className={classes.cardActions}>
                        <Button
                          onClick={Link}
                          href="https://club-handbook.auth0.com/login?state=g6Fo2SBnaG93SXFoSmd2ZURjMVJ5ZGtfajFxcnVVMVhYcWNEcaN0aWTZIDg4Y3h5Z29qVzFNaUFoTHNPcGE4dEJHcjZxX0s5eXM4o2NpZNkgTEw1V0wzWUQ3dnhPWjV0dzV5TURtdFFiMlF4UnBUa1U&client=LL5WL3YD7vxOZ5tw5yMDmtQb2QxRpTkU&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fclubhandbook.netlify.com%2Fcallback&scope=openid%20profile%20email&audience=https%3A%2F%2Fclub-handbook.herokuapp.com%2F&nonce=HyZ9_DQHaKIlzNyw-jglUXZILckQGMHR&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4wIn0%3D"
                          fullWidth
                          variant={tier.buttonVariant}
                          color="primary"
                        >
                          {tier.buttonText}
                        </Button>
                      </CardActions>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </CardContainer>
          {/* Bottom Section */}
          <div className={classes.packagesContent}>
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              All in one easy-to-use platform.
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Optionally add a password to your handbook and change it anytime
              so you are always in control of who can access it. Require
              employees to sign your handbook with a legally binding electronic
              signature. Invite as many people as you'd like to help with the
              handbook. They'll be able to make changes anytime.
            </Typography>
            <Grid container spacing={16} justify="center">
              <Grid item>
                <Button
                  onClick={Link}
                  href="https://club-handbook.auth0.com/login?state=g6Fo2SBnaG93SXFoSmd2ZURjMVJ5ZGtfajFxcnVVMVhYcWNEcaN0aWTZIDg4Y3h5Z29qVzFNaUFoTHNPcGE4dEJHcjZxX0s5eXM4o2NpZNkgTEw1V0wzWUQ3dnhPWjV0dzV5TURtdFFiMlF4UnBUa1U&client=LL5WL3YD7vxOZ5tw5yMDmtQb2QxRpTkU&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fclubhandbook.netlify.com%2Fcallback&scope=openid%20profile%20email&audience=https%3A%2F%2Fclub-handbook.herokuapp.com%2F&nonce=HyZ9_DQHaKIlzNyw-jglUXZILckQGMHR&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4wIn0%3D"
                  variant="outlined"
                  color="primary"
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={Link}
                  href="https://club-handbook.auth0.com/login?state=g6Fo2SBnaG93SXFoSmd2ZURjMVJ5ZGtfajFxcnVVMVhYcWNEcaN0aWTZIDg4Y3h5Z29qVzFNaUFoTHNPcGE4dEJHcjZxX0s5eXM4o2NpZNkgTEw1V0wzWUQ3dnhPWjV0dzV5TURtdFFiMlF4UnBUa1U&client=LL5WL3YD7vxOZ5tw5yMDmtQb2QxRpTkU&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fclubhandbook.netlify.com%2Fcallback&scope=openid%20profile%20email&audience=https%3A%2F%2Fclub-handbook.herokuapp.com%2F&nonce=HyZ9_DQHaKIlzNyw-jglUXZILckQGMHR&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4wIn0%3D"
                  variant="contained"
                  color="primary"
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
