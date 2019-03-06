import styled from 'styled-components'
import { size } from '../breakpoints'

export const Title = styled.h1`
  position: absolute;
  top: 40%;
  left: 60%;
  width: 50%;
  transform: translate(-50%, -50%);
`

export const Handbook = styled.div`
  margin-left: 22rem;
  background: whitesmoke;
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;
`
export const SectionContainer = styled.div`
  padding: 10rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`
