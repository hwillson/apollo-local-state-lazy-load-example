import React from 'react';
import { ApolloConsumer, Query } from 'react-apollo';
import gql from 'graphql-tag';

import resolvers from './resolvers';

const GET_MESSAGE_COUNT = gql`
  {
    messageCount @client {
      total
    }
  }
`;

const MessageCount = () => {
  return (
    <ApolloConsumer>
      {(client) => {
        client.addResolvers(resolvers);
        return (
          <Query query={GET_MESSAGE_COUNT} fetchPolicy="no-cache">
            {({ loading, data: { messageCount } }) => {
              if (loading) return 'Loading ...';
              return (
                <p>
                  Total number of messages: {messageCount.total}
                </p>
              );
            }}
          </Query>
        );
      }}
    </ApolloConsumer>
  );
};

export default MessageCount;
