import gql from 'graphql-tag';

export const defaults = {
  messages: () => [],
  readFilter: () => 'SHOW_ALL',
};

let nextMessageId = 0;

export const resolvers = {
  Mutation: {
    addMessage: (_, { text }, { cache }) => {
      const query = gql`
        query GetMessages {
          messages @client {
            id
            text
            read
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const newMessage = {
        id: nextMessageId++,
        text,
        read: false,
        __typename: 'MessageItem',
      };
      const data = {
        messages: previous.messages.concat([newMessage]),
      };
      cache.writeData({ data });
      return newMessage;
    },

    toggleMessage: (_, variables, { cache }) => {
      const id = `MessageItem:${variables.id}`;
      const fragment = gql`
        fragment readMessage on MessageItem {
          read
        }
      `;
      const message = cache.readFragment({ fragment, id });
      const data = { ...message, read: !message.read };
      cache.writeData({ id, data });
      return null;
    },
  },
};
