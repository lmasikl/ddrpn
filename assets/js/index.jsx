var React = require('react')
var ReactDOM = require('react-dom')
var Router = require('react-router')
var App = require('./app')
var Login = require('./login')
var auth = require('./auth')

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/login/',
            state: {nextPathname: '/'}
        })
    }
}

ReactDOM.render(
    <Router.Router history={Router.browserHistory}>
        <Router.Route path='/login/' component={Login} />
        <Router.Route path='/' component={App} onEnter={requireAuth} />
    </Router.Router>,
    document.getElementById('container')
)
