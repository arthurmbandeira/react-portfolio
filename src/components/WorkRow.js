import React from "react";
import styled from "styled-components";
import Row from "./layout/Row";
import Col from "./layout/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { injectIntl } from "react-intl";
import BoltLink from "./BoltLink";

const WorkRowStyled = styled.div`
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
  @media (max-width: 575px) {
    font-size: 18px;
    margin-left: ${props => props.mlXs};
  }
`;

const Company = styled.a`
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffMontserrat};
  font-size: 16px;
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

const alignItems = 'flex-start';

const WorkRow = ({ title, start, end, company, switchTheme, isDarkMode, setDarkMode, companyUrl }) => (
  <WorkRowStyled>
    <Row classes="justify-content-between" flex={alignItems}>
      <Col classes="d-flex" flex={alignItems}>
        <Title>{title}</Title>
        <MoreButton>
          <FontAwesomeIcon icon="plus-square" />
        </MoreButton>
      </Col>
      <Col classes="w-auto">
        <Title mlXs="10px">
          {start} - {end ? end : <BoltLink switchTheme={switchTheme} isDarkMode={isDarkMode} setDarkMode={setDarkMode} />}
        </Title>
      </Col>
    </Row>
    <Row>
      <Col>
        <Company href={companyUrl} target="_blank" rel="noopener noreferrer">
          {company}
        </Company>
      </Col>
    </Row>
  </WorkRowStyled>
);


export default injectIntl(WorkRow);
