import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faMoon, faSun, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Home from './Home';
import supportedLanguages from './helpers/supportedLanguages';
import { IntlProvider } from 'react-intl';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

library.add(faCode, faMoon, faSun, faChevronDown)

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700|Montserrat&display=swap');

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.ffMontserrat};
    background-color: ${props => props.theme.bg};
    margin: 0;
    transition: background-color ease .3s;
  }

  a {
    text-decoration: none;
  }
`;

const AppContainer = styled.div`
  text-align: center;
`;

const App = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <AppContainer>
        <GlobalStyle />
        <Header setLanguage={props.setLanguage} switchTheme={props.switchTheme} />
        <Switch>
          <Route path="/">
            <Home setLanguage={props.setLanguage} />
          </Route>
        </Switch>
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
    <IntlProvider locale={locale} messages={messages}>
      <BrowserRouter>
        <App setLanguage={setLanguage} theme={theme} switchTheme={switchTheme} />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default IntlApp;
