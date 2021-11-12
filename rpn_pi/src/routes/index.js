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
           <Route path='/PIRPN' exact component={Home} />
           <Route path='/PIRPN/Hall' component={Hall} />
           <Route path='/PIRPN/Cadastro' component={Cadastro} />
           <Route path='/PIRPN/Sala' component={Sala} />
       </Switch>
       </BrowserRouter>
   ) 
}

export default Routes

