import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "./layout/Container";
import Row from "./layout/Row";
import Col from "./layout/Col";
import Main from "./layout/Main";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import SquareBox from "./SquareBox";
import ProfilePic from "./ProfilePic";

const ProfileStyle = styled(Main)`
  font-family: ${props => props.theme.ffMontserrat};
`;

const Profile = (props) => {
  const { intl } = props;
  const about = intl.formatMessage({id: 'about'}).split(/(?:\r\n|\r|\n)/g);
  const me = 'img/me.jpeg';
  return (
    <ProfileStyle>
      <Container small>
        <SectionTitle title={intl.formatMessage({id: 'menu-profile'})} />
        <Row>
          <Col>
            <SquareBox height="200px">
              <h2>Oi</h2>
              {about.map((line, key) => <p key={key}>{line}</p>)}
            </SquareBox>
          </Col>
          <Col classes="w-auto">
            <ProfilePic pic={me} size="200px" />
          </Col>
        </Row>
        <SectionTitle title={intl.formatMessage({id: 'experiences'})} />
        
        <SectionSubtitle title={intl.formatMessage({id: 'work.name'})} />
      </Container>
    </ProfileStyle>
  );
}

export default injectIntl(Profile);