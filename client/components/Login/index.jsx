import React, { Component } from 'react'
import Input from '../Input'
import Button from '../Button'
import auth from '../../utils/auth'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(event) {
        event.preventDefault();
        var username = this.refs.username.value
        var password = this.refs.password.value
        auth.login(username, password, (loggedIn) => {
            console.log(loggedIn)
            if (loggedIn) {
                this.context.router.replace('/')
            }
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-offset-4 col-md-4">
                    <form onSubmit={this.onHandleSubmit} className="panel panel-primary">
                        <div className="panel-heading">
                            Авторизация
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="username"
                                    defaultValue=""
                                    ref="username"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="password"
                                    defaultValue=""
                                    ref="password"
                                />
                            </div>
                        </div>
                        <div className="panel-footer">
                            <Button type="submit" className="btn btn-primary btn-block" title="Войти" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}
