import React from "react";
import styled from "styled-components";

const ColStyle = styled.div`
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  display: block;
`;

const Col = (props) => {
  return (
    <ColStyle className={props.classes}>
      {props.children}
    </ColStyle>
  );
}

export default Col;
