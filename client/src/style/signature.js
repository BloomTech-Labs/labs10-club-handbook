import styled from 'styled-components'
import { size } from './breakpoints'

export const SignatureContainer = styled.div`
  max-width: 2560px;
  /* margin: 0 auto; */
  margin: 0 0 40px 0;
  /* border: 5px solid green; */
  @media ${size.mobile} {
    width: 100%;
    h2 {
      font-size: 1.8rem;
      /* font-color: 'white'; */
    }
  }
`

export const FormContainer = styled.div`
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0 1px 10px gray;
  display: ${props => props.visible === true ? "block" : "none"};
  z-index: 10;
  background: white;

  @media ${size.mobile} {
    width: 100%;
    h2 {
      font-size: 1.8rem;
    }
  }
`
