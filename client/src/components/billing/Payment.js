import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import styled from 'styled-components'
import DashDrawer from '../Dashboard'
import axios from 'axios'

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Radio,
} from '@material-ui/core'

const PaymentContainer = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
`

const PaymentButton = styled.div`
  margin: auto;
  margin-top 5%;
  width: 40%;
  display: flex;
  flex-direction: column;
`

const styles = theme => ({
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
})

class Payment extends React.Component {
  state = {
    selectedValue: 'a',
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value })
  }

  startupToken = token => {
    let bodyToSend = {
      ...token,
      subscription: {
        plan: 'plan_EanP4aFWnkzGTC',
      },
    }
    let auth = {
      headers: {
        authorization: localStorage.getItem('access_token'),
      },
    }
    axios
      .post('http://localhost:5000/api/payments', bodyToSend, auth)
      .then(res => {
        console.log('res', res)
        alert(`Thank you for your Startup subscription "purchase"!`)
      })
      .catch(err => console.log('error', err))
  }

  smallBizToken = token => {
    let bodyToSend = {
      ...token,
      subscription: {
        plan: 'plan_EanQzBshDkH9Iu',
      },
    }
    let auth = {
      headers: {
        authorization: localStorage.getItem('access_token'),
      },
    }
    axios
      .post('http://localhost:5000/api/payments', bodyToSend, auth)
      .then(res => {
        console.log('res', res)
        alert(`Thank you for your Small Biz subscription purchase!`)
      })
      .catch(err => console.log('error', err))
  }

  enterpriseToken = token => {
    let bodyToSend = {
      ...token,
      subscription: {
        plan: 'plan_EanRarp8r1YnYC',
      },
    }
    let auth = {
      headers: {
        authorization: localStorage.getItem('access_token'),
      },
    }
    axios
      .post('http://localhost:5000/api/payments', bodyToSend, auth)
      .then(res => {
        console.log('res', res)
        alert(`Thank you for your Enterprise subscription purchase!`)
      })
      .catch(err => console.log('error', err))
  }

  render() {
    const subscriptions = [
      {
        title: 'Startup',
        price: '0',
        description: ['5 members'],
        checked: this.state.selectedValue === 'a',
        value: 'a',
        token: this.startupToken,
      },
      {
        title: 'Small Biz',
        price: '5',
        description: ['20 members'],
        checked: this.state.selectedValue === 'b',
        value: 'b',
        token: this.smallBizToken,
      },
      {
        title: 'Enterprise',
        price: '20',
        description: ['500 members'],
        checked: this.state.selectedValue === 'c',
        value: 'c',
        token: this.enterpriseToken,
      },
    ]

    return (
      <PaymentContainer>
        <DashDrawer />
        <Grid container spacing={40} alignItems="flex-end">
          {subscriptions.map(tier => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card align="center">
                <CardHeader
                  title={tier.title}
                  // subheader={tier.subheader} no subheaders defined
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <div className={styles.cardPricing}>
                    <Typography
                      align="center"
                      component="h2"
                      variant="h3"
                      color="textPrimary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography
                      align="center"
                      variant="h6"
                      color="textSecondary"
                    >
                      monthly
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                  <PaymentButton>
                    <StripeCheckout
                      token={tier.token}
                      stripeKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV"
                    />
                  </PaymentButton>
                </CardContent>
                <Radio
                  checked={tier.checked}
                  color="default"
                  onChange={this.handleChange}
                  value={tier.value}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <PaymentButton>
          <StripeCheckout
            // token={tier.token}
            stripeKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV"
          />
        </PaymentButton>
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
