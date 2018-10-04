import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const TOGGLE_MESSAGE = gql`
  mutation ToggleMessage($id: Int!) {
    toggleMessage(id: $id) @client
  }
`;

const Message = ({ id, text, read }) => (
  <Mutation mutation={TOGGLE_MESSAGE} variables={{ id }}>
    {toggleMessage => (
      <li
        onClick={toggleMessage}
        style={{
          textDecoration: read ? 'line-through' : 'none',
        }}
      >
        {text}
      </li>
    )}
  </Mutation>
);

export default Message;
