import React from 'react'
import { StripeProvider } from 'react-stripe-elements'
import Checkout from './checkout/StripeCheckout'
import styled from 'styled-components'

const PaymentContainer = styled.div`
  margin: auto;
  margin-top: 200px;
  width: 80%;
  display: flex;
  justify-content: center;
`

function Payment() {
  return (
    <PaymentContainer>
      <StripeProvider apiKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV">
        <Checkout />
      </StripeProvider>
    </PaymentContainer>
  )
}

export default Payment
