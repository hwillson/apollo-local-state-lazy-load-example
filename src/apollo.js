import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: ApolloLink.empty(),
});

export default client;
