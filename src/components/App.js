import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faMoon, faSun, faChevronDown, faBolt, faPlusSquare, faHeart, faUniversity, faBook, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubAlt, faGitlab, faNpm, faMedium } from '@fortawesome/free-brands-svg-icons';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { flattenMessages } from './helpers/flattenMessages';
import supportedLanguages from './helpers/supportedLanguages';
import GA from "./helpers/googleAnalytics";

import Header from './layout/Header';
import Home from './pages/Home';
// import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './layout/Footer';
import GlobalStyle from './layout/GlobalStyle';
import Profile from './pages/Profile';


library.add(faCode, faMoon, faSun, faChevronDown, faBolt, faPlusSquare, faHeart, faUniversity, faBook, faEnvelope, faLinkedin, faGithubAlt, faGitlab, faNpm, faMedium)

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = ({ theme, setLanguage, switchTheme }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Header setLanguage={setLanguage} switchTheme={switchTheme} />
        <Routes>
          <Route path="/perfil" element={<Profile setLanguage={setLanguage} switchTheme={switchTheme} />} />
          <Route path="/contato" element={<Contact setLanguage={setLanguage} switchTheme={switchTheme} />} />
          <Route path="/" element={<Home setLanguage={setLanguage} switchTheme={switchTheme} />} />
        </Routes>
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
    const th = 'dark';
    let locale = supportedLanguages[language] || 'pt';

    fetch(`/lang/${locale}.json`).then(async messages => {
      setLocale(locale);
      setMessages(await messages.json());
    });

    fetch(`/theme/${th}.json`).then(async theme => {
      setTheme(await theme.json());
    });
  }, []);

  useEffect(() => {
    console.log(messages);
    console.log(flattenMessages(messages));
  }, [messages])

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
    // <IntlProvider locale={locale} messages={flattenMessages(messages)} onError={(err) => {
    <IntlProvider locale={locale} messages={messages} onError={(err) => {
      if (err.code === "MISSING_TRANSLATION") {
        console.warn("Missing translation", err.message);
        return;
      }
      throw err;
    }}>
      <BrowserRouter>
        {GA.init() && <GA.RouteTracker />}
        <App setLanguage={setLanguage} theme={theme} switchTheme={switchTheme} />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default IntlApp;
