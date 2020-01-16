import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Col from "../layout/Col";
import Main from "../layout/Main";
import SectionTitle from "../SectionTitle";

const PortfolioStyle = styled(Main)`
  font-family: ${props => props.theme.ffMontserrat};
`;

const Portfolio = (props) => {
  const { intl } = props;
  return (
    <PortfolioStyle>
      <Container small>
        <SectionTitle title={intl.formatMessage({id: 'menu-portfolio'})} />
      </Container>
    </PortfolioStyle>
  );
}

export default injectIntl(Portfolio);