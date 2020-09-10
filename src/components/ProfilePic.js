import React from "react";
import styled from "styled-components";

const ProfilePicStyle = styled.div`
  border: 3px solid ${props => props.theme.gray1};
  width: ${props => props.size};
  height: ${props => props.size};
  padding: calc(${props => props.size} * 0.05);
  overflow: hidden;
  display: flex;
  margin: auto;
  margin-right: 0;
  img {
    object-fit: cover;
    object-position: center -15px;
  }
  @media (max-width: 767px) {
    height: ${props => props.heightMd};
  }
  @media (max-width: 575px) {
    display: none;
  }
`;

const ProfilePic = ({ size, pic, heightMd }) => {
  return (
    <ProfilePicStyle size={size} heightMd={heightMd}>
      <img className="img-fluid" src={pic} alt="Hey!"/>
    </ProfilePicStyle>
  );
}

export default ProfilePic;
