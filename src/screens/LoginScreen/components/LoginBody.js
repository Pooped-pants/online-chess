import React, { useState } from 'react';
import './LoginBody.css';
import {auth, db} from '../../../firebase';

function LoginBody() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error));
    };

    function signUp() {
        // Will navigate to the sign Up page tomm!!!
    }

    return (
        <div className='loginbody'>
            <form className='loginbodyForm'>
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' className='loginbodyFormInput' />
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='loginbodyFormInput' />
                <input type='password' value={password} onChangeText={e => setPassword(e.target.value)} placeholder='Password' className='loginbodyFormInput' />
                <input type='submit' value='Sign Up' className='signUp' />
                <input type='submit' value='Login' className='login' onClick={login} />
            </form>
        </div>
    )
}

export default LoginBody;
