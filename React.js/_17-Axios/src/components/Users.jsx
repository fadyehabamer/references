import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

export default class Users extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response.data)
                this.setState({
                    users: response.data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>
                    Axios Data from Json PlaceHolder
                </h1>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Email</th>
                    </tr>
                    {this.state.users.map(user => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}


                </table>
            </div>
        );
    }
}
