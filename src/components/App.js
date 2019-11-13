import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import '../scss/App.scss';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

library.add(faCode)

function App(setLanguage) {
  return (
    <div className="App">
      <Header setLanguage={setLanguage} />
    </div>
  )
}

const IntlApp = function() {
  const [messages, setMessages] = useState(null);
  const [locale, setLocale] = useState('pt');

  useEffect(() => {
    const supportedLanguages = { pt: 'pt', 'pt-BR': 'pt', en: 'en', fr: 'fr' };
    const language = navigator.language;
    let locale = supportedLanguages[language] || 'pt';

    fetch(`/lang/${locale}.json`).then(async messages => {
      setLocale(locale);
      setMessages(await messages.json());
    });
  }, []);

  const setLanguage = async (locale) => {
    const messages = await (await fetch(`/lang/${locale}.json`)).json();
    setLocale(locale);
    setMessages(messages);
  };

  if (!messages) {
    return null;
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <BrowserRouter>
        <App setLanguage={setLanguage} />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default IntlApp;
