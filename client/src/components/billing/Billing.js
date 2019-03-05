import React from 'react'
import { connect } from 'react-redux'
import {
  getSubscription,
  changeSubscription,
  cancelFail,
  createSubscription,
} from '../../store/actions/usersActions'
import Subscribe from './Payment'
import ChangeSub from './ChangeSub'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

class Billing extends React.Component {
  state = {
    hasSubscription: false,
  }

  componentDidMount() {
    this.props.getSubscription()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.subscription !== this.props.subscription) {
      if (this.props.subscription) {
        this.setState({ hasSubscription: true })
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.hasSubscription ? (
          <ChangeSub
            subscription={this.props.subscription}
            changeSubscription={this.props.changeSubscription}
            changeFail={this.props.changeFail}
            cancelFail={this.props.cancelFail}
            message={this.props.message}
          />
        ) : (
          <Subscribe createSubscription={this.props.createSubscription} />
        )}
        {this.props.loading ? (
          <LoadingWindow>
            <ReactLoading type={'spokes'} color={'rgb(65,82,179)'} />
          </LoadingWindow>
        ) : null}
      </div>
    )
  }
}
const LoadingWindow = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(50, 50, 50, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const mapStateToProps = state => {
  return {
    subscription: state.users.subscription,
    loading: state.users.loading,
    changeFail: state.users.changeFail,
    message: state.users.message,
  }
}

export default connect(
  mapStateToProps,
  { getSubscription, changeSubscription, cancelFail, createSubscription }
)(Billing)
