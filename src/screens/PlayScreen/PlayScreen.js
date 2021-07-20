import React, { useEffect } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router';

function PlayScreen() {
    const user = firebase.auth().currentUser;

    const history = useHistory();

    useEffect(() => {
        if (user !== null) {
            history.push('/play');
        } else {
            history.push('/');
        }
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default PlayScreen;

