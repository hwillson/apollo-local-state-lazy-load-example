import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router }  from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import initializers from './initializers';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: ApolloLink.empty(),
  initializers,
});

render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
