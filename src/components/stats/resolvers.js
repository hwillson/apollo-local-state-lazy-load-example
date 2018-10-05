import gql from 'graphql-tag';

export default {
  Query: {
    messageCount: (_, args, { cache }) => {
      const query = gql`
        query GetMessages {
          messages @client {
            id
          }
        }
      `;
      const { messages } = cache.readQuery({ query });
      const messageCount = {
        total: messages ? messages.length : 0,
        __typename: 'MessageCount',
      };
      const data = { messageCount };
      cache.writeData({ data });
      return messageCount;
    },
  },
};
