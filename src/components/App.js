import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faMoon, faSun, faChevronDown, faBolt, faPlusSquare, faHeart, faUniversity, faBook } from '@fortawesome/free-solid-svg-icons';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { flattenMessages } from './helpers/flattenMessages';
import supportedLanguages from './helpers/supportedLanguages';
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import GlobalStyle from './layout/GlobalStyle';
import Profile from './Profile';

library.add(faCode, faMoon, faSun, faChevronDown, faBolt, faPlusSquare, faHeart, faUniversity, faBook)

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <AppContainer>
        <GlobalStyle />
        <Header setLanguage={props.setLanguage} switchTheme={props.switchTheme} />
        <Switch>
          <Route path="/perfil">
            <Profile setLanguage={props.setLanguage} switchTheme={props.switchTheme} />
          </Route>
          <Route path="/portfolio">
            <Portfolio setLanguage={props.setLanguage} switchTheme={props.switchTheme} />
          </Route>
          <Route path="/contato">
            <Contact setLanguage={props.setLanguage} switchTheme={props.switchTheme} />
          </Route>
          <Route path="/">
            <Home setLanguage={props.setLanguage} switchTheme={props.switchTheme} />
          </Route>
        </Switch>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

const IntlApp = () => {
  const [messages, setMessages] = useState(null);
  const [theme, setTheme] = useState(null);
  const [locale, setLocale] = useState('pt');

  useEffect(() => {
    
    const language = navigator.language;
    const th = 'main';
    let locale = supportedLanguages[language] || 'pt';

    fetch(`/lang/${locale}.json`).then(async messages => {
      setLocale(locale);
      setMessages(await messages.json());
    });

    fetch(`/theme/${th}.json`).then(async theme => {
      setTheme(await theme.json());
    });
  }, []);

  const setLanguage = async (locale) => {
    const messages = await (await fetch(`/lang/${locale}.json`)).json();
    setLocale(locale);
    setMessages(messages);
  };

  const switchTheme = async (th) => {
    const theme = await (await fetch(`/theme/${th}.json`)).json();
    setTheme(theme);
  };

  if (!messages || !theme) {
    return null;
  }

  return (
    <IntlProvider locale={locale} messages={flattenMessages(messages)}>
      <BrowserRouter>
        <App setLanguage={setLanguage} theme={theme} switchTheme={switchTheme} />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default IntlApp;
