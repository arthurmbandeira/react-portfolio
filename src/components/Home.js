import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "./layout/Container";
import Row from "./layout/Row";
import Col from "./layout/Col";
import SectionTitle from "./SectionTitle";
import WorkRow from "./WorkRow";
import SectionSubtitle from "./SectionSubtitle";
import ProfilePic from "./ProfilePic";

const me = 'img/me.jpeg';

const HomeStyle = styled.main`
  font-family: ${props => props.theme.ffMontserrat};
`;

const RoundedBox = styled.div`
  background-color: ${props => props.theme.gray3};
  color: ${props => props.theme.gray1};
  text-align: left;
  padding: 20px 30px;
  height: ${props => props.height};
  font-family: ${props => props.theme.ffMontserrat};

  h2 {
    font-size: 30px;
    margin: 0 auto 10px;
  }
  p {
    font-size: 14px;
    line-height: 1.4;
    white-space: pre-line;
    margin: 5px auto;
  }
`;

const Home = (props) => {
  const { intl } = props;
  const about = intl.formatMessage({id: 'about'}).split(/(?:\r\n|\r|\n)/g);
  return (
    <HomeStyle>
      <Container small>
        <Row>
          <Col>
            <RoundedBox height="200px">
              <h2>Oi</h2>
              {about.map((line, key) => <p key={key}>{line}</p>)}
            </RoundedBox>
          </Col>
          <Col classes="w-auto">
            <ProfilePic pic={me} size="200px" />
          </Col>
        </Row>
        <SectionTitle title={intl.formatMessage({id: 'experiences'})} />
        
        <SectionSubtitle title={intl.formatMessage({id: 'work.name'})} />
        
        <WorkRow title={intl.formatMessage({id: 'work.contents.objective.role'})} company={intl.formatMessage({id: 'work.contents.objective.company'})} companyUrl={intl.formatMessage({id: 'work.contents.objective.url'})} start={intl.formatMessage({id: 'work.contents.objective.start'})} description={intl.formatMessage({id: 'work.contents.objective.description'})} switchTheme={props.switchTheme} isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />

        <WorkRow title={intl.formatMessage({id: 'work.contents.escada.role'})} company={intl.formatMessage({id: 'work.contents.escada.company'})} companyUrl={intl.formatMessage({id: 'work.contents.escada.url'})} start={intl.formatMessage({id: 'work.contents.escada.start'})} end={intl.formatMessage({id: 'work.contents.escada.end'})} description={intl.formatMessage({id: 'work.contents.escada.description'})} switchTheme={props.switchTheme} />

        <SectionSubtitle title={intl.formatMessage({id: 'internship.name'})} />

        <WorkRow title={intl.formatMessage({id: 'internship.contents.coderun.role'})} company={intl.formatMessage({id: 'internship.contents.coderun.company'})} companyUrl={intl.formatMessage({id: 'internship.contents.coderun.url'})} start={intl.formatMessage({id: 'internship.contents.coderun.start'})} end={intl.formatMessage({id: 'internship.contents.coderun.end'})} description={intl.formatMessage({id: 'internship.contents.coderun.description'})} switchTheme={props.switchTheme} />

      </Container>
    </HomeStyle>
  );
}

export default injectIntl(Home);