import React from 'react'
import styled, { keyframes } from 'styled-components'
import SectionsMembersView from './views/SectionsMembersView'
import { size } from '../../style/breakpoints'

const easeInLeft = keyframes`
  0% {left: -20rem}
  100% {left: 0}
`

const easeOutLeft = keyframes`
  0% {left: 0}
  100% {left: -20rem}
`

const ClubForm = styled.form`
  /* display: ${props => (props.visible === true ? 'block' : 'none')}; */
  animation: ${props => (props.navOpen ? easeInLeft : easeOutLeft)} 0.3s;
  animation-fill-mode: forwards;
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

const Container = styled.div`
  padding: 2rem;
`

const HandbookMembersForm = props => {
  return (
    <>
      <ClubForm visible={props.navOpen}>
        <Container>
          <SectionsMembersView sections={props.sections} />
        </Container>
      </ClubForm>
    </>
  )
}

export default HandbookMembersForm
