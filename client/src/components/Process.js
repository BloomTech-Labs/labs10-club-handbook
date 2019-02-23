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
    width: '100%',
    align: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  stepButtons: {
    justifyContent: 'center',
  },
})

function getSteps() {
  return [
    'Create your handbook',
    'Send a magic link',
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
              <Button component={Link} to="/login">
                Sign Up
              </Button>
            </div>
          ) : (
            <div>
              <div classname={classes.stepButtons}>
                <Button
                  justifyContent="center"
                  disabled={activeStep === 0}
                  onClick={this.handleReset}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Ready?' : 'Next'}
                </Button>
              </div>
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
