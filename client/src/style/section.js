import styled from 'styled-components'
import { size } from './breakpoints'
import { PlayCircleFilledWhite } from '@material-ui/icons'

export const EditBtn = styled.div`
  display: none;
  position: absolute;
  top: -1rem;
  right: -1.3rem;
  z-index: 2;
  background: cornflowerblue;
  color: white;
  border-radius: 100%;
  padding: 0.5rem;
  cursor: pointer;
`

export const DeleteBtn = styled.div`
  display: none;
  position: absolute;
  bottom: -1.3rem;
  right: -1.3rem;
  z-index: 2;
  background: firebrick;
  color: white;
  border-radius: 100%;
  padding: 0.4rem;
  cursor: pointer;
`

export const SectionBox = styled.div`
  box-sizing: border-box;
  height: 12rem;
  border: 0.5px solid lightgrey;
  box-shadow: 0 1px 1px black;
  text-align: center;
  width: 100%;
  border-radius: 8px;
  margin-top: 1rem;
  position: relative;
  &:hover ${EditBtn}, &:hover ${DeleteBtn} {
    display: block;
  }
`

export const SectionHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  background: lightgray;
  color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 30%;
  color: darkslategray;
  padding: 1.5rem 0.5rem;
  font-size: 1.4rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

// inline styles
export const headerIcon = {
  fontSize: 50,
}

export const addIcon = {
  fontSize: 50,
  marginBottom: 1,
  cursor: 'pointer',
  borderRadius: '100%',
  background: 'white',
  boxShadow: '0 1px 5px black',
  position: 'fixed',
  marginTop: '-1rem',
  zIndex: 1,
}
