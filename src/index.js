import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router }  from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import client from './apollo';
import App from './components/App';

render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
