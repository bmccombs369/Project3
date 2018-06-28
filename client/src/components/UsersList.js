import React, { Component } from 'react';

class UsersList extends Component {
  render() {
    return (
      <div>
        <h1>Find a Trade Partner</h1>
        {this.props.users.map((user) => {
          return (
            <ul>
              <li>
                {user.name}
              </li>
            </ul>
          )
        })}
      </div>
    );
  }
}

export default UsersList;