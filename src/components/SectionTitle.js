import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  min-height: 1px;
  display: block;
  text-align: left;
  color: ${props => props.theme.gray1};

  h2 {
    margin: 0 0 10px;
    padding: 0 0 5px;
    border-bottom: 1px solid ${props => props.theme.gray2};
    font-family: ${props => props.theme.ffAnonymous};
    font-size: 23px;
  }
`;

const SectionTitle = (props) => {
  return (
    <SectionTitleStyle>
      <h2>
        {props.title}
      </h2>
    </SectionTitleStyle>
  );
}

export default SectionTitle;
