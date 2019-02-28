import React from 'react'
import styled from 'styled-components'
import SectionsView from './views/SectionsView'
import DetailsView from './views/DetailsView'

import { Paper, Tabs, Tab } from '@material-ui/core'

const ClubForm = styled.form`
  max-width: 25%;
  min-height: 40rem;
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
    <>
      <ClubForm onSubmit={props.hasClub ? props.updateClub : props.createClub}>
        <Paper square>
          <Tabs
            value={props.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={props.handleTabChange}
          >
            <Tab label="Overview" onClick={props.sectionViewOff} />
            <Tab label="Sections" onClick={props.sectionViewOn} />
          </Tabs>
        </Paper>

        <div style={{ padding: '2rem' }}>
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
        </div>
      </ClubForm>
    </>
  )
}

export default HandbookForm
