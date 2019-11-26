import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "./layout/Container";
import Row from "./layout/Row";
import Col from "./layout/Col";
import SectionTitle from "./SectionTitle";
import WorkRow from "./WorkRow";
import SectionSubtitle from "./SectionSubtitle";

const HomeStyle = styled.main`
  font-family: ${props => props.theme.ffMontserrat};
`;

const Home = (props) => {
  const { intl } = props;
  return (
    <HomeStyle>
      <Container small>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
        <SectionTitle title={intl.formatMessage({id: 'experiences'})} />
        <SectionSubtitle title={intl.formatMessage({id: 'work.name'})} />

        {/* {Object.keys(supportedLanguages).map((key, i) => <div key={i} onClick={() => {props.setLanguage(key)}} title={getLanguageTitle(key)}>{key}</div> )} */}
        
        <WorkRow title={intl.formatMessage({id: 'work.objective.role'})} company={intl.formatMessage({id: 'work.objective.company'})} companyUrl="https://objective.com.br" start="2019" description={intl.formatMessage({id: 'work.objective.description'})} switchTheme={props.switchTheme} isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />

        <WorkRow title={intl.formatMessage({id: 'work.escada.role'})} company={intl.formatMessage({id: 'work.escada.company'})} companyUrl="https://escadadigital.com.br" start="2017" end="2019" description={intl.formatMessage({id: 'work.escada.description'})} switchTheme={props.switchTheme} />

        <SectionSubtitle title={intl.formatMessage({id: 'internship.name'})} />
        {/* <WorkRow title={intl.formatMessage({id: 'internship.escada.role'})} company={intl.formatMessage({id: 'internship.escada.company'})} companyUrl="https://escadadigital.com.br" start="2017" end="2019" description={intl.formatMessage({id: 'internship.escada.description'})} switchTheme={props.switchTheme} /> */}
      </Container>
    </HomeStyle>
  );
}

export default injectIntl(Home);