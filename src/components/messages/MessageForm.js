import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_MESSAGE = gql`
  mutation addMessage($text: String!) {
    addMessage(text: $text) @client {
      id
      text
    }
  }
`;

const MessageForm = () => (
  <Mutation mutation={ADD_MESSAGE}>
    {addMessage => {
      let input;
      return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              addMessage({ variables: { text: input.value } });
              input.value = '';
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Message</button>
          </form>
        </div>
      );
    }}
  </Mutation>
);

export default MessageForm;
