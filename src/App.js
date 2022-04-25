import React from 'react';
import './App.css';
import HeaderMain from './Components/Home/HeaderMain/HeaderMain';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home/Home/Home';
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/home'>
                    <Home/>
                    </Route>
                    <Route exact="exact" path='/'>
                    <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
