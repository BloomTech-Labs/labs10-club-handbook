import React from 'react'
import styled from 'styled-components'
import SectionsMembersView from './views/SectionsMembersView'
import { size } from '../../style/breakpoints'

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

  @media ${size.mobile} {
    width: 16rem;
  }
`

const StyledButton = styled.button`
  margin: 0 auto;
  margin-top: 30px;
  padding: 1rem;
  border: 0px solid black;
  border-radius: 5px;
  box-shadow: 0 1px 5px black;
  background: linear-gradient(to right, rgb(82, 157, 248), rgb(78, 98, 215));
  color: white;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 1.75rem;
  width: 180px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  text-transform: uppercase;
  padding: 15px;
  /* background-color: #384aa6; */
  :hover {
    border: 1px solid #384aa6;
    box-shadow: 0 0 20px 6px white inset;
    cursor: pointer;
  }
  :active {
    background: rgb(82, 157, 248);
    box-shadow: 0 0 20px 6px white inset;
  }
  @media ${size.tablet} {
    width: 85%;
    font-size: 1.4rem;
  }

  @media ${size.mobile} {
    font-size: 1.2rem;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const HandbookMembersForm = props => {
  return (
    <>
      <ClubForm>
        <StyledButton onClick={props.showSignature}>
          Sign the Handbook
        </StyledButton>
        <Container>
          <SectionsMembersView sections={props.sections} />
        </Container>
      </ClubForm>
    </>
  )
}

export default HandbookMembersForm
