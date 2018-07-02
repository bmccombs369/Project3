import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.div`
  color: #C0C28F;
  text-align: center;
  font-size: 10vw;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #E75035;
  font-size: 8vw;
`

const DeleteButton = styled.button`
  font-size: 8px;
  color: #E75035;
`

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
        <Title>Find a Trade Partner</Title>
        <ul>
          {this.props.users.map((user, index) => {
            return (
              <li key={index}>
                <StyledLink index={index} to={`/users/${user._id}`}>{user.name}</StyledLink>&ensp;
                <DeleteButton onClick={() => this.deleteUser(user._id)}>X</DeleteButton>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;