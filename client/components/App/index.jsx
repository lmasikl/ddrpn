import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { BaseLayout } from '../../layouts'
import List from '../List'
import User from '../User'
import Login from '../Login'
import auth from '../../utils/auth'


function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login/',
            state: {nextPathname: '/'}
        })
    }
}

function logoutAuth(nextState, replace) {
    auth.logout()
    replace({
        'pathname': 'login',
        'state': {nextPathname: '/'}
    })
}

export default class App extends Component {
    render(){
        return(
            <Router history={ browserHistory }>
                <Route path="/" component={ BaseLayout }>
                    <IndexRoute component={List} onEnter={requireAuth} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' onEnter={auth.logout} />
                    <Route path="/api/v0/users/:user_id" component={User} onEnter={requireAuth} />
                </Route>
            </Router>
        );
    }
}
