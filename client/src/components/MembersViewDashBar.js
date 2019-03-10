import React from 'react'
import styled from 'styled-components';
import { size } from '../style/breakpoints'
import logo from '../logos/Cliquebook_combo_white.png'
import menuButton from '../assets/images/nav-hamburger.png'
import menuButtonClose from '../assets/images/nav-hamburger-close.png'

const NavBarContainer = styled.div`
    width: 100%;
    background-color: #3648AC;
    position: fixed;
    top: 0;
    z-index: 30;
    box-shadow: 0 1px 5px black;
    display: flex;
    justify-content: center;
`;
const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 2%;
`;

const LogoImg = styled.img`
    height: 45px;
    margin: 10px 0;
`;

const LeftBtns = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 215px;
`;

const MenuBtn = styled.div`
    display: flex;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`;

const OpenMenu = styled.img`
    display: ${props => props.visible === true ? "block" : "none"};
`;

const CloseMenu = styled.img`
    display: ${props => props.visible === true ? "block" : "none"};
`;

const StyledButton = styled.button`
display: ${props => props.visible === true ? "block" : "none"};
  border: 0px solid black;
  border-radius: 5px;
  box-shadow: 0 1px 5px black;
  background: #3648AC;
  color: white;
  border: 1px solid black;
  font-size: 1.5rem;
  width: 150px;
  height: 40px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  text-transform: uppercase;
  background-color: #384aa6;
  :hover {
    background-color: white;
    color: #384aa6;
    border: 1px solid #384aa6;
    cursor: pointer;
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
                        <OpenMenu visible={!props.navOpen} src={menuButton} onClick={props.showNav} />
                        <CloseMenu visible={props.navOpen} src={menuButtonClose} onClick={props.showNav} />
                    </MenuBtn>
                    <StyledButton visible={!props.signed} onClick={props.showSignature} >
                        Sign Clique Book
                    </StyledButton>
                </LeftBtns>
                <LogoImg src={logo} />
            </NavBar>
        </NavBarContainer>
    )
}

export default MembersViewDashBar