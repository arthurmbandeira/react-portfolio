import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl } from "react-intl";
import supportedLanguages from "./helpers/supportedLanguages";
import useOuterClickNotifier from "./helpers/useOuterClickNotifier";

const LinkStyled = styled.a`
  cursor: pointer;
  margin-left: 12px;
  text-decoration: none;
  position: relative;
  &:hover {
    text-decoration: none;
  }
  svg {
    margin-left: 3px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  
  width: 42px;
  left: -6px;
  background-color: ${props => props.theme.bg};
  border: 1px solid transparent;
  border-color: ${props => props.theme.gray2};
  padding: 0 5px;
  max-height: 0;
  top: 20px;
  overflow: hidden;
  transition: all ease-out .5s;
  visibility: hidden;
  
  &.show {
    visibility: visible;
    max-height: 200px;
    transition: all ease-in .5s;
  }

  div {
    display: block;
    padding: 4px 0;
    border-bottom: 1px solid ${props => props.theme.gray2};
    &:last-of-type {
      border-bottom-color: transparent;
    }
  }
`;

const LanguageLink = (props) => {
  const [showLanguages, setShowLanguages] = useState(false);

  const handleClick = () => {
    setShowLanguages(!showLanguages);
  }

  const getLanguageTitle = (locale) => {
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

  const { intl } = props;
  const innerRef = useRef(null);

  useOuterClickNotifier(
    e => setShowLanguages(false),
    innerRef
  );

  return (
    <LinkStyled onClick={handleClick} ref={innerRef}>
      {intl.locale}
      <FontAwesomeIcon icon={"chevron-down"} size="xs" />
      <Dropdown className={showLanguages ? 'show' : ''}>
        {Object.keys(supportedLanguages).map((key, i) => <div key={i} onClick={() => {props.setLanguage(key)}} title={getLanguageTitle(key)}>{key}</div> )}
      </Dropdown>
    </LinkStyled>
  )
}

export default injectIntl(LanguageLink);
