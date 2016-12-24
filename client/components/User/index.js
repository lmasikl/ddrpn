import React, { Component } from 'react'
import { Link } from 'react-router'
// import { format_date } from '../../utils'

import './style.sass'


class User extends Component {
    state = {
        email: '',
        is_active: false,
        username: ''
    };

    loadArticle(user_id) {
        fetch(`/api/v0/users/${user_id}/`)
            .then(response => response.json())
            .then(data => {
                this.setState(data)
            });
    }

    componentDidMount() {
        this.loadArticle(this.props.params['user_id']);
    }

    render(){
        const { email, is_active, username } = this.state;
        return(
            <div className="user">
                <h4 className="user__username">{ username }</h4>
                <article dangerouslySetInnerHTML={ {__html: email} } />
                <Link className="user__button" to="/">Все пользователи</Link>
            </div>
        );
    }

}


export default User
