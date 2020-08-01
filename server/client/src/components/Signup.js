import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/users/signup', {
      username,
      password,
    });
  };

  return (
    <div>
      <Link to='/'>
        <button>Back to Home</button>
      </Link>

      <div className='form'>
        <form className='signup-form'>
          <span>Signup Form</span>
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
          <div className='password'>
            <label htmlFor='confirm_password'>Confirm Password</label>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-actions'>
            <button className='cancel'>Cancel</button>
            <button className='submit' onClick={(e) => signup(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
