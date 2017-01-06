import React, { Component } from 'react'
import { Link } from 'react-router'


class User extends Component {
    state = {
        email: '',
        is_active: false,
        username: ''
    };

    loadUser(user_id) {
        fetch(
            `/api/v0/users/${user_id}/`,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + localStorage.token
                }
            }
        ).then(response => response.json()).then(data => {this.setState(data)});
    }

    componentDidMount() {
        this.loadUser(this.props.params['user_id']);
    }

    render(){
        const { email, is_active, username } = this.state;
        return(
            <div className="user">
                <h4 className="user__username">{ username }</h4>
                <article dangerouslySetInnerHTML={ {__html: email} } />
                <Link to="/">Все пользователи</Link>
            </div>
        );
    }

}


export default User
