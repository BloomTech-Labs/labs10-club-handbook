import styled from 'styled-components'
import { size } from './breakpoints'

export const PageContainer = styled.div`
  max-width: 2560px;
  margin: 0 auto;
  @media ${size.mobile} {
    width: 100%;
    h2 {
      font-size: 1.8rem;
      font-color: 'white';
    }
  }
`

export const FormContainer = styled.div`
  max-width: 60rem;
  padding: 3rem;
  margin: 30px auto;
  border: 1px solid gray;
  border-radius: 1rem;
  box-shadow: 0 1px 10px gray;

  @media ${size.mobile} {
    width: 100%;
    h2 {
      font-size: 1.8rem;
    }
  }
`
