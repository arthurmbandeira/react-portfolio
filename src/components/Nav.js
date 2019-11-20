import React, { Component } from "react";
import { FormattedMessage } from "react-intl"
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeLink  from "./ThemeLink";
import LanguageLink  from "./LanguageLink";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MoreLink from "./MoreLink";

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    font-size: 16px;
    color: ${props => props.theme.gray1};
  }
`;

const LinkStyled = styled(Link)`
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
        <MoreLink />
        <LinkStyled to="/perfil"><FormattedMessage id="menu-profile" /></LinkStyled>
        <LinkStyled to="/portfolio"><FormattedMessage id="menu-portfolio" /></LinkStyled>
        <LinkStyled to="/contato"><FormattedMessage id="menu-contact" /></LinkStyled>
        <LanguageLink setLanguage={this.props.setLanguage} />
        <ThemeLink switchTheme={this.props.switchTheme} />
      </NavStyled>
    )
  }
}

export default Nav;