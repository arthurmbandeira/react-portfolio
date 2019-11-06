import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import '../scss/App.scss';
import Header from './Header';

library.add(faCode)

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
