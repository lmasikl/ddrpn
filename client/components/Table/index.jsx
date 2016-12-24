import React, { Component } from 'react'

import './style.sass'


export default class Table extends Component {

    render(){
        var	trTemplate;
        trTemplate = this.props.data.map(function(item, index)	{
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.first_name} {item.last_name}</td>
                    <td>{item.date_joined}</td>
                </tr>
            )
        })

        return(
            <table className="table">
                <tbody>
                    {trTemplate}
                </tbody>
            </table>
        );
    }
}
