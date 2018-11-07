import React, { Component } from 'react';
import { withApollo } from 'react-apollo';

import Footer from './Footer';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

import initializers from './initializers';
import resolvers from './resolvers';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  async componentDidMount() {
    const { client } = this.props;
    await client.runInitializers(initializers);
    client.addResolvers(resolvers);
    this.setState({ isReady: true });
  }

  render() {
    return this.state.isReady
      ? (
          <div className="messages" style={{ marginTop: '20px' }}>
            <MessageForm />
            <MessageList />
            <Footer />
          </div>
        )
      : <p>Loading ...</p>;
  }
}

export default withApollo(Messages);
