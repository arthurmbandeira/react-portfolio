import React from "react";
import styled from "styled-components";
import Row from "./layout/Row";
import Col from "./layout/Col";

const Title = styled.h2`
  margin: 0 0 10px;
  padding: 0 0 5px;
  border-bottom: 1px solid ${props => props.theme.gray2};
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffAnonymous};
  font-size: 23px;
  text-align: left;
`;

const WorkRow = (props) => {
  return (
    <Row>
      <Col>
        <Title>{props.title}</Title>
      </Col>
    </Row>
  );
}

export default WorkRow;
