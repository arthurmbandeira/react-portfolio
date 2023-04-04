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
          <EducationRow title={intl.formatMessage({ id: education.title })}
            university={intl.formatMessage({ id: education.university })}
            work={intl.formatMessage({ id: education.work })}
            assignment={intl.formatMessage({ id: education.assignment })}
            start={intl.formatMessage({ id: education.start })}
            end={education.end && intl.formatMessage({ id: education.end })}
            switchTheme={switchTheme} />
        ))}

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

        <SectionSubtitle title={intl.formatMessage({ id: messages.college_projects.name })} />

        <WorkRow title={intl.formatMessage({ id: 'college-projects.contents.coderun.role' })}
          company={intl.formatMessage({ id: 'college-projects.contents.coderun.company' })}
          companyUrl={intl.formatMessage({ id: 'college-projects.contents.coderun.url' })}
          start={intl.formatMessage({ id: 'college-projects.contents.coderun.start' })}
          end={intl.formatMessage({ id: 'college-projects.contents.coderun.end' })}
          description={intl.formatMessage({ id: 'college-projects.contents.coderun.description' })}
          switchTheme={switchTheme} />

        <WorkRow title={intl.formatMessage({ id: 'college-projects.contents.mudi.role' })}
          company={intl.formatMessage({ id: 'college-projects.contents.mudi.company' })}
          companyUrl={intl.formatMessage({ id: 'college-projects.contents.mudi.url' })}
          start={intl.formatMessage({ id: 'college-projects.contents.mudi.start' })}
          end={intl.formatMessage({ id: 'college-projects.contents.mudi.end' })}
          description={intl.formatMessage({ id: 'college-projects.contents.mudi.description' })}
          switchTheme={switchTheme} />
      </Container>
    </ProfileStyle>
  );
}

export default injectIntl(Profile);