import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "../layout/Container";
import Main from "../layout/Main";
import SectionTitle from "../SectionTitle";
import SquareBox from "../SquareBox";

const ContactStyle = styled(Main)`
  font-family: ${props => props.theme.ffMontserrat};
`;

const links = [
  {
    title: 'Email',
    link: 'mailto:arthurmbandeira@gmail.com',
    icon: ['fas', 'fa-envelope']
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/arthurmbandeira',
    icon: ['fab', 'fa-linkedin']
  },
  {
    title: 'GitHub',
    link: 'https://github.com/arthurmbandeira',
    icon: ['fab', 'fa-github-alt']
  },
  {
    title: 'GitLab',
    link: 'https://gitlab.com/arthurmbandeira',
    icon: ['fab', 'fa-gitlab']
  },
  {
    title: 'npm',
    link: 'https://npmjs.com/~arthurmbandeira',
    icon: ['fab', 'fa-npm']
  },
  {
    title: 'Medium',
    link: 'https://medium.com/@arthurmbandeira',
    icon: ['fab', 'fa-medium']
  }
];

const Contact = (props) => {
  const { intl } = props;
  return (
    <ContactStyle>
      <Container small>
        <SectionTitle title={intl.formatMessage({id: 'menu-contact'})} />
        <SquareBox>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda velit quam dolor ab deleniti autem non, repellat obcaecati reiciendis, iusto totam esse doloremque illum, veritatis expedita adipisci consectetur molestiae?
        </SquareBox>
      </Container>
    </ContactStyle>
  );
}

export default injectIntl(Contact);