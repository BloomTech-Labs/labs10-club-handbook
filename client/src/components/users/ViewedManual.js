import React from 'react'
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'
import Checkbox from '@material-ui/icons/CheckBox'

class ViewedManual extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.sub_id) {
      // console.log('signed props', this.props.signed)
      return <Checkbox />
    } else {
      return <CheckBoxOutlineBlank />
    }
  }
}

export default ViewedManual
