import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl } from "react-intl";

const LinkStyled = styled.a`
  cursor: pointer;
  transition: display ease .3s;
`;

class ThemeLink extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isDarkMode: !state.isDarkMode
    }));
    this.props.switchTheme(this.state.isDarkMode ? 'dark' : 'main');
  }

  render() {
    const { intl } = this.props;
    return (
      <LinkStyled onClick={this.handleClick} title={this.state.isDarkMode ? intl.formatMessage({ id: 'dark-mode' }) : intl.formatMessage({ id: 'light-mode' })}>
          <FontAwesomeIcon icon={this.state.isDarkMode ? 'moon' : 'sun'} />
      </LinkStyled>
    )
  }
}

export default injectIntl(ThemeLink);