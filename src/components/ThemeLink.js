import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl } from "react-intl";

const LinkStyled = styled.a`
  cursor: pointer;
  transition: display ease .3s;
  margin-left: 12px;
`;

const ThemeLink = (props) => {

  const [isDarkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    setDarkMode(!isDarkMode);
    props.switchTheme(isDarkMode ? 'dark' : 'main');
  }

  const { intl } = props;
  return (
    <LinkStyled onClick={handleClick} title={isDarkMode ? intl.formatMessage({ id: 'dark-mode' }) : intl.formatMessage({ id: 'light-mode' })}>
      <FontAwesomeIcon icon={isDarkMode ? 'moon' : 'sun'} />
    </LinkStyled>
  )
}

export default injectIntl(ThemeLink);
