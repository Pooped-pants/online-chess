import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import PlayScreen from './screens/PlayScreen/PlayScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Profile from './screens/Profile/Profile';
import firebase from 'firebase';
import Restricted from './restricted';

function App() {
    const user = firebase.auth().currentUser;

    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={LoginScreen} />
                    <Restricted path='/play' exact component={PlayScreen} />
                    <Restricted exact path='/home' component={HomeScreen} />
                    <Route path='/profile' component={Profile} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;

