import React from "react";
import { FormattedMessage } from "react-intl"
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeLink from "./ThemeLink";
import LanguageLink from "./LanguageLink";
import MoreLink from "./MoreLink";

const MenuStyled = styled.nav`
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

const Menu = (props) => {
  return (
    <MenuStyled>
      <MoreLink />
      <LinkStyled to="/perfil"><FormattedMessage id="menu-profile" /></LinkStyled>
      <LinkStyled to="/portfolio"><FormattedMessage id="menu-portfolio" /></LinkStyled>
      <LinkStyled to="/contato"><FormattedMessage id="menu-contact" /></LinkStyled>
      <LanguageLink setLanguage={props.setLanguage} />
      <ThemeLink switchTheme={props.switchTheme} />
    </MenuStyled>
  )
}

export default Menu;