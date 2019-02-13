import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Payment from './billing/billing';
import Login from './auth/Login';
import Callback from './auth/Callback';
import Authenticated from './auth/Authenticated';

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/callback" component={Callback} />
                  <Route path="/authenticated" render={props => <Authenticated {...props} />} />
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/billing" component={Payment} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
