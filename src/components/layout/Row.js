import React from "react";
import styled from "styled-components";

const RowStyle = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
`;

const Row = (props) => {
  return (
    <RowStyle>
      {props.children}
    </RowStyle>
  );
}

export default Row;
