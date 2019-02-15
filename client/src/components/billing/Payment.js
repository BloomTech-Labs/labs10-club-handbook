import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components'

const PaymentContainer = styled.div`
  margin: auto;
  margin-top: 200px;
  width: 80%;
  display: flex;
  justify-content: center;
`
class Payment extends React.Component {
  onToken = (token) => {
    console.log(token);
    fetch('http://localhost:5000/payments', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`Thank you for your purchase!`);
      });
    });
  }
 
  render() {
    return (
      <PaymentContainer>
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV"
      />
      </PaymentContainer>
    )
  }
}

// function Payment() {
//   return (
//     <PaymentContainer>
//       <StripeProvider apiKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV">
//         <Checkout />
//       </StripeProvider>
//     </PaymentContainer>
//   )
// }

export default Payment
