import gql from 'graphql-tag';

export default {
  messages: (cache) => {
    const query = gql`
      query GetMessages {
        messages @client {
          id
        }
      }
    `;
    try {
      const { messages } = cache.readQuery({ query });
      return messages.length ? null : [];
    } catch (error) {
      return [];
    }
  },

  readFilter: () => 'SHOW_ALL',
};
