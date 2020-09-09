import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Col from "../layout/Col";
import Main from "../layout/Main";
import BoxContainer from "../layout/BoxContainer";
import SectionTitle from "../SectionTitle";
import WorkRow from "../WorkRow";
import SectionSubtitle from "../SectionSubtitle";
import ProfilePic from "../ProfilePic";
import SquareBox from "../SquareBox";
import ContactBox from "../ContactBox";

const me = 'img/me.jpeg';

const HomeStyle = styled(Main)`
  font-family: ${props => props.theme.ffMontserrat};
`;

const contacts = [
  {
    title: 'Email',
    url: 'mailto:arthurmbandeira@gmail.com',
    icon: ['fas', 'envelope']
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arthurmbandeira',
    icon: ['fab', 'linkedin']
  },
  {
    title: 'GitHub',
    url: 'https://github.com/arthurmbandeira',
    icon: ['fab', 'github-alt']
  }
];

const Home = ({ intl, switchTheme, isDarkMode, setDarkMode }) => {
  // const { intl } = props;
  const about = intl.formatMessage({id: 'about'}).split(/(?:\r\n|\r|\n)/g);
  return (
    <HomeStyle>
      <Container small>
        <Row>
          <Col>
            <SquareBox height="200px">
              <h2>{intl.formatMessage({id: 'hello'})}</h2>
              {about.map((line, key) => <p key={key}>{line}</p>)}
            </SquareBox>
          </Col>
          <Col classes="w-auto">
            <ProfilePic pic={me} size="200px" />
          </Col>
        </Row>
        <SectionTitle title={intl.formatMessage({id: 'experiences'})} />
        
        <SectionSubtitle title={intl.formatMessage({id: 'work.name'})} />
        
        <WorkRow title={intl.formatMessage({id: 'work.contents.objective.role'})}
                 company={intl.formatMessage({id: 'work.contents.objective.company'})}
                 companyUrl={intl.formatMessage({id: 'work.contents.objective.url'})}
                 start={intl.formatMessage({id: 'work.contents.objective.start'})}
                 description={intl.formatMessage({id: 'work.contents.objective.description'})}
                 switchTheme={switchTheme}
                 isDarkMode={isDarkMode}
                 setDarkMode={setDarkMode} />

        <WorkRow title={intl.formatMessage({id: 'work.contents.escada.role'})}
                 company={intl.formatMessage({id: 'work.contents.escada.company'})}
                 companyUrl={intl.formatMessage({id: 'work.contents.escada.url'})}
                 start={intl.formatMessage({id: 'work.contents.escada.start'})}
                 end={intl.formatMessage({id: 'work.contents.escada.end'})}
                 description={intl.formatMessage({id: 'work.contents.escada.description'})}
                 switchTheme={switchTheme} />

        <SectionSubtitle title={intl.formatMessage({id: 'internship.name'})} />

        <WorkRow title={intl.formatMessage({id: 'internship.contents.coderun.role'})}
                 company={intl.formatMessage({id: 'internship.contents.coderun.company'})}
                 companyUrl={intl.formatMessage({id: 'internship.contents.coderun.url'})}
                 start={intl.formatMessage({id: 'internship.contents.coderun.start'})}
                 end={intl.formatMessage({id: 'internship.contents.coderun.end'})}
                 description={intl.formatMessage({id: 'internship.contents.coderun.description'})}
                 switchTheme={switchTheme} />

        <SectionTitle title={intl.formatMessage({id: 'contact.title'})} />

        <BoxContainer>
          {contacts.map((item, key) => <ContactBox key={key} title={item.title} url={item.url} icon={item.icon} /> )}
        </BoxContainer>
      </Container>
    </HomeStyle>
  );
}

export default injectIntl(Home);