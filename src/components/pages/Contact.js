import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "../layout/Container";
import BoxContainer from "../layout/BoxContainer";
import Main from "../layout/Main";
import SectionTitle from "../SectionTitle";
import SquareBox from "../SquareBox";
import ContactBox from "../ContactBox";

const ContactStyle = styled(Main)`
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
  },
  {
    title: 'GitLab',
    url: 'https://gitlab.com/arthurmbandeira',
    icon: ['fab', 'gitlab']
  },
  {
    title: 'npm',
    url: 'https://npmjs.com/~arthurmbandeira',
    icon: ['fab', 'npm']
  },
  {
    title: 'Medium',
    url: 'https://medium.com/@arthurmbandeira',
    icon: ['fab', 'medium']
  }
];

const Contact = (props) => {
  const { intl } = props;
  return (
    <ContactStyle>
      <Container small>
        <SectionTitle title={intl.formatMessage({id: 'contact.title'})} />
        <SquareBox>
          {intl.formatMessage({id: 'contact.text'})}
        </SquareBox>
        <BoxContainer>
          {contacts.map((item, key) => <ContactBox key={key} title={item.title} url={item.url} icon={item.icon} theme={props.theme} /> )}
        </BoxContainer>
      </Container>
    </ContactStyle>
  );
}

export default injectIntl(Contact);