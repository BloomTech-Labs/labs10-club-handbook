import React from 'react'
import SignaturePad from 'react-signature-pad-wrapper'
import './users/Members.css'

class Signaturepad extends React.Component {
  render() {
    return (
      <div className="signature-pad">
        <SignaturePad
          className="signature-pad"
          options={{ height: 2, width: 5, penColor: 'rgb(66, 133, 244)' }}
        />
      </div>
    )
  }
}

export default Signaturepad
