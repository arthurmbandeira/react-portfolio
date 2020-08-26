import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from './Menu';
import Container from "./layout/Container";

const HeaderStyle = styled.header`
  font-family: ${props => props.theme.ffAnonymous};
  background-color: ${props => props.theme.bg};
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: background-color ease .3s;
`;

const SiteTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.gray1};
  h1 {
      font-size: 28px;
      margin: 5px 0 5px 10px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid transparent;
  border-bottom: 1px solid ${props => props.theme.gray2};
  padding: 10px 0;
  margin-bottom: 20px;
`;

const Header = (props) => {
  return (
    <HeaderStyle>
      <Container small>
        <HeaderContent>
          <Link to="/">
            <SiteTitle>
              <FontAwesomeIcon icon="code" size="lg" />
              <h1>Arthur Bandeira</h1>
            </SiteTitle>
          </Link>
          <Menu switchTheme={props.switchTheme} setLanguage={props.setLanguage} />
        </HeaderContent>
      </Container>
    </HeaderStyle>
  );
}

export default injectIntl(Header);
