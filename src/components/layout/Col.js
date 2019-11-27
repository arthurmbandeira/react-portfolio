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
  justify-content: ${props => props.flex.justifyContent};
  align-items: ${props => props.flex.alignItems};
`;

const Col = (props) => {
  const { justifyContent, alignItems } = props;
  return (
    <ColStyle className={props.classes} flex={{ justifyContent, alignItems }}>
      {props.children}
    </ColStyle>
  );
}

export default Col;
