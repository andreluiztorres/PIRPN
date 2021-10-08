import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "../pages/home";
import Hall from "../pages/hall";

const Routes = () => {

   return (
       <BrowserRouter>
       <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/Hall' component={Hall} />
       </Switch>
       </BrowserRouter>
   ) 
}

export default Routes

