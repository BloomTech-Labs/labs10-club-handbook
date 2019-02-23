import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import styled from 'styled-components'

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core'

const PaymentContainer = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 70%;
  display: flex;
  justify-content: center;
`

const subscriptions = [
  {
    title: 'Startup',
    price: '0',
    description: ['5 members'],
    buttonText: 'Sign up',
    buttonVariant: 'outlined',
  },
  {
    title: 'Small Biz',
    price: '5',
    description: ['20 members'],
    buttonText: 'Great value',
    buttonVariant: 'outlined',
  },
  {
    title: 'Enterprise',
    price: '20',
    description: ['500 members'],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
]

class Payment extends React.Component {
  onToken = token => {
    console.log(token)
    fetch('http://localhost:5000/payments', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`Thank you for your purchase!`)
      })
    })
  }

  render() {
    return (
      <PaymentContainer>
        <Grid container spacing={40} alignItems="flex-end">
          {subscriptions.map(tier => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <div>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions>
                  <StripeCheckout
                    token={this.onToken}
                    stripeKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV"
                  />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV"
        /> */}
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
