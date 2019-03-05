import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  CssBaseline,
  FormGroup,
  FormControlLabel,
  TextField,
  Button,
  Checkbox,
  Paper,
} from '@material-ui/core'
import LeaveTeam from './LeaveTeam'
import DashBar from './NewDash'
import Payment from './billing/Payment'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 350,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 4}px`,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: 'auto',
  },
  formgroup: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
  },
  submit: {
    marginTop: theme.spacing.unit * 4,
  },
})

class Settings extends React.Component {
  state = {
    disabled: true,
    checkedNotifications: false,
  }

  handleChange = () => {
    this.setState(state => ({
      disabled: state.disabled ? false : true,
    }))
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.form}>
        <DashBar />
        <CssBaseline />
        <Paper className={classes.paper}>
          <Payment />
        </Paper>
        <Paper className={classes.paper}>
          <form className={classes.form}>
            <TextField
              id="outlined-email"
              label="Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-phone"
              label="Phone"
              margin="normal"
              variant="outlined"
            />
            <FormGroup className={classes.formgroup}>
              <FormControlLabel
                control={<Checkbox color="primary" indeterminate />}
                label="Nofications"
                checkedNotifications={this.state.checkedNotifications}
                onChange={this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="Email"
                labelPlacement="start"
                disabled={this.state.disabled}
              />
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="Text"
                labelPlacement="start"
                disabled={this.state.disabled}
                // onChange={this.handleChange('checkedText')}
              />
            </FormGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
          </form>
        </Paper>
        <Button className={classes.submit} component={LeaveTeam} />
      </div>
    )
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Settings)
