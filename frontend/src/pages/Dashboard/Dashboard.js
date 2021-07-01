import React, { Component } from 'react';
import MainNavigation from 'components/MainNavigation/MainNavigation'
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from 'pages/Login/Login';
import CarsPage from 'pages/Cars/Cars';
import BookingsPage from 'pages/Booking/Booking';
import AuthContext from 'context/auth-context';

class Dashboard extends Component {
state = {
    token: null,
    userId: null,
};

login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
};

logout = () => {
    this.setState({ token: null, userId: null });
};

render () {
    return (
        <BrowserRouter>
            <div className="Dashboard">
                <AuthContext.Provider 
                value={{
                    token:this.state.token, 
                    userId: this.state.userId,
                    login: this.login,
                    logout: this.logout
                     }}>
                <MainNavigation />
                   <main className="main-content">
                        <Switch>
                            {this.state.token && <Redirect from="/" to="/cars" exact />}
                            {this.state.token && <Redirect from="/login" to="/cars" exact />}
                            {!this.state.token && (
                                <Route path="/login" component={Login} />
                            )}
                            <Route path="/cars" component={CarsPage} />
                            {this.state.token && (
                            <Route path="/booking" component={BookingsPage} />
                            )}
                            {!this.state.token && <Redirect to="/login" exact />}
                        </Switch>
                   </main>
                </AuthContext.Provider>
            </div>    
        </BrowserRouter>
    );
    };
}

export default Dashboard;