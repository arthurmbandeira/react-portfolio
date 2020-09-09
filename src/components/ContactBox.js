import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { injectIntl } from "react-intl";

const ContactBoxStyled = styled.div`
  width: 150px;
  margin: 0 auto 15px;
`;

const Box = styled.div`
  padding: 20px;
  text-align: center;
  border: 1px solid transparent;
  transition: all ease .3s;
  color: ${props => props.theme.gray1};
  &:hover {
    border: 1px solid ${props => props.theme.gray1};
  }
`;

const Title = styled.h3`
  margin: 5px auto 0;
  padding: 0 0 5px;
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffAnonymous};
  font-size: 20px;
`;

const ContactBox = ({ title, icon, url }) => {
  return (
    <ContactBoxStyled>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Box>
          <FontAwesomeIcon icon={icon} size="3x" />
          <Title>{title}</Title>
        </Box>
      </a>
    </ContactBoxStyled>
  );
}

export default injectIntl(ContactBox);
