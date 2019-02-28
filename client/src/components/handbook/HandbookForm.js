import React from 'react'
import styled from 'styled-components'
import SectionsView from './views/SectionsView'
import DetailsView from './views/DetailsView'

import { Paper, Tabs, Tab } from '@material-ui/core'
import { size } from '../../style/breakpoints'

const ClubForm = styled.form`
  width: 25%;
  min-height: 40rem;
  border: 1px solid gray;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 1px 1px gray;

  @media ${size.tablet} {
    width: 40%;
    margin: 0 auto;
  }

  @media ${size.mobile} {
    width: 90%;
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
            <Tab
              label="Overview"
              onClick={props.sectionViewOff}
              fontSize="large"
            />
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
              updateClub={props.updateClub}
              createClub={props.createClub}
              club={props.club}
            />
          )}
        </div>
      </ClubForm>
    </>
  )
}

export default HandbookForm
