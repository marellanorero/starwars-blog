import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './components/Navbar';

import Home from './views/Home';
import People from './views/People';
import Planets from './views/Planets';
import Person from './views/Person';


const Layout = () => {
    return(
        <BrowserRouter>
        <Navbar />
        <Switch>
             <Route path={'/people/:id'} component={Person}/>
            <Route  path={"/people"} component={People}></Route>   
            <Route  path={"/planets"} component={Planets}></Route>
            <Route exact path={"/"} component={Home}></Route>
            
        </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);