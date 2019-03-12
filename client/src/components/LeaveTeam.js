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
          type="logout"
          className={this.props.className}
        >
          Logout
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogContent>
            <DialogContentText>
              <p style={{ fontSize: '20px' }}>
                Are you sure you would like to continue?
              </p>
            </DialogContentText>
            <Divider />
          </DialogContent>
          <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={this.handleClose}
              color="primary"
              type="logout"
              className={this.props.className}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              type="logout"
              className={this.props.className}
              variant="contained"
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
