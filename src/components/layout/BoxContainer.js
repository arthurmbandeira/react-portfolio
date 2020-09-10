import React from "react";
import styled from "styled-components";

const BoxContainerStyle = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const BoxContainer = ({ children }) => {
  return (
    <BoxContainerStyle>
      {children}
    </BoxContainerStyle>
  );
}

export default BoxContainer;
