import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  max-width: 1200px;
  padding: 0 15px;
  margin: auto;

  &.small {
    max-width: 800px;
  }

  &.full {
    max-width: 100%;
  }
`;

const Container = (props) => {
  const { small, full } = props;

  return (
    <ContainerStyle className={(small ? 'small' : full ? 'full' : '')}>
      {props.children}
    </ContainerStyle>
  );
}

export default Container;