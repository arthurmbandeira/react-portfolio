import React, { Component } from "react";
import { FormattedMessage } from "react-intl"
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeLink  from "./ThemeLink";

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
      font-size: 16px;
      text-transform: lowercase;
      margin-left: 12px;
      color: ${props => props.theme.gray1};
      &:hover {
          text-decoration: underline;
      }
      &:first-of-type {
        text-decoration: none;
      }
  }
`;


class Nav extends Component {
  render() {
    return (
      <NavStyled>
          <a href="">+</a>
          <a href=""><FormattedMessage id="menu-profile" /></a>
          {/* <a href=""><FormattedMessage id="menu-articles" /></a> */}
          <a href=""><FormattedMessage id="menu-portfolio" /></a>
          <a href=""><FormattedMessage id="menu-contact" /></a>
          <ThemeLink switchTheme={this.props.switchTheme} />
      </NavStyled>
    )
  }
}

export default Nav;