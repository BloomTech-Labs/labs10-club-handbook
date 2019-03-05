import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
} from '@material-ui/core'

import { Link } from 'react-router-dom'

class LeaveTeam extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={this.handleOpen}
        >
          Logout
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogContent>
            <DialogContentText>
              <p>Are you sure you would like to continue?</p>
            </DialogContentText>
            <Divider />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={Link}
              href="https://club-handbook.auth0.com/v2/logout"
              color="secondary"
              autoFocus
            >
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default LeaveTeam
