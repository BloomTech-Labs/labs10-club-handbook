import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 30,
    backgroundColor: theme.palette.background.paper,
  },
  stepButtons: {
    justifyContent: 'center',
  },
})

function getSteps() {
  return [
    'Create your handbook',
    'Add members to your club',
    'Members can view the handbook by authenticating themselves with a magic link',
    'Watch the signatures roll in!',
  ]
}

class ProcessStepper extends React.Component {
  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div className={classes.root}>
        <div className={classes.stepButtons}>
          <Button
            variant="outlined"
            justifyContent="center"
            disabled={activeStep === 0}
            onClick={this.handleReset}
          >
            Reset
          </Button>
        </div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Button
                variant="outlined"
                component={Link}
                to="https://club-handbook.auth0.com/login?state=g6Fo2SBnaG93SXFoSmd2ZURjMVJ5ZGtfajFxcnVVMVhYcWNEcaN0aWTZIDg4Y3h5Z29qVzFNaUFoTHNPcGE4dEJHcjZxX0s5eXM4o2NpZNkgTEw1V0wzWUQ3dnhPWjV0dzV5TURtdFFiMlF4UnBUa1U&client=LL5WL3YD7vxOZ5tw5yMDmtQb2QxRpTkU&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fclubhandbook.netlify.com%2Fcallback&scope=openid%20profile%20email&audience=https%3A%2F%2Fclub-handbook.herokuapp.com%2F&nonce=HyZ9_DQHaKIlzNyw-jglUXZILckQGMHR&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xMC4wIn0%3D"
              >
                Sign Up
              </Button>
            </div>
          ) : (
            <div classname={classes.stepButtons}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleNext}
              >
                {activeStep === steps.length - 1 ? 'Ready?' : 'Next'}
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

ProcessStepper.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(ProcessStepper)
