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

function Settings(props) {
  const { classes } = props

  //   state = {
  //     checkedEmail: false,
  //     checkednText: false,
  //   }

  //   handleChange = name => event => {
  //     this.setState({ [name]: event.target.checked })
  //   }

  return (
    <main className={classes.main}>
      <CssBaseline />
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
              control={<Checkbox color="primary" />}
              label="Nofications"
              color="green"
            />
            <FormControlLabel
              control={<Checkbox disabled color="primary" />}
              label="Email"
              labelPlacement="start"
              //             checked={this.state.checkedEmail}
              //             onChange={this.handleChange('checkedEmail')}
            />
            <FormControlLabel
              control={<Checkbox disabled color="primary" />}
              label="Text"
              labelPlacement="start"
              //             checked={this.state.checkedText}
              //             onChange={this.handleChange('checkedText')}
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
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        color="secondary"
        className={classes.submit}
      >
        Leave Team
      </Button>
    </main>
  )
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Settings)
