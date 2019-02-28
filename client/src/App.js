import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Billing from './components/billing/Billing'
import Payment from './components/billing/Payment'
import Members from './components/users/Members'
import Login from './auth/Login'
import Callback from './auth/Callback'
import Authenticated from './auth/Authenticated'
import SectionForm from './components/sections/SectionForm'
import Settings from './components/Settings'
import Landing from './components/Landing'
import DashDrawer from './components/Dashboard'
import CallbackEmail from './auth/CallbackEmail'
import AddMembers from './components/users/AddMembers'
import UpdateMembers from './components/users/UpdateMembers'
import Signature from './components/signature/Signature'
import HandbookPage from './components/handbook/HandbookPage'
import MagicLinkRequest from './components/sections/MagicLinkRequest'
import SectionRender from './components/sections/SectionRender'

import { connect } from 'react-redux'
import { getInfoFromToken } from './store/actions/usersActions'
import HandbookMemberView from './components/handbook/HandbookMemberView'

class App extends Component {
  componentDidMount() {
    // let token = localStorage.getItem('access_token')
    if (localStorage.getItem('access_token')) {
      this.props.getInfoFromToken()
      // TODO - if on home screen and token stored is still valid
      // then push user to the dashboard?  must call from inside the router
    } else {
      //No Token...
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Dashboard" component={DashDrawer} />
            <Route exact path="/handbook" component={HandbookPage} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/add-members" component={AddMembers} />
            <Route exact path="/signature" component={Signature} />
            <Route exact path="/update-members/:id" component={UpdateMembers} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/settings" component={Settings} />
            <Route path="/login" component={Login} />
            <Route path="/callback" component={Callback} />
            <Route
              path="/authenticated"
              render={props => <Authenticated {...props} />}
            />
            <Route path="/add-section" component={SectionForm} />
            <Route
              path="/update-section/:id"
              render={props => <SectionForm {...props} update={true} />}
            />
            <Route path="/callback-email" component={CallbackEmail} />
            <Route path="/magic-link-request" component={MagicLinkRequest} />
            <Route path="/section/:id" component={SectionRender} />
            <Route
              path="/handbook/member-view"
              component={HandbookMemberView}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(
  null,
  { getInfoFromToken }
)(App)
