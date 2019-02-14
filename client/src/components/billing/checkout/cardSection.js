import React from 'react'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from 'react-stripe-elements'

class CardSection extends React.Component {
  render() {
    return (
      <label>
        card details
        <CardNumberElement />
        <CardExpiryElement />
        <CardCVCElement />
      </label>
    )
  }
}

export default CardSection
