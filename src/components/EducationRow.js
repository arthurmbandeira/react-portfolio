import React from "react";
import styled from "styled-components";
import Row from "./layout/Row";
import Col from "./layout/Col";
import { injectIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoltLink from "./BoltLink";

const EducationRowStyled = styled.div`
  margin: 5px 0 20px;
  padding-bottom: 5px;
  text-align: left;
  border-bottom: 1px solid ${props => props.theme.gray2};
`;

const Title = styled.h3`
  margin: 0;
  padding: 0 0 10px;
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffAnonymous};
  font-size: 20px;
  text-align: left;
`;

const Work = styled.div`
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffMontserrat};
  font-size: 15px;
  display: flex;
  align-items: center;
  svg.fa-lg {
    margin-right: 8px;
    width: 20px;
  }
`;

const University = styled.div`
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffMontserrat};
  font-size: 15px;
  /* font-weight: bold; */
  margin: 10px 0 0;
  svg.fa-lg {
    margin-right: 8px;
    width: 20px;
  }
`;

const EducationRow = (props) => {
  return (
    <EducationRowStyled>
      <Row classes="justify-content-between align-items-center">
        <Col classes="d-flex align-items-center">
          <Title>{props.title}</Title>
        </Col>
        <Col classes="w-auto">
          <Title>{props.start} - {props.end ? props.end : <BoltLink switchTheme={props.switchTheme} isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />}</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Work>
            <FontAwesomeIcon icon="book" size="lg" />
            {props.work}
          </Work>
        </Col>
      </Row>
      <Row>
        <Col>
          <University>
            <FontAwesomeIcon icon="university" size="lg" />
            {props.university}
          </University>
        </Col>
      </Row>
    </EducationRowStyled>
  );
}

export default injectIntl(EducationRow);
