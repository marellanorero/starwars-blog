import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './components/Navbar';

import Home from './views/Home';
import People from './views/People';
import Planets from './views/Planets';
import Person from './views/Person';
import Planet from './views/Planet';
import NotFound from './views/notFound'
import Vehicles from './views/Vehicles';
import Vehicle from './views/Vehicle';


const Layout = () => {
    return(
        <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path={"/vehicles/:id"} component={Vehicle}/>
            <Route path={"/planets/:id"} component={Planet}/>
            <Route path={"/people/:id"} component={Person}/>
            <Route  path={"/vehicles"} component={Vehicles}></Route> 
            <Route  path={"/people"} component={People}></Route>   
            <Route  path={"/planets"} component={Planets}></Route>
            <Route exact path={"/"} component={Home}></Route>
            <Route component={NotFound}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);