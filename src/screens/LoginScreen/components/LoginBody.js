import React, { useEffect, useState } from 'react';
import './LoginBody.css';
import {auth, db} from '../../../firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import firebase from 'firebase';

function LoginBody() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [forgotPassEmail, setForgotPassEmail] = useState('');
    
    //the current logged in user
    const user = firebase.auth().currentUser;

    // the navigation helper!
    const history = useHistory();

    // a useEffect to keep checking if the user is logged in
    useEffect(() => {
        const unsub = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                history.push('/home');
            } else {
                history.push('/');
            }
        })
    }, [])

    function login() {        
        auth.signInWithEmailAndPassword(email, password);
        history.push('/home');
    };

    function signUp() {
        auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
            authUser.user.updateProfile({
                displayName: username,
            })
        })
        db.collection('users').add({
            email: email,
            username: username,
            rating: 0,
            gamesPlayed: 0,
        })
        history.push('/home');
    };

    function forPass() {
        setForgotPassEmail(prompt('Enter Email Associated With chess.net For Forgot Password (Please Enter Valid Email)'));
        if (setForgotPassEmail !== null) {
            alert('A Forgot Password mail Will be sent to the email if it was correct! Be sure to check inbox');
            console.log(forgotPassEmail);
            firebase.auth().sendPasswordResetEmail(forgotPassEmail).catch(e => alert(e));
        } else {
            alert('Invalid Email!');
        }
        
    };


    return (
        <div className='loginbody'>
            <form className='loginbodyForm'>
                <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' className='loginbodyFormInput' />
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='loginbodyFormInput' />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='loginbodyFormInput' />
                <a className='forgotPassword' onClick={forPass}>Forgot Password</a>
                <input type='submit' value='Sign Up' className='signUp' onClick={signUp} />
                <input type='submit' value='Login' className='login' onClick={login} />
            </form>
        </div>
    )
}

export default LoginBody;
