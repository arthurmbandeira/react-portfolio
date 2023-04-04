import React, { useMemo } from "react";
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
  const about = intl.formatMessage({ id: 'about' }).split(/(?:\r\n|\r|\n)/g);
  const { messages } = intl;
  return useMemo(() => (
    <HomeStyle>
      <Container small>
        <Row>
          <Col>
            <SquareBox height="200px" heightMd="245px">
              <h2>{intl.formatMessage({ id: 'hello' })}</h2>
              {about.map((line, key) => <p key={key}>{line}</p>)}
            </SquareBox>
          </Col>
          <Col classes="w-auto w-xs-100">
            <ProfilePic pic={me} size="200px" heightMd="245px" />
          </Col>
        </Row>
        <SectionTitle title={intl.formatMessage({ id: 'experiences' })} />

        <SectionSubtitle title={intl.formatMessage({ id: messages.work.name })} />

        {
          Object.values(messages.work.contents).map(
            (work) => <WorkRow key={work.company} title={intl.formatMessage({ id: work.role })}
              company={intl.formatMessage({ id: work.company })}
              companyUrl={intl.formatMessage({ id: work.url })}
              start={intl.formatMessage({ id: work.start })}
              end={work.end && intl.formatMessage({ id: work.end })}
              description={intl.formatMessage({ id: work.description })}
              switchTheme={switchTheme}
              isDarkMode={isDarkMode}
              setDarkMode={setDarkMode} />
          )
        }

        <SectionSubtitle title={intl.formatMessage({ id: messages.internship.name })} />

        {
          Object.values(messages.internship.contents).map(
            (internship) => <WorkRow key={internship.company} title={intl.formatMessage({ id: internship.role })}
              company={intl.formatMessage({ id: internship.company })}
              companyUrl={intl.formatMessage({ id: internship.url })}
              start={intl.formatMessage({ id: internship.start })}
              end={internship.end ? intl.formatMessage({ id: internship.end }) : ''}
              description={intl.formatMessage({ id: internship.description })}
              switchTheme={switchTheme}
              isDarkMode={isDarkMode}
              setDarkMode={setDarkMode} />
          )
        }

        <SectionTitle title={intl.formatMessage({ id: messages.contact.title })} />

        <BoxContainer>
          {contacts.map((item, key) => <ContactBox key={key} title={item.title} url={item.url} icon={item.icon} />)}
        </BoxContainer>
      </Container>
    </HomeStyle>), [messages]);
}

export default injectIntl(Home);