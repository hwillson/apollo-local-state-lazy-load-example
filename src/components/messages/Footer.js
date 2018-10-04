import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Link from './Link';

const GET_READ_FILTER = gql`
  {
    readFilter @client
  }
`;

const FilterLink = ({ filter, children }) => (
  <Query query={GET_READ_FILTER}>
    {({ data, client }) => (
      <Link
        onClick={() => client.writeData({ data: { readFilter: filter } })}
        active={data.readFilter === filter}
      >
        {children}
      </Link>
    )}
  </Query>
);

const Footer = () => (
  <p>
    Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
    {', '}
    <FilterLink filter="SHOW_UNREAD">Unread</FilterLink>
    {', '}
    <FilterLink filter="SHOW_READ">Read</FilterLink>
  </p>
);

export default Footer;
