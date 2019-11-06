import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';
import '../scss/Header.scss';

class Header extends Component {
  render() {
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
    )
  }
}

export default Header;