import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsersList extends Component {
  render() {
    return (
      <div>
        <h1>Find a Trade Partner</h1>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li key={index}>
                <Link index={index} to={`/users/${user._id}`}>{user.name}</Link>
                <button onClick={this.props.deleteUser}>X</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;