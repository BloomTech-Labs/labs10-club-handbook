import styled from 'styled-components'
import { size } from '../breakpoints'

export const Handbook = styled.div`
  margin-left: 20rem;
  background: whitesmoke;
  overflow: scroll;
  width: 100%;
`
export const SectionContainer = styled.div`
  padding: 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`
