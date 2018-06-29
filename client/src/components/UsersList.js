import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class UsersList extends Component {
  deleteUser = (userId) => {
    axios.delete(`/api/users/${userId}`)
      .then(() => {
        this.props.getUsers();
      });
  };

  render() {
    return (
      <div>
        <h1>Find a Trade Partner</h1>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li key={index}>
                <Link index={index} to={`/users/${user._id}`}>{user.name}</Link>
                <button onClick={() => this.deleteUser(user._id)}>X</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;