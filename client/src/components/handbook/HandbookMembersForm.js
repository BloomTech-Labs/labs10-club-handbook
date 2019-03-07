import React from 'react'
import styled from 'styled-components'
import SectionsMembersView from './views/SectionsMembersView'

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

const Container = styled.div`
  padding: 2rem;
  margin-top: 8rem;
`

const HandbookMembersForm = props => {
  return (
    <>
      <ClubForm>
        <Container>
            <SectionsMembersView sections={props.sections} />
        </Container>
      </ClubForm>
    </>
  )
}

export default HandbookMembersForm