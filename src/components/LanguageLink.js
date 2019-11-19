import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl } from "react-intl";
import supportedLanguages from "./supportedLanguages";

const LinkStyled = styled.a`
  cursor: pointer;
  margin-left: 12px;
  text-decoration: none;
  position: relative;
  &:hover {
    text-decoration: none;
  }
  svg {
    margin-left: 5px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  
  width: 42px;
  left: -6px;
  background-color: ${props => props.theme.bg};
  border: 1px solid transparent;
  border-top-color: transparent;
  padding: 0 5px;
  height: 0;
  /* transform: scale(0); */
  top: 20px;
  overflow: hidden;
  /* visibility: hidden; */
  transition: all ease .5s;

  &.show {
    border-color: ${props => props.theme.gray2};
    height: 77px;
    /* visibility: visible; */
    /* transition: all ease 1s; */
    /* transform: scale(1); */
  }

  a {
    display: block;
    padding: 4px 0;
    border-bottom: 1px solid ${props => props.theme.gray2};
    &:last-of-type {
      border-bottom-color: transparent;
    }
  }
`;

class LanguageLink extends Component {
  constructor(props) {
    super(props);
    this.state = { showLanguages: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      showLanguages: !state.showLanguages
    }));
  }

  getLanguageTitle(locale) {
    switch (locale) {
      case 'pt':
        return 'Português';
      case 'en':
        return 'English';
      case 'fr':
        return 'Français';
      default:
        break;
    }
  }

  render() {
    const { intl } = this.props;
    return (
      <LinkStyled onClick={this.handleClick}>
        {intl.locale}
        <FontAwesomeIcon icon={"chevron-down"} size="xs" />
        <Dropdown className={this.state.showLanguages ? 'show' : ''}>
          {Object.keys(supportedLanguages).map((key) => <a onClick={() => {this.props.setLanguage(key)}} title={this.getLanguageTitle(key)}>{key}</a> )}
        </Dropdown>
      </LinkStyled>
    )
  }
}

export default injectIntl(LanguageLink);