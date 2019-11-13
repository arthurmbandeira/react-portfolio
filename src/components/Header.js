import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import '../scss/Header.scss';
import { injectIntl } from "react-intl";


function HeaderIntl(setLanguage) {
  return (
    <header>
      <div className="container container-small">
        <div className="header-content">
          <a href="/">
            <div className="site-title">
              <FontAwesomeIcon icon="code" size="lg" />
              <h1>Arthur Bandeira</h1>
            </div>
          </a>
          <Nav />
        </div>
      </div>
    </header>
  );
}

const Header = injectIntl(HeaderIntl);

export default Header;