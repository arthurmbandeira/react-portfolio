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
  @media(max-width: 900px) {
    &,
    &.small,
    &.full {
      max-width: 720px;
    }
  }
  @media(max-width: 767px) {
    &,
    &.small,
    &.full {
      max-width: 100%;
      padding: 0 30px;
    }
  }
  @media(max-width: 575px) {
    &,
    &.small,
    &.full {
      padding: 0 15px;
    }
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