import React from 'react'
import styled, { keyframes } from 'styled-components'
import SectionsView from './views/SectionsView'
import DetailsView from './views/DetailsView'
import { connect } from 'react-redux'
import { deleteSectionById } from '../../store/actions/clubActions'
import { size } from '../../style/breakpoints'

const easeInLeft = keyframes`
  0% {left: -25rem}
  100% {left: 0}
`

const easeOutLeft = keyframes`
  0% {left: 0}
  100% {left: -25rem}
`

const ClubForm = styled.form`
  position: fixed;
  width: 22rem;
  height: 94%;
  z-index: 1;
  left: 0;
  background: rgb(60, 67, 75);
  color: white;
  overflow-x: hidden;
  overflow-y: auto;
  border-left: 0px solid black;
  box-shadow: 0px 0px 10px black;
  text-align: center;

  @media ${size.mobile} {
    width: 16rem;
    animation: ${props => (props.navOpen ? easeInLeft : easeOutLeft)} 0.2s;
    animation-fill-mode: forwards;
  }
`
const FixedContainer = styled.div`
  position: fixed;
  z-index: 3;
  width: 22rem;

  @media ${size.mobile} {
    width: 16rem;
  }
`

const Tabs = styled.div`
  display: flex;
  height: 5rem;
  background: rgb(75, 83, 92);
`

const Tab = styled.div`
  width: 50%;
  color: white;
  border-bottom: ${props => (props.selected ? '2px solid red' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: ${props => (props.selected ? '1.3rem' : '1.2rem')};
  text-shadow: 0 1px 5px black;

  @media ${size.mobile} {
    width: 16rem;
    font-size: ${props => (props.selected ? '1.1rem' : '1rem')};
  }
`

const Container = styled.div`
  padding: 2rem;
  margin-top: 8rem;
`

const HandbookForm = props => {
  return (
    <>
      <ClubForm
        navOpen={props.navOpen}
        onSubmit={props.hasClub ? props.updateClub : props.createClub}
      >
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
const mapStateToProps = state => {
  return {
    navOpen: state.handbook.navOpen,
  }
}

export default connect(
  mapStateToProps,
  { deleteSectionById }
)(HandbookForm)
