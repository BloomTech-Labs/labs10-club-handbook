import React from 'react'
// import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { size } from '../../style/breakpoints'

const StyledButton = styled.button`
  width: 65px;
  color: #000000;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  text-transform: uppercase;
  padding: 10px 0;
  :hover {
    background-color: orange;
    color: black;
    border: 1px solid #384aa6;
    cursor: pointer;
  }
  @media ${size.tablet} {
    /* width: 100px; */
  }
`

class EmailButton extends React.Component {
  constructor(props) {
    super(props)
  }
  onClick = () => {
    const subject = this.props.clubName

    const body = `Hello ${
      this.props.name
    },%0D%0A%0DPlease click the link to view the ${
      this.props.clubName
    } handbook:%0D%0A%0Dhttps://clubhandbook.netlify.com/handbook/member-view%0D%0A%0DThank you,%0D%0A%0D ${
      this.props.adminFirstName
    } ${this.props.adminLastName}`

    window.location.href = `mailto:${
      this.props.email
    }?subject=${subject}&body=${body}`
  }

  render() {
    return (
      // <button onClick={this.onClick}>Notify</button>

      <StyledButton
        onClick={e => {
          e.stopPropagation()
          this.onClick()
        }}
      >
        Notify
      </StyledButton>
    )
  }
}

export default EmailButton
