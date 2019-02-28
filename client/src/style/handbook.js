import styled from 'styled-components'
import { size } from './breakpoints'

export const HandbookContainer = styled.div`
  padding: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
`

export const HandbookPreview = styled.div`
  padding: 1rem 4rem;
  width: 70%;
  border: 1px solid gray;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 1px 1px gray;
  background: white;

  @media ${size.tablet} {
    display: ${props => (props.displayOn ? 'block' : 'none')};
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`

export const HandbookButton = styled.button`
  display: none;

  @media ${size.tablet} {
    display: block;
  }
`
