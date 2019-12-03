import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "./layout/Container";
import Row from "./layout/Row";
import Col from "./layout/Col";
import Main from "./layout/Main";
import SectionTitle from "./SectionTitle";

const ContactStyle = styled(Main)`
  font-family: ${props => props.theme.ffMontserrat};
`;

const Contact = (props) => {
  const { intl } = props;
  return (
    <ContactStyle>
      <Container small>
        <SectionTitle title={intl.formatMessage({id: 'menu-contact'})} />
      </Container>
    </ContactStyle>
  );
}

export default injectIntl(Contact);