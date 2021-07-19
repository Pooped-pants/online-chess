import React, { useState } from 'react';
import './LoginBody.css';
import {auth, db} from '../../../firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function LoginBody() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error));
    };
    // comment to check

    return (
        <div className='loginbody'>
            <form className='loginbodyForm'>
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' className='loginbodyFormInput' />
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='loginbodyFormInput' />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='loginbodyFormInput' />
                <Link to='/signup'>
                    <input type='submit' value='Sign Up' className='signUp' />
                </Link>
                <input type='submit' value='Login' className='login' onClick={login} />
            </form>
        </div>
    )
}

export default LoginBody;
