import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElement';

const Navbar= ( {toggle}) => {
    return (
        <>
          <Nav>
            <NavbarContainer>
                <NavLogo to='/'>FlowBank</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about">About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="Discover">Discover</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="Services">Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="Signup">Sign Up</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                <NavBtnLink to="/signin">Sign in</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
          </Nav>  
        </>
    )
}

export default Navbar;
