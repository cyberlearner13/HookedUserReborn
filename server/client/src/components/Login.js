import React, { useState, useEffect, Fragment } from 'react';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    return (
        <Fragment>
            <form className="login-form">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={e => setUsername(e.target.value)} /></div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} /></div>
            </form>
            <p>{username}</p>
            <p>{password}</p>
        </Fragment>
    )
}

export default Login;