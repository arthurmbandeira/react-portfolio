import React from "react";
import styled from "styled-components";

const RowStyle = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  align-items: ${props => props.flex.alignItems};
  justify-content: ${props => props.flex.justifyContent};
`;

const Row = (props) => {
  const { justifyContent, alignItems } = props;
  return (
    <RowStyle className={props.classes} flex={{ justifyContent, alignItems }}>
      {props.children}
    </RowStyle>
  );
}

export default Row;
