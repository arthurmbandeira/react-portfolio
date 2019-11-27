import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faMoon, faSun, faChevronDown, faBolt, faPlusSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { flattenMessages } from './helpers/flattenMessages';
import supportedLanguages from './helpers/supportedLanguages';
import Header from './Header';
import Home from './Home';
import GlobalStyle from './layout/GlobalStyle';
import Footer from './Footer';

library.add(faCode, faMoon, faSun, faChevronDown, faBolt, faPlusSquare, faHeart)

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
