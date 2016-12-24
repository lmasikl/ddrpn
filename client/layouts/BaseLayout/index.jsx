import React from 'react'
import { IndexLink, Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './style.sass'

const LayoutBase = ({ children, location }) => (
    <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <IndexLink to="/" className="navbar-brand">Dashboard</IndexLink>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <ReactCSSTransitionGroup
              component="div"
              className="content"
              transitionName="page-transition"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              >
              {React.cloneElement(children, {
                  key: location.pathname
              })}
          </ReactCSSTransitionGroup>
        </div>

    </div>
);


export default LayoutBase
