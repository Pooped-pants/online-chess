import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import PlayScreen from './screens/PlayScreen/PlayScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={LoginScreen} />
                    <Route path='/play' exact component={PlayScreen} />
                    <Route path='/home' component={HomeScreen} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
