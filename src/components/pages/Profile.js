import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "../layout/Container";
import Main from "../layout/Main";
import SectionTitle from "../SectionTitle";
import SectionSubtitle from "../SectionSubtitle";
import SquareBox from "../SquareBox";
import EducationRow from "../EducationRow";
import WorkRow from "../WorkRow";

const ProfileStyle = styled(Main)`
  font-family: ${props => props.theme.ffMontserrat};
`;

const Profile = ({ intl, switchTheme, setDarkMode, isDarkMode }) => {
  const { messages } = intl;
  // console.log('profile intl ->', intl);
  return (
    <ProfileStyle>
      <Container small>
        <SectionTitle title={intl.formatMessage({ id: messages.profile.title })} />
        <SquareBox>
          {intl.formatMessage({ id: messages.profile.text })}
        </SquareBox>
        <SectionTitle title={intl.formatMessage({ id: messages.education.name })} />


        {Object.values(messages.education.contents).map((education) => (
          <EducationRow title={education.title}
            university={education.university}
            work={education.work}
            assignment={education.assignment}
            start={education.start}
            end={education.end}
            switchTheme={switchTheme} />
        ))}

        <SectionTitle title={intl.formatMessage({ id: 'experiences' })} />

        <SectionSubtitle title={intl.formatMessage({ id: messages.work.name })} />

        {
          Object.values(messages.work.contents).map(
            (work) => <WorkRow key={work.company} title={work.role}
              company={work.company}
              companyUrl={work.url}
              start={work.start}
              end={work.end}
              description={work.description}
              switchTheme={switchTheme}
              isDarkMode={isDarkMode}
              setDarkMode={setDarkMode} />
          )
        }

        {/* <WorkRow title={intl.formatMessage({ id: 'work.contents.objective.role' })}
          company={intl.formatMessage({ id: 'work.contents.objective.company' })}
          companyUrl={intl.formatMessage({ id: 'work.contents.objective.url' })}
          start={intl.formatMessage({ id: 'work.contents.objective.start' })}
          description={intl.formatMessage({ id: 'work.contents.objective.description' })}
          switchTheme={switchTheme}
          isDarkMode={isDarkMode}
          setDarkMode={setDarkMode} />

        <WorkRow title={intl.formatMessage({ id: 'work.contents.escada.role' })}
          company={intl.formatMessage({ id: 'work.contents.escada.company' })}
          companyUrl={intl.formatMessage({ id: 'work.contents.escada.url' })}
          start={intl.formatMessage({ id: 'work.contents.escada.start' })}
          end={intl.formatMessage({ id: 'work.contents.escada.end' })}
          description={intl.formatMessage({ id: 'work.contents.escada.description' })}
          switchTheme={switchTheme} /> */}

        <SectionSubtitle title={intl.formatMessage({ id: messages.internship.name })} />

        {
          Object.values(messages.internship.contents).map(
            (internship) => <WorkRow key={internship.company} title={internship.role}
              company={internship.company}
              companyUrl={internship.url}
              start={internship.start}
              end={internship.end}
              description={internship.description}
              switchTheme={switchTheme}
              isDarkMode={isDarkMode}
              setDarkMode={setDarkMode} />
          )
        }

        <SectionSubtitle title={intl.formatMessage({ id: messages['college-projects'].name })} />

        {
          Object.values(messages['college-projects'].contents).map(
            (collegeProject) => <WorkRow key={collegeProject.company} title={collegeProject.role}
              company={collegeProject.company}
              companyUrl={collegeProject.url}
              start={collegeProject.start}
              end={collegeProject.end}
              description={collegeProject.description}
              switchTheme={switchTheme}
              isDarkMode={isDarkMode}
              setDarkMode={setDarkMode} />
          )
        }
      </Container>
    </ProfileStyle>
  );
}

export default injectIntl(Profile);