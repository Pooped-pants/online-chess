import React, { useState } from 'react';
import './SignUpBody.css';

function SignUpBody() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='signupbody'>
            <form className='signupbodyForm'>
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' className='signupbodyFormInput' />
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='signupbodyFormInput' />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='signupbodyFormInput' />
                <input type='dropdown' />
                <input type='submit' value='Sign Up' className='signUp' />
            </form>
        </div>
    )
}

export default SignUpBody;
