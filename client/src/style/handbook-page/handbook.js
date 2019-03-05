import styled from 'styled-components'
import { size } from '../breakpoints'

export const HandbookPreview = styled.div`
  margin-left: 20rem;
  background: whitesmoke;
  overflow: scroll;

  /* @media ${size.mobile} {
    display: ${props => (props.displayOn ? 'block' : 'none')};
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  } */
`
export const SectionContainer = styled.div`
  padding: 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`

export const HandbookButton = styled.button`
  display: none;

  /* @media ${size.mobile} {
    display: block;
  } */
`
