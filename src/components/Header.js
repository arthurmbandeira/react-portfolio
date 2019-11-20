import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Menu';
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "./layout/Container";

const HeaderStyle = styled.header`
  font-family: ${props => props.theme.ffAnonymous};
  margin-bottom: 20px;
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
  border-bottom: 1px solid ${props => props.theme.gray2};
  padding: 10px 0;
`;

const Header = (props) => {
  return (
    <HeaderStyle>
      <Container small>
        <HeaderContent>
          <a href="/">
            <SiteTitle>
              <FontAwesomeIcon icon="code" size="lg" />
              <h1>Arthur Bandeira</h1>
            </SiteTitle>
          </a>
          <Nav switchTheme={props.switchTheme} setLanguage={props.setLanguage} />
        </HeaderContent>
      </Container>
    </HeaderStyle>
  );
}

export default injectIntl(Header);
