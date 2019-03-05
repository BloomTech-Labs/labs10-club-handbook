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
`

// inline styles
export const iconSize = {
  fontSize: 50,
  marginBottom: 1,
  cursor: 'pointer',
}
