import React from "react";
import styled from "styled-components";

const MainStyle = styled.main`
  flex-grow: 1;
  margin-top: 80px;
  @media (max-width: 575px) {
    margin-top: 108px;
  }
`;

const Main = (props) => {
  return (
    <MainStyle>
      {props.children}
    </MainStyle>
  );
}

export default Main;
