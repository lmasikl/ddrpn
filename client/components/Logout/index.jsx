import React, { Component } from 'react'
import Input from '../Input'
import Button from '../Button'
import auth from '../../utils/auth'

export default class Logout extends Component {
    componentDidMount() {
        auth.logout()
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-offset-4 col-md-4">
                    <p className="lead text-center">You are logged out.</p>
                </div>
            </div>
        );
    }
}
