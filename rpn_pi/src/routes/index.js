import React from "react";
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'

import Home from "../pages/home";
import Hall from "../pages/hall";
import Cadastro from "../pages/cadastro";
import Sala from "../pages/sala";

const Routes = () => {

   return (
       <BrowserRouter>
       <HashRouter>
           <Route path='/' exact component={Home} />
           <Route path='/Hall' component={Hall} />
           <Route path='/Cadastro' component={Cadastro} />
           <Route path='/Sala' component={Sala} />
       </HashRouter>
       </BrowserRouter>
   ) 
}

export default Routes

