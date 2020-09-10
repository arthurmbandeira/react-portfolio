import React from "react";
import styled from "styled-components";

const SquareBoxStyle = styled.div`
  background-color: ${props => props.theme.gray3};
  color: ${props => props.theme.gray1};
  text-align: left;
  padding: 20px 30px;
  height: ${props => props.height};
  font-family: ${props => props.theme.ffMontserrat};
  transition: background-color ease .3s;

  h2 {
    font-size: 30px;
    margin: 0 auto 10px;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
    white-space: pre-line;
    margin: 0 auto 10px;
  }
  @media (max-width: 767px) {
    height: ${props => props.heightMd};
    padding: 15px;
  }
  @media (max-width: 575px) {
    height: auto;
    padding: 15px;
  }
`;

const SquareBox = ({ children, height, heightMd }) => {
  return (
    <SquareBoxStyle height={height} heightMd={heightMd}>
      {children}
    </SquareBoxStyle>
  );
}

export default SquareBox;