import styled from 'styled-components'
import { size } from './breakpoints'

export const Row = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'space-around')};
  align-items: center;
  margin-bottom: 1.5rem;
  vertical-align: center;
  margin-top: ${props => (props.marginTop ? '6rem' : '0')};

  @media ${size.mobile} {
    margin-top: ${props => (props.marginTop ? '8.5rem' : '0')};
    flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: center;

  @media ${size.mobile} {
  }
`

export const SectionBox = styled.div`
  padding: 3rem 0.5rem;
  border: 1px solid gray;
  text-align: center;
  width: 80%;
  border-radius: 3px;
  box-shadow: 0 1px 1px grey;
`

// inline styles
export const iconSize = {
  fontSize: 35,
  marginBottom: 7,
}
