import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import Nav from '../Nav'
import auth from '../../utils/auth'

import './style.sass'

 export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: auth.loggedIn()
        }
    }

    updateAuth(loggedIn) {
        this.setState({
            loggedIn
        })
    }

    componentWillMount() {
        auth.onChange = this.updateAuth
        auth.login()
    }

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}



Layout.contextTypes = {
    router: React.PropTypes.object.isRequired
}
