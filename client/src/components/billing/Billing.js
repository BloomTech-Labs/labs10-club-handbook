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

import LoadingPage from '../loading/loading'

class Billing extends React.Component {
  state = {
    hasSubscription: false,
  }

  componentDidMount() {
    if (this.props.subscription) {
      this.setState({ hasSubscription: true })
    } else {
      this.props.getSubscription()
    }
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
        {this.props.loading ? <LoadingPage /> : null}
      </div>
    )
  }
}

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
