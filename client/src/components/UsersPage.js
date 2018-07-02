import React, { Component } from 'react';
import axios from 'axios';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
body {
  background-color: #5D6578;
}
`

const AddUser = styled.div`
  float: right;
`

const AddUserToggle = styled.button`
  background-color: #FFCD58;
  border: 2px solid #FFCD58;
  font-size: 2vw;
`

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
        <AddUser>
          <div>
            <AddUserToggle onClick={this.toggleNewUserForm}>
              {this.state.newUserFromShowing ? 'Hide Form' : 'Join The Swap Meet'}
            </AddUserToggle>
          </div>
          {this.state.newUserFromShowing
            ? <div>
              <NewUserForm
                getUsers={this.getUsers}
              />
            </div>
            : null}
        </AddUser>
      </div>
    );
  };
};

export default UsersPage;