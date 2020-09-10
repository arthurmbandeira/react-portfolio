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
  @media(max-width: 575px) {
    padding-left: 0;
    padding-right: 0;
    /* flex-basis: 100%; */
    align-items: flex-start;
  }
`;

const Col = ({ justifyContent, alignItems, classes, children }) => {
  return (
    <ColStyle className={classes} flex={{ justifyContent, alignItems }}>
      {children}
    </ColStyle>
  );
}

export default Col;
