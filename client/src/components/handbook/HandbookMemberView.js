import React from 'react'
import { connect } from 'react-redux'
import DashDrawer from '../Dashboard'
import { getClubSections } from '../../store/actions/clubActions'
import HandbookRender from './HandbookRender';
import MagicLinkRequest from '../sections/MagicLinkRequest';
import Signature from '../signature/Signature'
import styled from 'styled-components';
import { size } from '../../style/breakpoints'

const HandbookViewContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;
const SignatureContainer = styled.div`
`;
const HandbookRenderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

class HandbookMemberView extends React.Component {
  componentDidMount() {

    this.props.getClubSections(this.props.currentUser.club_id)
  }

  render() {
    if (this.props.club_id) {
      return (
        <>
          <DashDrawer />

          <HandbookViewContainer>
            <SignatureContainer>
              {this.props.signed === false && <Signature />}
            </SignatureContainer>
            <HandbookRenderContainer>
              <HandbookRender />
            </HandbookRenderContainer>
          </HandbookViewContainer>
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
    authorized: state.auth.userAuthorized,
    signed: state.auth.currentUser.signed
  }
}

export default connect(
  mapStateToProps,
  { getClubSections }
)(HandbookMemberView)
