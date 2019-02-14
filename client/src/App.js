import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from './components/Dashboard';
import Payment from './billing/billing';
import Members from "./components/users/Members";
import Login from './auth/Login';
import Callback from './auth/Callback';
import Authenticated from './auth/Authenticated';

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/billing" component={Payment} />
                  <Route path="/login" component={Login} />
                  <Route path="/callback" component={Callback} />
                  <Route path="/authenticated" render={props => <Authenticated {...props} />} />       
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
