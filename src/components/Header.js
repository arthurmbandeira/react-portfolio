import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import { injectIntl } from "react-intl";
import styled from "styled-components";

const HeaderStyle = styled.header`
  font-family: ${props => props.theme.ffAnonymous};

  .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${props => props.theme.gray2};
      padding: 10px 0;
  }

  .site-title {
      display: flex;
      align-items: center;
      color: ${props => props.theme.gray1};
      h1 {
          font-size: 28px;
          margin: 5px 0 5px 10px;
      }
  }
`;

function HeaderIntl(props) {
  return (
    <HeaderStyle>
      <div className="container container-small">
        <div className="header-content">
          <a href="/">
            <div className="site-title">
              <FontAwesomeIcon icon="code" size="lg" />
              <h1>Arthur Bandeira</h1>
            </div>
          </a>
          <Nav switchTheme={props.switchTheme} />
        </div>
      </div>
    </HeaderStyle>
  );
}

const Header = injectIntl(HeaderIntl);

export default Header;