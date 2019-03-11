import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import { signinUser } from '../store/actions/authActions'
import { connect } from 'react-redux'

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
    fontSize: '1.4rem',
    justifyContent: 'center',
  },
  iconContainer: {
    transform: 'scale(1.4)',
    fontSize: '3rem',
  },
  label: {
    fontSize: '1.4rem',
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
        <div>
          <Button
            className={classes.stepButtons}
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
            <Step key={label}>
              <StepLabel
                classes={{
                  iconContainer: classes.iconContainer,
                  label: classes.label,
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Button
                className={classes.stepButtons}
                variant="outlined"
                onClick={this.props.signinUser}
              >
                Sign Up
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className={classes.stepButtons}
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

export default connect(
  null,
  { signinUser }
)(withStyles(styles)(ProcessStepper))
