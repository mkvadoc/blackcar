import React from 'react'
import MainNavigation from '../../components/MainNavigation/MainNavigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from '../About/About';
import Login from '../login/Login';

export default function Dashboard() {
    return (
        <Router>
            <div className="Dashboard">
                <MainNavigation />
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                </Switch>
            </div>    
        </Router>
    )
}

const Home = ()=> (
<div className="HomePage">
 <h1>Home page</h1>
</div>
);
