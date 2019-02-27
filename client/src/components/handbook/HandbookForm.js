import React from 'react'
import styled from 'styled-components'
import SectionsView from './views/SectionsView'
import DetailsView from './views/DetailsView'

const ClubForm = styled.form`
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

const HandbookForm = props => {
  return (
    <ClubForm onSubmit={props.hasClub ? props.updateClub : props.createClub}>
      <div className="buttons">
        <button type="button" onClick={props.sectionViewOff}>
          Details
        </button>
        <button type="button" onClick={props.sectionViewOn}>
          Sections
        </button>
      </div>
      {props.sectionView ? (
        <SectionsView
          sections={props.sections}
          toggleEditView={props.toggleEditView}
          toggleAddView={props.toggleAddView}
          clubId={props.clubId}
        />
      ) : (
        <DetailsView
          title={props.title}
          handleChange={props.handleChange}
          hasClub={props.hasClub}
        />
      )}
    </ClubForm>
  )
}

export default HandbookForm
