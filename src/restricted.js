import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';

const Restricted = ({component: Component, ...rest}) => {
    const user = firebase.auth().currentUser;

    return (
        <Route {...rest} render={props => (
            user !== null ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default Restricted;