import React, { Component } from "react";
import { FormattedMessage } from "react-intl"
import '../scss/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
          <a href="#">+</a>
          <a href="#"><FormattedMessage id="menu-profile" /></a>
          <a href="#"><FormattedMessage id="menu-articles" /></a>
          <a href="#"><FormattedMessage id="menu-portfolio" /></a>
          <a href="#"><FormattedMessage id="menu-contact" /></a>
      </nav>
    )
  }
}

export default Nav;