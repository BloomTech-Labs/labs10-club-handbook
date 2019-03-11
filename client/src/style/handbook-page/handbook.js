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
  /* margin-left: 22rem; */
  background: whitesmoke;
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;

  /* @media ${size.mobile} {
    margin-left: 16rem;
  } */
`
