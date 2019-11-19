import React, { Component } from "react";
import { FormattedMessage } from "react-intl"
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeLink  from "./ThemeLink";
import LanguageLink  from "./LanguageLink";

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    font-size: 16px;
    color: ${props => props.theme.gray1};
  }
`;

const LinkStyled = styled.a`
  text-transform: lowercase;
  margin-left: 12px;
  &:hover {
    text-decoration: underline;
  } 
  &:first-of-type {
    text-decoration: none;
  }
`;


class Nav extends Component {
  render() {
    return (
      <NavStyled>
        <LinkStyled href="">+</LinkStyled>
        <LinkStyled href=""><FormattedMessage id="menu-profile" /></LinkStyled>
        {/* <LinkStyled href=""><a href=""><FormattedMessage id="menu-articles" /></a></LinkStyled> */}
        <LinkStyled href=""><a href=""><FormattedMessage id="menu-portfolio" /></a></LinkStyled>
        <LinkStyled href=""><a href=""><FormattedMessage id="menu-contact" /></a></LinkStyled>
        <LanguageLink setLanguage={this.props.setLanguage} />
        <ThemeLink switchTheme={this.props.switchTheme} />
      </NavStyled>
    )
  }
}

export default Nav;