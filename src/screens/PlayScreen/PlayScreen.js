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
<<<<<<< HEAD
            
=======
           <PlayGame />
>>>>>>> 27a4c7512d4a2a76e21f800be4f726c9c2d51b9d
        </div>
    )
}

export default PlayScreen;

