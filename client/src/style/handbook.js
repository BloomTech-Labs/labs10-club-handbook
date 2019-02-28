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

  @media ${size.tablet} {
    display: none;
  }
`
