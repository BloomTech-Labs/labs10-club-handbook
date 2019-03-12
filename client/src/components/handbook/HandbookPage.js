import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SectionForm from '../sections/SectionForm'
import DashBar from '../NewDash'
import HandbookForm from './HandbookForm'
import HandbookRender from './HandbookRender'
import LoadingPage from '../loading/loading'
import { size } from '../../style/breakpoints'

import {
  getClubById,
  updateClub,
  createClub,
  getClubSections,
} from '../../store/actions/clubActions'
import { getFormatStyles } from '../../store/actions/formatActions'

class HandbookPage extends React.Component {
  state = {
    sectionView: false,
    editView: false,
    addView: false,
    hasClub: false,
    title: '',
    sectionId: '',
    value: 0,
  }

  componentDidMount() {
    console.log('handbook page cdm')
    this.props.getFormatStyles()
    if (this.props.currentUser) {
      if (this.props.currentUser.club_id) {
        this.setState({ hasClub: true })
        this.props.getClubById(this.props.currentUser.club_id)
        this.props.getClubSections(this.props.currentUser.club_id)
      }
    }
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value,
    })
  }

  handleTabChange = (ev, value) => {
    this.setState({ value })
  }

  createClub = ev => {
    ev.preventDefault()
    let clubInfo = {
      name: this.state.title,
    }
    this.props.createClub(clubInfo)
  }

  updateClub = ev => {
    ev.preventDefault()
    let clubInfo = {
      name: this.state.title,
    }
    this.props.updateClub(this.props.currentUser.club_id, clubInfo)
  }

  sectionViewOn = ev => {
    ev.preventDefault()
    this.setState({
      sectionView: true,
    })
  }

  sectionViewOff = ev => {
    ev.preventDefault()
    this.setState({
      sectionView: false,
    })
  }

  toggleEditView = id => {
    this.setState({
      editView: !this.state.editView,
      sectionId: id,
    })
  }

  toggleAddView = ev => {
    ev.preventDefault()
    this.setState({
      addView: !this.state.addView,
    })
  }

  cancel = ev => {
    ev.preventDefault()
    this.setState({
      addView: false,
      editView: false,
      displayHandbook: false,
    })
  }

  render() {
    return (
      <>
        {/* <DashBar /> */}
        <HandbookPageContainer>
          <HandbookForm
            hasClub={this.state.hasClub}
            updateClub={this.updateClub}
            createClub={this.createClub}
            sectionViewOn={this.sectionViewOn}
            sectionViewOff={this.sectionViewOff}
            sections={this.props.sections}
            sectionView={this.state.sectionView}
            toggleEditView={this.toggleEditView}
            toggleAddView={this.toggleAddView}
            title={this.state.title}
            handleChange={this.handleChange}
            handleTabChange={this.handleTabChange}
            value={this.state.value}
            club={this.props.club}
            clubId={this.props.club.id}
            sectionView={this.state.sectionView}
          />
          <RenderContainer>
            <HandbookRender
              displayHandbook={this.state.displayHandbook}
              cancel={this.cancel}
              sections={this.props.sections}
              // loading={this.props.loading}
            />
          </RenderContainer>

          {this.state.editView ? (
            <SectionForm
              cancel={this.toggleEditView}
              update
              sectionId={this.state.sectionId}
            />
          ) : null}

          {this.state.addView ? <SectionForm cancel={this.cancel} /> : null}
        </HandbookPageContainer>
        {this.props.loading || this.props.usersLoading ? <LoadingPage /> : null}
      </>
    )
  }
}
const HandbookPageContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 7.2rem;
  position: relative;
  z-index: 0;
`

const RenderContainer = styled.div`
  margin-left: 22rem;
  scroll-behavior: smooth;
  width: 100%;
  max-width: 2000px;
  @media ${size.mobile} {
    margin-left: 16rem;
  }
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
)(HandbookPage)
