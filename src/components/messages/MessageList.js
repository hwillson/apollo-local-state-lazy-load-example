import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Message from './Message';

const GET_MESSAGES = gql`
  {
    messages @client {
      id
      text
      read
    }
    readFilter @client
  }
`;

const getFilteredMessages = (messages, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return messages;
    case 'SHOW_READ':
      return messages.filter(t => t.read);
    case 'SHOW_UNREAD':
      return messages.filter(t => !t.read);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const MessageList = () => (
  <Query query={GET_MESSAGES}>
    {({ data: { messages, readFilter } }) => (
      <ul>
        {getFilteredMessages(messages, readFilter).map(message => (
          <Message key={message.id} {...message} />
        ))}
      </ul>
    )}
  </Query>
);

export default MessageList;
