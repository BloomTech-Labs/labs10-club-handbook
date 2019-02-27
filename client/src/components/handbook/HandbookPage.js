import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SectionForm from '../sections/SectionForm'
import DashDrawer from '../Dashboard'
import HandbookForm from './HandbookForm'

import {
  getClubById,
  updateClub,
  createClub,
  getClubSections,
} from '../../store/actions/clubActions'

class HandbookPage extends React.Component {
  state = {
    // user has a club?
    sectionView: false,
    editView: false,
    addView: false,
    hasClub: false,
    title: '',
    sectionId: '',
  }

  componentDidMount() {
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
    })
  }

  render() {
    return (
      <>
        <DashDrawer />
        <HandbookPageContainer>
          <HandbookForm
            hasClub={this.state.hasClub}
            updateClub={this.updateClub}
            createClub={this.createClub}
            sectionViewOn={this.sectionViewOn}
            sectionViewOff={this.sectionViewOff}
            sections={this.props.sections}
            sectionView={this.state.sectionView}
            sections={this.props.sections}
            toggleEditView={this.toggleEditView}
            toggleAddView={this.toggleAddView}
            title={this.state.title}
            handleChange={this.handleChange}
            hasClub={this.state.hasClub}
          />

          {this.state.editView ? (
            <SectionEditor>
              <SectionForm
                cancel={this.toggleEditView}
                update
                sectionId={this.state.sectionId}
              />
            </SectionEditor>
          ) : null}

          {this.state.addView ? (
            <SectionEditor>
              <SectionForm cancel={this.cancel} />
            </SectionEditor>
          ) : null}

          {/* import handbook render here */}

          {/* <HandbookPreview>
            <h1>{this.props.club.name}</h1>
            {this.props.sections.map(section => (
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </HandbookPreview> */}
        </HandbookPageContainer>
      </>
    )
  }
}
const HandbookPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  margin: 0 auto;
  margin-top: 5rem;
  border: 1px solid black;
`

const SectionEditor = styled.div`
  padding: 0;
  position: fixed;
  max-width: 600px;
  min-height: 600px;
  top: 100px;
  left: 200px;
  background: white;
`

const HandbookPreview = styled.div`
  max-width: 70%;
  min-height: 40rem;
  padding: 2rem;
  border: 1px solid red;
`
const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    club: state.clubs.clubById,
    sections: state.clubs.sections,
  }
}

export default connect(
  mapStateToProps,
  { getClubById, updateClub, createClub, getClubSections }
)(HandbookPage)
