import React, { Component } from 'react'
import Table from '../Table'
import Chart from '../Chart'

import './style.sass'


export default class List extends Component {

    state = {
        users: []
    };

    async loadUsers() {
        this.setState({
            users: await fetch(
                "/api/v0/users/",
                {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Token ' + localStorage.token
                    }
                }
            ).then(response =>response.json())
        })
    }

    componentDidMount() {
        this.loadUsers();
    }

    render(){
        return(
            <div>
                <Table data={this.state.users} />
                <Chart data={this.state.users} />
            </div>
        );
    }
}
