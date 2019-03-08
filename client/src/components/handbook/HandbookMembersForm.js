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
// const StyledButton = styled.button`
//   margin-top: 30px;
//   color: white;
//   border: 1px solid black;
//   border-radius: 8px;
//   font-size: 1.75rem;
//   width: 180px;
//   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//   text-transform: uppercase;
//   padding: 15px;
//   background-color: #3648AC;
//   :hover {
//     background-color: white;
//     color: #384AA6;
//     border: 1px solid #384AA6;
//     cursor: pointer;
//   }
//   @media ${size.tablet} {
//     width: 100px;
// }
// `
const StyledButton = styled.button`
  /* width: 100%; */
  margin: 0 auto;
  margin-top: 30px;
  padding: 1rem;
  border: 0px solid black;
  border-radius: 5px;
  box-shadow: 0 1px 5px black;
  background: #3648AC;
  color: white;
  font-size: 1.4rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  text-shadow: 0 1px 5px black;

  @media ${size.mobile} {
    font-size: 1.2rem;
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