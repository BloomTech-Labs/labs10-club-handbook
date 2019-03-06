import React from 'react'
import styled from 'styled-components'
import SectionsView from './views/SectionsView'
import DetailsView from './views/DetailsView'
import { connect } from 'react-redux'
import { deleteSectionById } from '../../store/actions/clubActions'

// import { Paper, Tabs, Tab } from '@material-ui/core'
import { size } from '../../style/breakpoints'

const ClubForm = styled.form`
  position: fixed;
  width: 20rem;
  height: 100%;
  z-index: 1;
  left: 0;
  background: rgb(30, 32, 34, 0.7);
  color: white;
  overflow-x: hidden;
  overflow: scroll;
  border-left: 1px solid gray;
  box-shadow: 0 1px 1px gray;
`

const Tabs = styled.div`
  display: flex;
  height: 5rem;
  background: rgb(255, 255, 255, 0.1);
`

const Tab = styled.div`
  width: 50%;
  color: ${props => (props.selected ? 'white' : 'whitesmoke')};
  border-bottom: ${props => (props.selected ? '2px solid red' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2rem;
`

const HandbookForm = props => {
  return (
    <>
      <ClubForm onSubmit={props.hasClub ? props.updateClub : props.createClub}>
        {/* <Paper square> */}
        <Tabs
          value={props.value}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          onChange={props.handleTabChange}
        >
          {props.sectionView ? (
            <>
              <Tab onClick={props.sectionViewOff}>Overview</Tab>
              <Tab selected label="Sections" onClick={props.sectionViewOn}>
                Sections
              </Tab>
            </>
          ) : (
            <>
              <Tab selected onClick={props.sectionViewOff}>
                Overview
              </Tab>
              <Tab label="Sections" onClick={props.sectionViewOn}>
                Sections
              </Tab>
            </>
          )}
        </Tabs>
        {/* </Paper> */}

        <div style={{ padding: '2rem' }}>
          {props.sectionView ? (
            <SectionsView
              sections={props.sections}
              toggleEditView={props.toggleEditView}
              toggleAddView={props.toggleAddView}
              clubId={props.clubId}
              deleteSectionById={props.deleteSectionById}
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

export default connect(
  null,
  { deleteSectionById }
)(HandbookForm)
