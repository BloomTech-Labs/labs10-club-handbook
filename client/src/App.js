import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Payment from './billing/billing';

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/billing" component={Payment} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
