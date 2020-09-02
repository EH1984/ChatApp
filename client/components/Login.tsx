import * as React from 'react';
import { Fragment } from 'react';

const Login: React.FC = () => {
  return (
    <div className='container d-flex vh-100'>
      <div className='card text-white bg-secondary mb-3 w-50 align-self-center mx-auto'>
        <Fragment>
          <div className='card-header text-center'>
            <h2>Login</h2>
          </div>
          <div className='card-body'>
            <div className='card-text'>
              <form className='form-group mt-3'>
                <input
                  type='email'
                  name='enterEmail'
                  id='enterEmail'
                  className='form-control mb-4'
                  placeholder='Email'
                />
                <input
                  type='password'
                  name='enterPassword'
                  id='enterPassword'
                  className='form-control mb-4'
                  placeholder='Password'
                />
                <button
                  type='submit'
                  className='btn btn-success form-control mt-2'
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default Login;
