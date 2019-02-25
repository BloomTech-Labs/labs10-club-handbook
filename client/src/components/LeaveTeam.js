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
          Leave Team
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogContent>
            <DialogContentText>
              <p>Are you sure you would like to continue?</p>
            </DialogContentText>
            <Divider />
            <DialogContentText>
              <br />
              This action is permanent, all clubs and handbooks will be lost.
              Club will remain active if you have assigned an administrator.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button component={Link} to="/" color="secondary" autoFocus>
              Leave Team
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default LeaveTeam
