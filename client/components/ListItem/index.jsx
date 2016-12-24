import React from 'react'
import { Link } from 'react-router'
// import { format_date } from '../../utils'


export default ({ user }) => (
    <tr>
        <td>
            { user.id }
        </td>
        <td>
            <Link to={`/api/v0/users/${user.id}`}>{ user['email'] }</Link>
        </td>
    </tr>
)
