import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { charts } from '../../utils'

export default class Chart extends Component {

    propTypes: {
        data: React.PropTypes.array.isRequired,
    }

    componentDidUpdate() {
        charts.create(ReactDOM.findDOMNode(this.refs.users_chart), this.props.data)
    }

    render() {
        return (
            <div className="users_chart" ref="users_chart"></div>
        );
    }
}
