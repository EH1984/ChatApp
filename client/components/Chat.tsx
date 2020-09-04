import * as React from 'react';

import ChatMessage from './ChatMessage';

const Chat: React.FC = () => {
  return (
    <div className='comment-container'>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
  );
};

export default Chat;
