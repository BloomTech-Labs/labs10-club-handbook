import React from 'react'

class EmailButton extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    console.log('this.props.email', this.props.email)
    window.location.href = `mailto:${
      this.props.email
    }?subject=Here's%20our%20Manual&body=www.google.com`
  }
  render() {
    return <button onClick={this.onClick}>Notify</button>
  }
}

export default EmailButton
