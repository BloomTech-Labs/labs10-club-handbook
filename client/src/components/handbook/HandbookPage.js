import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getClubById } from '../../store/actions/clubActions'

class HandbookPage extends React.Component {
  state = {
    // user has a club?
    hasClub: false,
  }

  componentDidMount() {
    if (this.props.currentUser) {
      if (this.props.currentUser.club_id) {
        this.setState({ hasClub: true })
        this.props.getClubById(this.props.currentUser.club_id)
      }
    }
  }
  componentDidUpdate() {
    console.log(this.props.club)
  }

  render() {
    return (
      <div>
        <h1>Handbook Page!</h1>
        {this.state.hasClub ? (
          <div>
            <h2>You have a Club!</h2>
            <h2>{this.props.club.id}</h2>
          </div>
        ) : (
          <h2>You have NO club...</h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    club: state.clubs.clubById,
  }
}

export default connect(
  mapStateToProps,
  { getClubById }
)(HandbookPage)
