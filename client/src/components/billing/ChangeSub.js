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
      const body = {
        subscription: {
          plan: this.state.desiredPlan.plan,
        },
      }

      this.props.changeSubscription(body)
      this.cancelStage()
    } catch (err) {
      console.log('error', err)
    }
  }

  render() {
    return (
      <PaymentContainer>
        <DashBar />

        <div className="mySub">
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
        </div>
        <h2>Other Subscriptions:</h2>
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
            <div>
              <h2>PLEASE CONFIRM</h2>
              <h4>Would You Like To Change Subscription To:</h4>
              <p>{this.state.desiredPlan.title}</p>
              <p>{this.state.desiredPlan.description}</p>
              <p>${this.state.desiredPlan.price}/month</p>
              <button onClick={this.changeSub}>
                Yes, Change to this Plan!
              </button>
              <button onClick={this.cancelStage}>Cancel</button>
            </div>
          </ConfirmationPopUp>
        ) : null}

        {this.props.changeFail ? (
          <ConfirmationPopUp>
            <div>
              <h3>{this.props.message}</h3>
              <button onClick={this.props.cancelFail}>Close</button>
            </div>
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
  align-items: center;
  color: rgb(65, 82, 179);

  .mySub {
    border: 3px solid rgb(65, 82, 179);
    border-radius: 5px;
    padding: 20px;
    box-shadow: 7px 7px 7px 0px lightgray;
    min-width: 300px;

    h1 {
      /* margin-left: 20px; */
      /* font-weight: bold; */
      margin-bottom: 15px;
      color: black;

      @media (max-width: 550px) {
        font-size: 30px;
      }
    }
    h3 {
      margin-left: 30px;
      margin-top: 10px;

      @media (max-width: 550px) {
        font-size: 24px;
      }
    }
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 0px;
  }
`
const SubscriptionHolder = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;

  div {
    min-width: 200px;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient(to right, rgb(65, 82, 179), rgb(78, 98, 215));
    color: white;
    box-shadow: 5px 5px 5px 0px lightgray;
    margin-left: 10px;
    box-shadow: 0 0 3px 3px rgb(255, 255, 255, 0.5) inset;
    margin-bottom: 10px;
    /* border: 2px solid black; */

    h3 {
      margin: 0 0 10px 0;
    }
    &:hover {
      box-shadow: 0 0 7px 7px rgb(255, 255, 255, 0.5) inset;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    div {
      margin-top: 15px;
    }
  }
`

const ConfirmationPopUp = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(75, 75, 75, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    max-width: 700px;
    background: white;
    z-index: 2;
    border-radius: 5px;
    min-width: 200px;
    min-height: 200px;
    padding: 30px;

    h2 {
      margin-top: 0;
      font-weight: bold;
      padding-bottom: 15px;
      text-decoration: underline;
    }

    p {
      margin-left: 30px;
      font-size: 16px;
    }

    button {
      padding: 10px;
      border: 2px solid rgb(65, 82, 179);
      color: rgb(65, 82, 179);
      border-radius: 5px;
      background: white;
      cursor: pointer;
      font-size: 14px;
      margin: 20px;
      font-weight: bold;

      &:hover {
        background: rgb(65, 82, 179);
        color: white;
        box-shadow: 0 0 0 5px rgb(255, 255, 255, 0.5) inset;
        border: 2px solid white;
      }
      &:active {
        background: white;
        color: black;
      }
    }
  }
`

export default ChangeSub
