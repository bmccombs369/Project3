import React, { Component } from 'react';
import axios from 'axios';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

class UsersPage extends Component {
  state = {
    users: [],
    newUserFromShowing: false
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

  toggleNewUserForm = () => {
    const form = !this.state.newUserFromShowing;
    this.setState({ newUserFromShowing: form });
  };

  render() {
    return (
      <div>
        <div>
          <UsersList
            users={this.state.users}
            deleteUser={this.deleteUser}
            getUsers={this.getUsers}
          />
        </div>
        <div>
          <button onClick={this.toggleNewUserForm}>
            {this.state.newUserFromShowing ? 'Hide Form' : 'Add New User'}
          </button>
        </div>
        {this.state.newUserFromShowing
          ? <div>
            <NewUserForm
              getUsers={this.getUsers}
            /> </div>
          : null}
      </div>
    );
  };
};

export default UsersPage;