import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../../images/logo/logo-goldenrod-transparent.png";

const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  color: #FFFFFF;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const LogoLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;

`;

const NavbarLinks = () => {
  return (
    <>
      <LogoLink className="logo-link" to="/"><img style={{maxHeight: "2rem"}} src={Logo} alt="Logo" /></LogoLink>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about-me">About Me</NavItem>
      <NavItem to="/skills">Skills</NavItem>
      
    </>
  )
}

export default NavbarLinks