import React, { useState } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";

const LinkStyled = styled.a`
  cursor: pointer;
`;

const MoreLink = (props) => {

  // const [isDarkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    console.log('moarrrr');
  }

  // const { intl } = props;
  return (
    <LinkStyled onClick={handleClick} title="">
      +
    </LinkStyled>
  )
}

export default injectIntl(MoreLink);
