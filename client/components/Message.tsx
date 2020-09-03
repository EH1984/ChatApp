import * as React from 'react';
import { Fragment, useState } from 'react';

interface IMessageProps {
  addMessage: AddMessage;
}

const Message: React.FC<IMessageProps> = ({ addMessage }) => {
  const [message, editMessage] = useState<string>('');

  const handleSubmit: HandleSubmit = e => {
    e.preventDefault();
    addMessage(message);
  };

  const handleChange: HandleChange = e => {
    editMessage(e.target.value);
  };

  return (
    <Fragment>
      <div className='container' onSubmit={e => handleSubmit(e)}>
        <form className='form-group'>
          <textarea
            className='form-control mt-3'
            name='message'
            placeholder='Enter a message'
            onChange={e => handleChange(e)}
          />
          <input
            type='submit'
            className='btn btn-primary form-control mt-3'
            name='messageBtn'
            value='Chat'
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Message;
