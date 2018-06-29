import React, { Component } from 'react';
import axios from 'axios';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

class UsersPage extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getUsers();
  };

  getUsers = () => {
    axios.get('/api/users')
      .then((res) => {
        this.setState({ users: res.data });
      }).catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <UsersList
          users={this.state.users}
          deleteUser={this.deleteUser}
        />
        <NewUserForm
          users={this.state.users}
          getUsers={this.getUsers}
        />
      </div>
    );
  };
};

export default UsersPage;