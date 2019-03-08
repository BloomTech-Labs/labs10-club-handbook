import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SectionForm from '../sections/SectionForm'
import HandbookMembersForm from './HandbookMembersForm'
import HandbookRender from './HandbookRender'
import LoadingPage from '../loading/loading'
import { getClubById, updateClub, createClub, getClubSections } from '../../store/actions/clubActions'
import { getFormatStyles } from '../../store/actions/formatActions'
import MagicLinkRequest from '../sections/MagicLinkRequest'
import MembersViewDashBar from '../MembersViewDashBar';
import Signature from '../signature/Signature'

class HandbookMemberView extends React.Component {
  state = {
    signOpen: false,
  }

  componentDidMount() {
    this.props.getClubSections(this.props.currentUser.club_id)
  }

  showSignature = event => {
    event.preventDefault()

    if (this.state.signOpen === true) {
      this.setState({ signOpen: false })
    } else {
      this.setState({ signOpen: true })
    }
  }

  render() {
    if (this.props.currentUser.club_id) {
      return (
        <>
          <MembersViewDashBar />
          <HandbookPageContainer>
            {this.state.signOpen === true && <Signature />}
            <HandbookMembersForm sections={this.props.sections} showSignature={this.showSignature} />
            <HandbookRender sections={this.props.sections} />
          </HandbookPageContainer>
          {this.props.loading || this.props.usersLoading ? <LoadingPage /> : null}
        </>
      )
    } else {
      return (
        <MagicLinkRequest />
      )
    }
  }
}
const HandbookPageContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 7.2rem;
  position: relative;
  z-index: 0;
`

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    club: state.clubs.clubById,
    sections: state.clubs.sections,
    loading: state.clubs.loading,
    usersLoading: state.users.loading,
  }
}

export default connect(
  mapStateToProps,
  { getClubById, updateClub, createClub, getClubSections, getFormatStyles }
)(HandbookMemberView)