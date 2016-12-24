import React, { Component } from 'react'


export default class Input extends Component {
    render() {
        return (
            <input
                className="form-control"
                type={this.props.type}
                placeholder={this.props.placeholder}
            />
        );
    }
}
