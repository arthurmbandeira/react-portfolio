import React from "react";
import styled from "styled-components";

const SquareBoxStyle = styled.div`
  background-color: ${props => props.theme.gray3};
  color: ${props => props.theme.gray1};
  text-align: left;
  padding: 20px 30px;
  height: ${props => props.height};
  font-family: ${props => props.theme.ffMontserrat};

  h2 {
    font-size: 30px;
    margin: 0 auto 10px;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
    white-space: pre-line;
    margin: 5px auto;
  }
`;

const SquareBox = (props) => {
  return (
    <SquareBoxStyle height={props.height}>
      {props.children}
    </SquareBoxStyle>
  );
}

export default SquareBox;