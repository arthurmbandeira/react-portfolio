import React from "react";
import styled from "styled-components";
import Row from "./layout/Row";
import Col from "./layout/Col";

const Title = styled.h3`
  margin: 20px 0 10px;
  padding: 0 0 5px;
  color: ${props => props.theme.gray1};
  font-family: ${props => props.theme.ffAnonymous};
  font-size: 22px;
  text-align: left;
`;

const SectionSubtitle = (props) => {
  return (
    <Row>
      <Col>
        <Title>{props.title}</Title>
      </Col>
    </Row>
  );
}

export default SectionSubtitle;
