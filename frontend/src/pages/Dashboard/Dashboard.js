import React, { useState, useCallback } from 'react';
import MainNavigation from '../../components/MainNavigation/MainNavigation'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Login from '../Login/Login';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import CarsPage from '../Cars/Cars';
import BookingsPage from '../Booking/Booking';

export default function Dashboard() {
  
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
	const drawerToggleClickerHandler = useCallback(() => setSideDrawerOpen(!sideDrawerOpen), [sideDrawerOpen])
	const backdropClickHandler = useCallback(() => setSideDrawerOpen(false), [])

  
    return (
        <BrowserRouter>
            <div className="Dashboard">
                <MainNavigation drawerClickHandler={drawerToggleClickerHandler}/>
                <div className="content-wrap">
                    <SideDrawer show={sideDrawerOpen} />
					{sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
                    </div>
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/cars" component={CarsPage} />
                <Route path="/booking" component={BookingsPage} />
                </Switch>
            </div>    
        </BrowserRouter>
    )
}

const Home = ()=> (
<div className="HomePage">
 <h1>Home page</h1>
</div>
);
