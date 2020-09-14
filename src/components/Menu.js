import React from "react";
import { FormattedMessage } from "react-intl"
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeLink from "./ThemeLink";
import LanguageLink from "./LanguageLink";

const MenuStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    font-size: 16px;
    color: ${props => props.theme.gray1};
  }
  @media (max-width: 575px) {
    margin-top: 10px;
    justify-content: space-between;
    width: 100%;
    & > a:last-of-type {
      flex-grow: 1;
      text-align: right;
    }
  }
`;

const LinkStyled = styled(Link)`
  text-transform: lowercase;
  margin-left: 12px;
  &:hover {
    text-decoration: underline;
  } 
  @media (max-width: 575px) {
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const Menu = (props) => {
  return (
    <MenuStyled>
      {/* <MoreLink /> */}
      <LinkStyled to="/perfil"><FormattedMessage id="profile.title" /></LinkStyled>
      {/* <LinkStyled to="/portfolio"><FormattedMessage id="menu-portfolio" /></LinkStyled> */}
      <LinkStyled to="/contato"><FormattedMessage id="contact.title" /></LinkStyled>
      <LanguageLink setLanguage={props.setLanguage} />
      <ThemeLink switchTheme={props.switchTheme} />
    </MenuStyled>
  )
}

export default Menu;