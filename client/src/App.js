import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Payment from './components/billing/Payment'
import Members from './components/users/Members'
import Login from './auth/Login'
import Callback from './auth/Callback'
import Authenticated from './auth/Authenticated'
import SectionForm from './components/sections/SectionForm'
import Settings from './components/Settings'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/billing" component={Payment} />
            <Route exact path="/settings" component={Settings} />
            <Route path="/login" component={Login} />
            <Route path="/callback" component={Callback} />
            <Route
              path="/authenticated"
              render={props => <Authenticated {...props} />}
            />
            <Route path="/section-form" component={SectionForm} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
