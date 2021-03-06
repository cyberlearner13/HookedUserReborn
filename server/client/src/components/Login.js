import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Login = () => {
  //
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const clearForm = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };
  const login = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className='form'>
        <form className='login-form'>
          <span>Login Form</span>
          <div className='username'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='password'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-actions'>
            <button className='cancel' onClick={(e) => clearForm(e)}>
              Cancel
            </button>
            <button className='submit' onClick={(e) => login(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <Link to='/'>
        <button>Back to Home</button>
      </Link>
    </Fragment>
  );
};

export default Login;
