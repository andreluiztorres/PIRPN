import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from "../pages/home";
import Hall from "../pages/hall";
import Cadastro from "../pages/cadastro";
import Sala from "../pages/sala";

const Routes = () => {

   return (
       <BrowserRouter>
       <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/Hall' component={Hall} />
           <Route path='/Cadastro' component={Cadastro} />
           <Route path='/Sala' component={Sala} />
       </Switch>
       </BrowserRouter>
   ) 
}

export default Routes

