import React from 'react'
import { connect } from 'react-redux'
import DashDrawer from '../Dashboard'
import { getClubSections } from '../../store/actions/clubActions'
import HandbookRender from './HandbookRender';
import MagicLinkRequest from '../sections/MagicLinkRequest';
import Signature from '../signature/Signature'

class HandbookMemberView extends React.Component {
  componentDidMount() {

    this.props.getClubSections(this.props.currentUser.club_id)
  }

  render() {
    if (this.props.club_id) {
      return (
        <>
          <DashDrawer />
          {/* add in code to render the proper handbook component */}
          <Signature />
          <HandbookRender />
        </>
      )
    } else {
      return (
        <MagicLinkRequest />
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    sections: state.clubs.sections,
    currentUser: state.auth.currentUser,
    club_id: state.auth.currentUser.club_id,
    authorized: state.auth.userAuthorized
  }
}

export default connect(
  mapStateToProps,
  { getClubSections }
)(HandbookMemberView)
