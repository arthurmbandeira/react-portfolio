import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "./layout/Container";
import Row from "./layout/Row";
import Col from "./layout/Col";
import SectionTitle from "./SectionTitle";

const HomeStyle = styled.main`
  font-family: ${props => props.theme.ffMontserrat};
`;

function Home(props) {
  const { intl } = props;
  return (
    <HomeStyle>
      <Container small>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <SectionTitle title={intl.formatMessage({id: 'resume'})} />
        </Row>
      </Container>
    </HomeStyle>
  );
}

export default injectIntl(Home);