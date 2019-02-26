import styled from 'styled-components'
import ReactQuill from 'react-quill'

export const FormContainer = styled.div`
  max-width: 60rem;
  padding: 3rem;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 1rem;
  box-shadow: 0 1px 10px gray;
`

export const Row = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'space-between')};
  align-items: center;
  margin-bottom: 1.5rem;
  vertical-align: center;
`

export const Label = styled.label`
  font-size: 1.6rem;
  margin-bottom: ${props => (props.marginBottom ? '1rem' : 0)};
`

export const RichEditor = styled(ReactQuill)`
  margin-top: 0.7rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 300px;
`

export const SectionInput = styled.input`
  width: 75%;
`

export const ImageInput = styled.input`
  width: 30%;
  font-size: 1rem;
`

// inline styles
