import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import {
  getUsers,
  getUsersByClubId,
  updateUserById,
} from '../store/actions/usersActions'
import {
  CssBaseline,
  FormGroup,
  FormControlLabel,
  TextField,
  Button,
  Checkbox,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import LeaveTeam from './LeaveTeam'
// import DashBar from './NewDash'
import Billing from './billing/Billing'

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
    marginTop: '60px',
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

function SettingsContainer(props) {
  return <Typography component="div">{props.children}</Typography>
}

SettingsContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      checkedNotifications: false,
      value: 0,
      firstname: '',
      lastname: '',
    }
  }

  handleEditUser = e => {
    e.preventDefault()
    const userId = this.props.currentUser.id

    const userChanges = {}
    userChanges.firstname = this.state.firstname
    userChanges.lastname = this.state.lastname
    this.props.updateUserById(userId, userChanges)

    this.setState({
      firstname: '',
      lastname: '',
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckbox = () => {
    this.setState(state => ({
      disabled: state.disabled ? false : true,
    }))
  }

  handleTab = value => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div>
        {/* <DashBar /> */}
        <CssBaseline />
        <Tabs value={value} onChange={this.handleTab} centered>
          <Tab label="User Settings" />
          <Tab label="Account Billing" />
        </Tabs>
        {value === 0 && (
          <SettingsContainer>
            {' '}
            <Paper>
              <form onSubmit={e => this.handleEditUser(e)}>
                <TextField
                  id="outlined-first"
                  label="First Name"
                  margin="normal"
                  variant="outlined"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleInputChange}
                />
                <TextField
                  id="outlined-last"
                  label="Last Name"
                  margin="normal"
                  variant="outlined"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleInputChange}
                />
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="primary" indeterminate />}
                    label="Nofications"
                    checkedNotifications={this.state.checkedNotifications}
                    onChange={this.handleCheckbox}
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
                    // onChange={this.handleCheckbox('checkedText')}
                  />
                </FormGroup>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
              </form>
            </Paper>
            <Button component={LeaveTeam} />
          </SettingsContainer>
        )}
        {value === 1 && <Billing />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  { updateUserById }
)(withStyles(styles)(Settings))
