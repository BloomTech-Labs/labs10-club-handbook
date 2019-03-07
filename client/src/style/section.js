import styled from 'styled-components'
import { size } from './breakpoints'
import { AddCircle } from '@material-ui/icons'

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
  box-shadow: 0 1px 5px black;

  :hover {
    transform: translateY(-2px);
    box-shadow: -1px 1px 25px black;
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 1px 5px black;
  }
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
  box-shadow: 0 1px 5px black;

  :hover {
    transform: translateY(-2px);
    box-shadow: -1px 1px 25px black;
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 1px 5px black;
  }
`

export const SectionBox = styled.div`
  box-sizing: border-box;
  height: 12rem;
  border: 0.5px solid lightgrey;
  box-shadow: 0 1px 10px black;
  text-align: center;
  width: 100%;
  border-radius: 8px;
  margin-top: 1rem;
  position: relative;
  :hover {
    transform: translateY(-3px);
    box-shadow: -1px 1px 30px black;
  }

  :hover ${EditBtn}, &:hover ${DeleteBtn} {
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

export const AddButton = styled(AddCircle)`
  font-size: 50;
  margin-bottom: 1;
  cursor: pointer;
  border-radius: 100%;
  background: white;
  box-shadow: -1px 1px 15px black;
  position: fixed;
  margin-top: -1rem;
  z-index: 1;

  :hover {
    transform: translateY(-3px);
    box-shadow: -1px 1px 25px black;
  }

  :active {
    transform: translateY(0);
    box-shadow: 0 1px 5px black;
  }
`
