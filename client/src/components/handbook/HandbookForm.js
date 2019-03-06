import React from 'react'
import styled from 'styled-components'
import SectionsView from './views/SectionsView'
import DetailsView from './views/DetailsView'
import { connect } from 'react-redux'
import { deleteSectionById } from '../../store/actions/clubActions'

const ClubForm = styled.form`
  position: fixed;
  width: 22rem;
  height: 94%;
  z-index: 1;
  left: 0;
  background: rgb(60, 67, 75);
  color: white;
  overflow-x: hidden;
  overflow-y: scroll;
  border-left: 0px solid gray;
  box-shadow: 0 1px 1px gray;
`
const FixedContainer = styled.div`
  position: fixed;
  z-index: 3;
  width: 22rem;
`

const Tabs = styled.div`
  display: flex;
  height: 5rem;
  background: rgb(75, 83, 92);
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
  letter-spacing: 1px;
  font-size: 1.2rem;
`

const Container = styled.div`
  padding: 2rem;
  margin-top: 8rem;
`

const HandbookForm = props => {
  return (
    <>
      <ClubForm onSubmit={props.hasClub ? props.updateClub : props.createClub}>
        <FixedContainer>
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
        </FixedContainer>

        <Container>
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
        </Container>
      </ClubForm>
    </>
  )
}

export default connect(
  null,
  { deleteSectionById }
)(HandbookForm)
