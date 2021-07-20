import React, { useEffect } from 'react';
import {auth, db} from '../../firebase';
import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase';

function HomeScreen() {
    const user = firebase.auth().currentUser;
    const history = useHistory();

    useEffect(() => {
        if (user !== null) {
            return;
        } else {
            history.push('/');
        }
    }, [user])

    function logout() {
        auth.signOut();
        history.push('/');
    }

    return (
        <div>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default HomeScreen
