import React from 'react';

import Footer from './Footer';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

import client from '../../apollo';
import { resolvers, defaults } from '../../resolvers';

client.addLocalStateInitializers(defaults);
client.addLocalStateResolvers(resolvers);

const Messages = () => (
  <div className="messages" style={{ marginTop: '20px' }}>
    <MessageForm />
    <MessageList />
    <Footer />
  </div>
);

export default Messages;
