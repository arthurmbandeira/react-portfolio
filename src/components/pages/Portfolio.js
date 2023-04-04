import React from "react";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Col from "../layout/Col";
import Main from "../layout/Main";
import SectionTitle from "../SectionTitle";
import SquareBox from "../SquareBox";
import PortfolioRow from "../PortfolioRow";

const PortfolioStyle = styled(Main)`
  font-family: ${props => props.theme.ffMontserrat};
`;

const Portfolio = (props) => {
  const { intl } = props;
  return (
    <PortfolioStyle>
      <Container small>
        <SectionTitle title={intl.formatMessage({id: 'menu_portfolio'})} />
        <SquareBox>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda velit quam dolor ab deleniti autem non, repellat obcaecati reiciendis, iusto totam esse doloremque illum, veritatis expedita adipisci consectetur molestiae?
        </SquareBox>
        <PortfolioRow 
          switchTheme={props.switchTheme}
          isDarkMode={props.isDarkMode}
          setDarkMode={props.setDarkMode}>

        </PortfolioRow>
      </Container>
    </PortfolioStyle>
  );
}

export default injectIntl(Portfolio);