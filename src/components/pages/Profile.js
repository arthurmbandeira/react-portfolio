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
  return (
    <ProfileStyle>
      <Container small>
        <SectionTitle title={intl.formatMessage({id: 'profile.title'})} />
        <SquareBox>
          {intl.formatMessage({id: 'profile.text'})}
        </SquareBox>
        <SectionTitle title={intl.formatMessage({id: 'education.name'})} />

        <EducationRow title={intl.formatMessage({id: 'education.contents.masters.title'})} 
                      university={intl.formatMessage({id: 'education.contents.masters.university'})} 
                      work={intl.formatMessage({id: 'education.contents.masters.work'})} 
                      assignment={intl.formatMessage({id: 'education.contents.masters.assignment'})} 
                      start={intl.formatMessage({id: 'education.contents.masters.start'})} 
                      end={''} 
                      switchTheme={switchTheme} />

        <EducationRow title={intl.formatMessage({id: 'education.contents.graduation.title'})} 
                      university={intl.formatMessage({id: 'education.contents.graduation.university'})} 
                      work={intl.formatMessage({id: 'education.contents.graduation.work'})} 
                      assignment={intl.formatMessage({id: 'education.contents.graduation.assignment'})} 
                      start={intl.formatMessage({id: 'education.contents.graduation.start'})} 
                      end={intl.formatMessage({id: 'education.contents.graduation.end'})} 
                      switchTheme={switchTheme} />

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

        <SectionSubtitle title={intl.formatMessage({id: 'college-projects.name'})} />

        <WorkRow title={intl.formatMessage({id: 'college-projects.contents.coderun.role'})}
                 company={intl.formatMessage({id: 'college-projects.contents.coderun.company'})}
                 companyUrl={intl.formatMessage({id: 'college-projects.contents.coderun.url'})}
                 start={intl.formatMessage({id: 'college-projects.contents.coderun.start'})}
                 end={intl.formatMessage({id: 'college-projects.contents.coderun.end'})}
                 description={intl.formatMessage({id: 'college-projects.contents.coderun.description'})}
                 switchTheme={switchTheme} />

        <WorkRow title={intl.formatMessage({id: 'college-projects.contents.mudi.role'})}
                 company={intl.formatMessage({id: 'college-projects.contents.mudi.company'})}
                 companyUrl={intl.formatMessage({id: 'college-projects.contents.mudi.url'})}
                 start={intl.formatMessage({id: 'college-projects.contents.mudi.start'})}
                 end={intl.formatMessage({id: 'college-projects.contents.mudi.end'})}
                 description={intl.formatMessage({id: 'college-projects.contents.mudi.description'})}
                 switchTheme={switchTheme} />
      </Container>
    </ProfileStyle>
  );
}

export default injectIntl(Profile);