import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import SectionForm from '../sections/SectionForm'
import DashDrawer from '../Dashboard'

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
          {/* <h1>Handbook Page!</h1>
        {this.state.hasClub ? (
          <div>
            <h2>You have a Club!</h2>
            <h2>{this.props.club.id}</h2>
          </div>
        ) : (
          <h2>You have NO club...</h2>
        )} */}

          <HandbookForm
            onSubmit={this.state.hasClub ? this.updateClub : this.createClub}
          >
            <div className="buttons">
              <button type="button" onClick={this.sectionViewOn}>
                Sections
              </button>
              <button type="button" onClick={this.sectionViewOff}>
                Details
              </button>
            </div>
            {this.state.sectionView ? (
              //section view display
              <div className="section-block">
                <h1>Sections:</h1>
                {this.props.sections.map(section => (
                  <>
                    <div
                      key={section.id}
                      onClick={() => this.toggleEditView(section.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img src={section.img_url} />
                      <h2>{section.title}</h2>
                    </div>
                  </>
                ))}
                <button onClick={this.toggleAddView}>Add Section</button>
              </div>
            ) : (
              //details view display
              <div className="title-input">
                <h2>Handbook Title:</h2>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                {this.state.hasClub ? (
                  <button type="submit">Update Handbook</button>
                ) : (
                  <button type="submit">Create Handbook</button>
                )}
              </div>
            )}
          </HandbookForm>

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

          <HandbookPreview>
            <h1>{this.props.club.name}</h1>
            {this.props.sections.map(section => (
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </HandbookPreview>
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

const HandbookForm = styled.form`
  max-width: 25%;
  min-height: 40rem;
  padding: 2rem;
  border: 1px solid blue;
  .section-block {
    img {
      min-height: 30px;
      min-width: 30px;
      max-width: 300px;
    }
  }
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
