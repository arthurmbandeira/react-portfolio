import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './i18n';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { IntlProvider, injectIntl } from 'react-intl';


// const App = ({post}) => (
//   <div>
//     <h1>{post.title}</h1>
//     <p>
//       <PostDate date={post.date} />
//     </p>
//     <div>{post.body}</div>
//   </div>
// );
const messages = 

ReactDOM.render(
  <IntlProvider locale={navigator.language} messages={messages}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
