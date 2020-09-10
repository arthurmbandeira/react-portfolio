import React from "react";
import styled from "styled-components";

const RowStyle = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  align-items: ${props => props.flex.alignItems};
  justify-content: ${props => props.flex.justifyContent};
  @media(max-width: 575px) {
    margin-left: 0;
    margin-right: 0;
    flex-wrap: wrap;
  }
`;

const Row = ({ justifyContent, alignItems, classes, children }) => {
  return (
    <RowStyle className={classes} flex={{ justifyContent, alignItems }}>
      {children}
    </RowStyle>
  );
}

export default Row;
