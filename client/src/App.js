import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Payment from ".components/billing/billing";
import Members from "./components/users/Members";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/billing" component={Payment} />
            <Route exact path="/members" component={Members} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
