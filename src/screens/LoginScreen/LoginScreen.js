import React from 'react';
import Bottom from './components/Bottom';
import Header from './components/Header';
import LoginBody from './components/LoginBody';

function LoginScreen() {
    return (
        <div>
            <Header />
            <LoginBody />
            <Bottom />
        </div>
    )
}

export default LoginScreen;
