import * as React from 'react';
import { useState, Fragment } from 'react';

// Chat components
import Header from './Header';
import Users from './Users';
import Chat from './Chat';
import Message from './Message';

const MainChat: React.FC = () => {
  const [users, addUser] = useState<Array<User>>([
    { id: '1', name: 'eugene' },
    { id: '2', name: 'emma' },
    { id: '3', name: 'molly' },
    { id: '4', name: 'pugsley' }
  ]);
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
                  <Message />
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
