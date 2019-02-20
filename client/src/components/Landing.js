import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'



const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  landingContent: {
    maxWidth: 600,
    margin: '0 auto',
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
  
});

const subscriptions = [
  {
    title: 'Startup',
    price: '0',
    description: [
        '5 members', 
      ],
    buttonText: 'Sign up',
    buttonVariant: 'outlined',
  },
  {
    title: 'Small Biz',
    price: '5',
    description: [
      '20 members',
    ],
    buttonText: 'Great value',
    buttonVariant: 'outlined',
  },
  {
    title: 'Enterprise',
    price: '20',
    description: [
      '500 members',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
];

function Landing(props)  {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Club.Handbook
          </Typography>
          <Button component={Link} to="/members">Members</Button>
          <Button component={Link} to="/section-form">SectionForm</Button>
          <Button component={Link} to="/settings">Settings</Button>
          <Button component={Link} to="/login" color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
      <Paper className={classes.mainLandingPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainLandingPostContent}>
                  <Typography variant="h3" color="TextPrimary" gutterBottom>
                  To happier, productive, and loyal employees.
                  </Typography>
                  <Typography variant="h6" color="TextPrimary" paragraph>
                  Top companies choose Club.Handbook to build their employee
                   handbooks. Complete templates, beautiful design and easy customization.
                    Publish as a mobile-friendly digital handbook.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        <div className={classes.landingContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Packages
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
          Optimized for desktop, tablet, and mobile viewing. Update in real-time. Password
           protect your handbook. Custom domains (ie. handbook.yourcompany.com)
          </Typography>
        </div>
        <Grid container spacing={40} alignItems="flex-end">
          {subscriptions.map(tier => (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
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
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button component={Link} to="/login" fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <div className={classes.landingContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              All in one easy-to-use platform.
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Optionally add a password to your handbook and change it anytime so you are
             always in control of who can access it. Require employees to sign your handbook
              with a legally binding electronic signature. Invite as many people as you'd
               like to help with the handbook. They'll be able to make changes anytime.
            </Typography>
            <div>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button component={Link} to="/login" variant="outlined" color="primary">
                    Sign Up
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={Link} to="/login" variant="contained" color="primary">
                    Contact Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </main>
    </React.Fragment>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
