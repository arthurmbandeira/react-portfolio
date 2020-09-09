import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Nav from '../Menu';
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "./Container";

const FooterStyle = styled.footer`
  font-family: ${props => props.theme.ffMontserrat};
  margin-bottom: 20px;
`;

const FooterContent = styled.div`
  padding: 10px 0;
  text-align: center;
  color: ${props => props.theme.gray1};
  p {
    margin: 0;
  }
  svg {
    color: #d02d2b;
  }
`;

const Footer = (props) => {
  const { intl } = props;
  return (
    <FooterStyle>
      <Container small>
        <FooterContent>
          <p>
            {intl.formatMessage({id: 'made-with'})}&nbsp;
            <FontAwesomeIcon icon="heart" />
          </p>
        </FooterContent>
      </Container>
    </FooterStyle>
  );
}

export default injectIntl(Footer);
