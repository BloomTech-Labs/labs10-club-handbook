import React from 'react'
import { connect } from 'react-redux'
import { getSubscription } from '../../store/actions/usersActions'
import Subscribe from './Payment'
import ChangeSub from './ChangeSub'

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
            getSubscription={this.props.getSubscription}
          />
        ) : (
          <Subscribe />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    subscription: state.users.subscription,
  }
}

export default connect(
  mapStateToProps,
  { getSubscription }
)(Billing)
