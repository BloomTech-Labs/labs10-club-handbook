import React from 'react'
import styled from 'styled-components'
import SectionsMembersView from './views/SectionsMembersView'
import { size } from '../../style/breakpoints';

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
  text-align: center;
`
const StyledButton = styled.button`
  margin-top: 30px;
  color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 1.75rem;
  width: 180px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-transform: uppercase;
  padding: 15px;
  background-color: #384AA6;
  :hover {
    background-color: white;
    color: #384AA6;
    border: 1px solid #384AA6;
    cursor: pointer;
  }
  @media ${size.tablet} {
    width: 100px;
}
`

const Container = styled.div`
  padding: 2rem;
  /* margin-top: 8rem; */
`

const HandbookMembersForm = props => {
  return (
    <>
      <ClubForm>
        <StyledButton onClick={props.showSignature}>Sign the Handbook</StyledButton>
        <Container>
          <SectionsMembersView sections={props.sections} />
        </Container>
      </ClubForm>
    </>
  )
}

export default HandbookMembersForm