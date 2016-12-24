import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Layout } from '../Layout'
import List from '../List'
import User from '../User'
import Login from '../Login'
import Logout from '../Logout'
import auth from '../../utils/auth'


function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default class App extends Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={List} onEnter={requireAuth} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/users/:user_id" component={User} onEnter={requireAuth} />
                </Route>
            </Router>
        );
    }
}
