import styled from 'styled-components'
import ReactQuill from 'react-quill'
import { size } from './breakpoints'

export const FormHolder = styled.div`
  position: fixed;
  top: 0;
  background: rgba(150, 150, 150, 0.7);
  height: 100vh;
  width: 100vw;
  z-index: 10;
  overflow-y: scroll;
`
export const FormContainer = styled.div`
  max-width: 60rem;
  padding: 3rem;
  margin: 100px auto;
  border: 1px solid black;
  border-radius: 1rem;
  box-shadow: 0 1px 10px black;
  left: 20%;
  z-index: 10;
  background: white;

  @media ${size.laptop} {
    left: 10%;
    margin-top: 7.2rem;
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
  font-size: 1.8rem;
  font-weight: strong;
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

  @media ${size.tablet} {
    height: 18rem;
  }

  @media ${size.mobile} {
    height: 15rem;
  }
`

export const SectionInput = styled.input`
  width: 75%;
`

export const ImageInput = styled.input`
  font-size: 1.4rem;
  @media ${size.mobile} {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const Select = styled.select`
  font-size: 1.4rem;

  @media ${size.mobile} {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }
`

export const FormButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid gray;
  border-radius: 4px;
  background: ${props => (props.save ? 'rgb(81, 159, 248)' : '#9e9e9e')};
  color: white;
  box-shadow: 0 1px 1px black;
  font-size: 1.6rem;
  width: 8rem;
  margin: 1rem 0;
  cursor: pointer;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0 1px 5px black;
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 1px 1px black;
  }
`
