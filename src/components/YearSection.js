import React from "react";
import styled from "styled-components";
import Row from "./layout/Row";
import Col from "./layout/Col";

const YearTitle = styled.h2`
  font-size: 28px;
  font-family: ${props => props.theme.ffAnonymous};
  text-align: center;
  color: ${props => props.theme.gray1};
  margin: 10px auto;
  &::after {
    content: '-';
    font-weight: bolder;
    margin-left: 10px;
  }
  &::before {
    content: '-';
    font-weight: bolder;
    margin-right: 10px;
  }
`;

const YearSection = (props) => {
  return (
    <Row>
      <Col>
        <YearTitle>{props.year}</YearTitle>
      </Col>
    </Row>
  );
}

export default YearSection;
