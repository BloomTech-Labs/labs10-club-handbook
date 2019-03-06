import React from 'react'
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'
// import { Checkbox } from '@material-ui/core'
import Checkbox from '@material-ui/icons/CheckBox'
// import Copyright from 'material-ui/icons/Copyright'

// const SignedManual = props => {
//   if (this.props.signed === true) {
//     return <h1>true bro</h1>
//   } else {
//     return <h1>false bro</h1>
//   }
// }

// export default SignedManual

class SignedManual extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.signed === true) {
      // console.log('signed props', this.props.signed)
      return <Checkbox />
    } else {
      return <CheckBoxOutlineBlank />
    }
  }
}

export default SignedManual
