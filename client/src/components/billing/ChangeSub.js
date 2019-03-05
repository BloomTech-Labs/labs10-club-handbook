import React from 'react'
import DashBar from '../NewDash'
import styled from 'styled-components'
import axios from 'axios'

class ChangeSub extends React.Component {
  state = {
    subscriptionTypes: [
      {
        title: 'Startup',
        price: '0',
        description: '5 members',
        plan: 'plan_EanP4aFWnkzGTC',
      },
      {
        title: 'Small Biz',
        price: '5',
        description: '20 members',
        plan: 'plan_EanQzBshDkH9Iu',
      },
      {
        title: 'Enterprise',
        price: '20',
        description: '500 members',
        plan: 'plan_EanRarp8r1YnYC',
      },
    ],
    changeStaged: false,
    desiredPlan: {},
  }

  stageChange = newSub => {
    this.setState({
      changeStaged: true,
      desiredPlan: newSub,
    })
  }

  cancelStage = () => {
    this.setState({
      changeStaged: false,
      desiredPlan: {},
    })
  }

  changeSub = async () => {
    try {
      const auth = {
        headers: {
          authorization: localStorage.getItem('access_token'),
        },
      }
      const body = {
        subscription: {
          plan: this.state.desiredPlan.plan,
        },
      }
      console.log(body)
      let whatever = await axios.post(
        'https://club-handbook.herokuapp.com/api/payments/updateSubscription',
        // 'http://localhost:5000/api/payments/updateSubscription',
        body,
        auth
      )

      this.props.getSubscription()
      this.cancelStage()
    } catch (err) {
      console.log('error', err)
    }
  }

  render() {
    return (
      <PaymentContainer>
        <DashBar />

        <h1>Your Subscription</h1>
        {this.state.subscriptionTypes
          .filter(subs => subs.title === this.props.subscription.type)
          .map(sub => (
            <div>
              <h3> Type: '{sub.title}'</h3>
              <h3> Limit: {sub.description}</h3>
              <h3> Price: ${sub.price}/month</h3>
            </div>
          ))}

        <SubscriptionHolder>
          {this.state.subscriptionTypes
            .filter(sub => sub.title !== this.props.subscription.type)
            .map(sub => (
              <div onClick={() => this.stageChange(sub)}>
                <h3>{sub.title}</h3>
                <h4>{sub.description}</h4>
                <h4>${sub.price}</h4>
              </div>
            ))}
        </SubscriptionHolder>

        {this.state.changeStaged ? (
          <ConfirmationPopUp>
            <h2>PLEASE CONFIRM</h2>
            <h4>Would You Like To Change Subscription To:</h4>
            <p>{this.state.desiredPlan.title}</p>
            <p>{this.state.desiredPlan.description}</p>
            <p>${this.state.desiredPlan.price}/month</p>
            <button onClick={this.changeSub}>Yes, Change to this Plan!</button>
            <button onClick={this.cancelStage}>Cancel</button>
          </ConfirmationPopUp>
        ) : null}
      </PaymentContainer>
    )
  }
}

const PaymentContainer = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  h1 {
    margin-left: 20px;
    text-decoration: underline;
    margin-bottom: 10px;
  }
  h3 {
    margin-left: 30px;
    margin-top: 10px;
  }
`
const SubscriptionHolder = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  display: flex;

  div {
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 10px rgba(100, 100, 250, 0.5) inset;
    }
  }
`

const ConfirmationPopUp = styled.div`
  position: fixed;
  top: 200px;
  background: white;
  z-index: 2;
  border: 1px solid black;
  margin: 0 auto;
  min-width: 200px;
  min-height: 200px;
`

export default ChangeSub
