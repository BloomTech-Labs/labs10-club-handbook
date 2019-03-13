import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import HandbookMembersForm from './HandbookMembersForm'
import HandbookRender from './HandbookRender'
import LoadingPage from '../loading/loading'
import MagicLinkRequest from '../sections/MagicLinkRequest'
import MembersViewDashBar from '../MembersViewDashBar'
import Signature from '../signature/Signature'

class HandbookMemberView extends React.Component {
  state = {
    signOpen: false,
    navOpen: false,
  }

  componentDidMount() {
    // this.props.getInfoFromToken()
  }

  showSignature = event => {
    event.preventDefault()

    if (this.state.signOpen === true) {
      this.setState({ signOpen: false })
    } else {
      this.setState({ signOpen: true })
    }
  }

  showNav = event => {
    if (this.state.navOpen === true) {
      this.setState({ navOpen: false })
    } else {
      this.setState({ navOpen: true })
    }
  }

  render() {
    if (this.props.currentUser.club_id) {
      return (
        <>
          <MembersViewDashBar
            signed={this.props.signed}
            showNav={this.showNav}
            showSignature={this.showSignature}
            navOpen={this.state.navOpen}
          />
          <HandbookPageContainer>
            {this.state.signOpen === true && (
              <Signature
                signed={this.props.signed}
                showSignature={this.showSignature}
              />
            )}
            <HandbookMembersForm
              sections={this.props.sections}
              showSignature={this.showSignature}
              navOpen={this.state.navOpen}
            />
            <RenderContainer>
              <HandbookRender sections={this.props.sections} />
            </RenderContainer>
          </HandbookPageContainer>
          {this.props.loading || this.props.usersLoading ? (
            <LoadingPage />
          ) : null}
        </>
      )
    } else {
      return <MagicLinkRequest />
    }
  }
}
const HandbookPageContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6.2rem;
  z-index: 0;
  scroll-behavior: smooth;

  @media (max-width: 600px) {
    margin-top: 5.1rem;
  }
`
const RenderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    signed: state.auth.currentUser.signed,
    club: state.clubs.clubById,
    sections: state.clubs.sections,
    loading: state.clubs.loading,
    usersLoading: state.users.loading,
  }
}

export default connect(
  mapStateToProps,
  {}
)(HandbookMemberView)
