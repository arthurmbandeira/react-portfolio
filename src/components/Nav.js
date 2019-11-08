import React, { Component } from "react";
import '../scss/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
          <a href="#">+</a>
          {/* <a href="#"><Trans>artigos</Trans></a>
          <a href="#"><Trans>portfolio</Trans></a>
          <a href="#"><Trans>contato</Trans></a> */}
          <a href="#">portfolio</a>
          <a href="#">contato</a>
      </nav>
    )
  }
}

export default Nav;