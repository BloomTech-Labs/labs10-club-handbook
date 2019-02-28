import React from 'react'

class EmailButton extends React.Component {
  constructor(props) {
    super(props)
    
  }
  onClick = () => {
    const subject = this.props.clubName;
    
    const body = `Hello ${this.props.name},%0D%0A%0DPlease click the link to view the ${this.props.clubName} handbook:%0D%0A%0Dhttps://clubhandbook.netlify.com/handbook/member-view%0D%0A%0DThank you,%0D%0A%0D ${this.props.adminFirstName} ${this.props.adminLastName}`;

    window.location.href = `mailto:${this.props.email}?subject=${subject}&body=${body}`
  }


  render() {
    return <button onClick={this.onClick}>Notify</button>
  }
}

export default EmailButton
