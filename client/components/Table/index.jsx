import React, { Component } from 'react'
import { Link } from 'react-router'
import { format_date } from '../../utils'


import './style.sass'


export default class Table extends Component {

    render(){
        var	trTemplate;
        trTemplate = this.props.data.map(function(item, index)	{
            return (
                <tr key={index}>
                    <td><Link to={`/users/${item.id}`}>{item.email}</Link></td>
                    <td>{item.username}</td>
                    <td>{item.first_name} {item.last_name}</td>
                    <td>{ format_date(item['date_joined']) }</td>
                </tr>
            )
        })

        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Date joined</th>
                    </tr>
                </thead>
                <tbody>
                    {trTemplate}
                </tbody>
            </table>
        );
    }
}
