import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    return (<h1>You are logged out... <Link to="/login" >Login</Link> again</h1>)
}

export default Logout;