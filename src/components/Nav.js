import React, { Component } from "react";
import '../scss/Nav.scss';
import { Trans } from "react-i18next";

class Nav extends Component {
  render() {
    return (
      <nav>
          <a href="#">+</a>
          <a href="#"><Trans>artigos</Trans></a>
          <a href="#"><Trans>portfolio</Trans></a>
          <a href="#"><Trans>contato</Trans></a>
          {/* <a href="#">{t('portfolio')}</a>
          <a href="#">{t('contato')}</a> */}
          {/* <a href="">Cursos</a> */}
      </nav>
    )
  }
}

export default Nav;