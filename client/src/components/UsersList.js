import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UsersList extends Component {
  render() {
    return (
      <div>
        <h1>Find a Trade Partner</h1>
        {this.props.users.map((user) => {
          return (
            <ul>
              <li>
                <Link key={user._id} to={`/user/${user._id}`}>{user.name}</Link>
              </li>
            </ul>
          )
        })}
      </div>
    );
  }
}

export default UsersList;