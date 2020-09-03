import * as React from 'react';
import { useState, Fragment } from 'react';

import { v4 as uuidv4 } from 'uuid';

// Chat components
import Header from './Header';
import Users from './Users';
import Chat from './Chat';
import Message from './Message';

const MainChat: React.FC = () => {
  // Users
  const [users, addUser] = useState<Array<User>>([
    { id: uuidv4(), name: 'eugene' },
    { id: uuidv4(), name: 'emma' },
    { id: uuidv4(), name: 'molly' },
    { id: uuidv4(), name: 'pugsley' }
  ]);

  // Messages
  const [messages, editMessage] = useState<Array<Message>>([]);

  // Add a message to the state
  const addMessage: AddMessage = message => {
    console.log('message from Message');
    editMessage([...messages, { id: uuidv4(), message }]);
  };

  return (
    <Fragment>
      <div className='main-grid-container vh-100 vw-100'>
        <div className='main-grid-item'>
          <Header />
        </div>
        <div className='main-grid-item'>
          <div className='inner-grid-container'>
            <div className='inner-grid-item'>
              <Users users={users} />
            </div>
            <div className='inner-grid-item'>
              <div className='chatMessage-grid-container'>
                <div className='chatMessage-grid-item'>
                  <Chat />
                </div>
                <div className='chatMessage-grid-item'>
                  <Message addMessage={addMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainChat;
