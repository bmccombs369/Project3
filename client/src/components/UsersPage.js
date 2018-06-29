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

  deleteUser = (user) => {
    // const users = [...this.state.users];
    // users.splice(userToDelete, 1);
    // this.setState({users});
    const userId = this.state.users._id;
    console.log(userId)
    axios.delete(`/api/users/${userId}`)
      .then(() => {
        this.componentWillMount();
      });
  };

  render() {
    return (
      <div>
        <UsersList
          users={this.state.users}
          deleteUser={this.deleteUser}
        />
        <NewUserForm users={this.state.users} />
      </div>
    );
  };
};

export default UsersPage;