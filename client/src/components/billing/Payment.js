import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import styled from 'styled-components'
import DashBar from '../NewDash'
import axios from 'axios'
import CliqueBook_favicon from '../../logos/CliqueBook_favicon.png'

import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core'

const PaymentContainer = styled.div`
  margin: 50px auto;
  max-width: 800px;
  /* width: 70%; */
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  @media (max-width: 600px) {
    padding-top: 40px;
  }

  h1 {
    margin: 0 auto;
    margin-bottom: 60px;
    /* color: white; */
  }
  .title-thin {
    display: none;
  }
  @media (max-width: 600px) {
    margin: 0 auto;

    .title-thin {
      display: block;
      margin: 0 auto;

      &:last-of-type {
        margin-bottom: 40px;
      }
    }
    .title-wide {
      display: none;
    }
  }

  .card {
    box-shadow: 0 0 5px 5px rgb(230, 230, 230);
    border-radius: 0;
    /* background: linear-gradient(to right, rgb(82, 157, 248), rgb(66, 126, 199)); */
  }

  .MuiCardHeader-root-262 {
    padding-bottom: 0;
  }
`

const PaymentButton = styled.div`
  margin: auto;
  margin-top: 5%;
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
  startupToken = token => {
    let bodyToSend = {
      ...token,
      subscription: {
        plan: 'plan_EanP4aFWnkzGTC',
      },
    }
    this.props.createSubscription(bodyToSend)
  }

  smallBizToken = token => {
    let bodyToSend = {
      ...token,
      subscription: {
        plan: 'plan_EanQzBshDkH9Iu',
      },
    }
    this.props.createSubscription(bodyToSend)
  }

  enterpriseToken = token => {
    let bodyToSend = {
      ...token,
      subscription: {
        plan: 'plan_EanRarp8r1YnYC',
      },
    }
    this.props.createSubscription(bodyToSend)
  }

  render() {
    const subscriptions = [
      {
        title: 'Starting Plan',
        price: '0',
        description: ['5 members'],
        value: 'a',
        token: this.startupToken,
      },
      {
        title: 'Small Biz',
        price: '5',
        description: ['20 members'],
        value: 'b',
        token: this.smallBizToken,
      },
      {
        title: 'Enterprise',
        price: '20',
        description: ['500 members'],
        value: 'c',
        token: this.enterpriseToken,
      },
    ]

    return (
      <PaymentContainer>
        <h1 className="title-wide">Our Subscription Options</h1>
        <h1 className="title-thin">Our</h1>
        <h1 className="title-thin">Subscription</h1>
        <h1 className="title-thin">Options</h1>
        <Grid container spacing={40} alignItems="flex-end">
          {subscriptions.map(tier => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card className="card" align="center">
                <CardHeader
                  title={tier.title}
                  // subheader={tier.subheader} no subheaders defined
                  titleTypographyProps={{ align: 'center', variant: 'h3' }}
                  subheaderTypographyProps={{ align: 'center' }}
                />
                <CardContent>
                  <div className={styles.cardPricing}>
                    <Typography
                      align="center"
                      // component="h2"
                      variant="h3"
                      color="textPrimary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography
                      align="center"
                      variant="h5"
                      color="textSecondary"
                    >
                      monthly
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="h6" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                  {tier.title !== 'Starting Plan' ? (
                    <PaymentButton>
                      <StripeCheckout
                        label="BUY"
                        panelLabel="SUBSCRIBE"
                        token={tier.token}
                        stripeKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV"
                        name={tier.title}
                        description={tier.description}
                        amount={tier.price * 100}
                        allowRememberMe={false}
                        image={CliqueBook_favicon}
                      />
                    </PaymentButton>
                  ) : (
                    <PaymentButton>
                      <StripeCheckout
                        label="FREE"
                        disabled={true}
                        panelLabel="SUBSCRIBE"
                        token={tier.token}
                        stripeKey="pk_test_M1Y5kyDDSB7dOAWXIhzOOqMV"
                        name={tier.title}
                        description={tier.description}
                        amount={tier.price * 100}
                        allowRememberMe={false}
                        image={CliqueBook_favicon}
                      />
                    </PaymentButton>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PaymentContainer>
    )
  }
}

export default Payment
