import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/'>
                        <LoginScreen />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
