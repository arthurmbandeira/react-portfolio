import React from "react";
import styled from "styled-components";
import Row from "./layout/Row";
import Col from "./layout/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { injectIntl } from "react-intl";
// import BoltLink from "./BoltLink";

const PortfolioRowStyled = styled.div`
  margin: 5px 0 20px;
  padding-bottom: 5px;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.gray2};
`;

const Title = styled.h3`
  margin: 0;
  padding: 0 0 5px;
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffAnonymous};
  font-size: 20px;
  text-align: left;
`;

const Company = styled.a`
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffMontserrat};
  font-size: 15px;
  margin: 0;
`;

const MoreButton = styled.button`
  margin: 0 0 0 5px;
  cursor: pointer;
  color: ${props => props.theme.gray1};
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  outline: none;
  font-size: inherit;
  display: none;
`;

const PortfolioRow = (props) => {
  return (
    <PortfolioRowStyled>
      <Row classes="justify-content-between align-items-center">
        <Col classes="w-auto" justifyContent="space-between">

        </Col>
        <Col classes="d-flex align-items-center">
          <Title>{props.title}</Title>
          <MoreButton>
            <FontAwesomeIcon icon="plus-square"/>
          </MoreButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <Company href={props.companyUrl} target="_blank" rel="noopener noreferrer">
              {props.company}
          </Company>
        </Col>
      </Row>
    </PortfolioRowStyled>
  );
}

export default injectIntl(PortfolioRow);
