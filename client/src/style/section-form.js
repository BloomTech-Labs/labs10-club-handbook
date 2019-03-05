import styled from 'styled-components'
import ReactQuill from 'react-quill'
import { size } from './breakpoints'

export const FormContainer = styled.div`
  max-width: 60rem;
  padding: 3rem;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 1rem;
  box-shadow: 0 1px 10px gray;
  position: absolute;
  left: 20%;
  z-index: 10;
  background: white;

  @media ${size.laptop} {
    left: 10%;
  }

  @media (max-width: 660px) {
    left: 2%;
  }

  @media ${size.mobile} {
    width: 100%;
    left: 0;

    h2 {
      font-size: 1.8rem;
    }
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'space-between')};
  align-items: center;
  margin-bottom: 1.5rem;
  vertical-align: center;
  margin-top: ${props => (props.marginTop ? '6rem' : '0')};

  @media ${size.mobile} {
    margin-top: ${props => (props.marginTop ? '8.5rem' : '0')};
    flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
  }
`

export const Label = styled.label`
  font-size: 1.6rem;
  margin-bottom: ${props => (props.marginBottom ? '1rem' : 0)};
  padding-right: 10px;
  @media ${size.mobile} {
    width: 60%;
    font-size: 1.2rem;
  }
`

export const RichEditor = styled(ReactQuill)`
  margin-top: 0.7rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 25rem;
`

export const SectionInput = styled.input`
  width: 75%;
`

export const ImageInput = styled.input`
  font-size: 12px;

  @media ${size.mobile} {
    width: 60%;
    margin-bottom: 2rem;
  }
`
