import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/users/login', {
            username,
            password
        });
    }

    return (
        <div className="form">
            <form className="login-form">
                <span>Login Form</span>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-actions">
                    <button className="cancel">Cancel</button>
                    <button className="submit" onClick={e => login(e)}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;