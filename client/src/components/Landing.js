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
    zIndex: -1,
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

class Landing extends React.Component {
  state = {
    open: false,
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        {/* Navbar */}
        <Fade top>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
              >
                Club.Handbook
              </Typography>
              <Button component={Login} color="inherit" variant="outlined" />
              <Button
                component={Link}
                to="/handbook/member-view"
                color="inherit"
                variant="outlined"
              >
                View Handbook{' '}
              </Button>
            </Toolbar>
          </AppBar>
        </Fade>
        <main>
          {/* Parallax Header */}
          <Parallax className={classes.mainContent}>
            <div className={classes.container}>
              <GridContainer>
                <Fade left>
                  <GridContainer xs={12} sm={12} md={6}>
                    <Typography variant="h3" color="TextPrimary" gutterBottom>
                      To happier, productive, and loyal employees.
                    </Typography>
                    <Typography variant="h6" color="TextPrimary" paragraph>
                      Top companies choose Club.Handbook to build their employee
                      handbooks. Complete templates, beautiful design and easy
                      customization. Publish as a mobile-friendly digital
                      handbook.
                    </Typography>
                    <br />
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
                          component={Link}
                          to="/login"
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
                  component={Link}
                  to="/login"
                  variant="outlined"
                  color="primary"
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/login"
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

export default withStyles(styles)(Landing)
