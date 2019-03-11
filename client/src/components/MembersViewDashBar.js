import React from 'react'
import styled from 'styled-components'
import { size } from '../style/breakpoints'
import logo from '../logos/Cliquebook_combo_white.png'
import menuButton from '../assets/images/nav-hamburger.png'
import menuButtonClose from '../assets/images/nav-hamburger-close.png'
import NewMenu from './NewMenu'

const NavBarContainer = styled.div`
  width: 100%;
  /* background-color: #3648AC; */
  background: linear-gradient(to right, rgb(82, 157, 248), rgb(66, 126, 199));
  position: fixed;
  top: 0;
  z-index: 30;
  box-shadow: 0 1px 5px black;
  display: flex;
  justify-content: center;
`
const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 2%;
`

const LogoImg = styled.img`
  height: 45px;
  margin: 10px 0;
  cursor: pointer;
`

const LeftBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 215px;

  @media ${size.mobile} {
    width: 165px;
  }
`

const MenuBtn = styled.div`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const OpenMenu = styled.img`
  display: ${props => (props.visible === true ? 'block' : 'none')};
`

const CloseMenu = styled.img`
  display: ${props => (props.visible === true ? 'block' : 'none')};
`

const StyledButton = styled.button`
  border: 0px solid black;
  border-radius: 5px;
  background: rgb(66, 126, 199);
  color: white;
  /* border: 1px solid black; */
  font-size: 1.5rem;
  width: 150px;
  height: 40px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 10px 0 white inset;
  }
  :active {
    background-color: white;
    color: #384aa6;
    border: 1px solid #384aa6;
    box-shadow: 0 0 10px 0 rgb(66, 126, 199) inset;
  }
  @media ${size.mobile} {
    width: 125px;
    font-size: 1.1rem;
  }
`

const MembersViewDashBar = props => {
  return (
    <NavBarContainer>
      <NavBar>
        <LeftBtns>
          <MenuBtn>
            <OpenMenu
              visible={!props.navOpen}
              src={menuButton}
              onClick={props.showNav}
            />
            <CloseMenu
              visible={props.navOpen}
              src={menuButtonClose}
              onClick={props.showNav}
            />
          </MenuBtn>
          <StyledButton onClick={props.showSignature}>
            Sign Clique Book
          </StyledButton>
        </LeftBtns>

        <LogoImg
          src={logo}
          onClick={() =>
            window.location.replace('https://club-handbook.auth0.com/v2/logout')
          }
        />
      </NavBar>
    </NavBarContainer>
  )
}

export default MembersViewDashBar
