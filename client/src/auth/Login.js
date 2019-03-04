import React from 'react'
import { connect } from 'react-redux'
// import styled from 'styled-components'
import { signinUser } from '../store/actions/authActions'
import Button from '@material-ui/core/Button'

// const StyledButton = styled.div`
//   border: 1px solid white;
//   border-radius: 3px;
//   width: 160px;
//   text-align: center;
//   padding: 10px;
//   background: lightgrey;
//   color: black;
//   :hover {
//     background: darkgrey;
//     color: white;
//     cursor: pointer;
//   }
// `

class Login extends React.Component {
  handleSubmit = event => {
    console.log('handleSubmit button clicked')
    this.props.signinUser()
  }

  render() {
    return (
      <>
        <Button color="inherit" variant="outlined" onClick={this.handleSubmit}>
          Admin Portal
        </Button>
      </>
    )
  }
}

export default connect(
  null,
  { signinUser }
)(Login)
