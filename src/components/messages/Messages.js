import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import Footer from './Footer';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

import initializers from './initializers';
import resolvers from './resolvers';

function initLocalStateHandling(client) {
  client.addLocalStateInitializers(initializers);
  client.addLocalStateResolvers(resolvers);
}

const Messages = () => {
  return (
    <ApolloConsumer>
      {(client) => {
        initLocalStateHandling(client);
        return (
          <div className="messages" style={{ marginTop: '20px' }}>
            <MessageForm />
            <MessageList />
            <Footer />
          </div>
        );
      }}
    </ApolloConsumer>
  );
};

export default Messages;
