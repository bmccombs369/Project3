import React, { Component } from 'react';
import axios from 'axios';
import UserHaves from './UserHaves';
import UserWants from './UserWants';
import EditUserForm from './EditUserForm';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  text-align: center;
`

const Title = styled.div`
  color: #E75035;
  font-size: 10vw;
`

const UsersLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 3vw;
  color: #FFCD58;
`

const HavesToggle = styled.button`
  background-color: #E09899;
  border: 2px solid #E09899;
  font-size: 2vw;
`

const EditToggle  = styled.button`
  background-color: #E09899;
  border: 2px solid #E09899;
  font-size: 2vw;
  float: right;
`

class UserProfile extends Component {
  state = {
    user: {},
    haves: [],
    wants: [],
    showingHaves: true,
    editUserFormShowing: false,
  };

  componentDidMount() {
    this.getUserHavesAndWants();
  };

  getUserHavesAndWants = () => {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`)
      .then((res) => {
        this.setState({
          user: res.data,
          haves: res.data.haves,
          wants: res.data.wants
        });
      }).catch((err) => {
        console.error(err);
      });
  };

  toggleList = () => {
    const currentList = !this.state.showingHaves;
    this.setState({ showingHaves: currentList });
  };

  toggleEditForm = () => {
    const form = !this.state.editUserFormShowing;
    this.setState({ editUserFormShowing: form });
  }

  render() {
    return (
      <div>
        <Header>
          <Title>
            {this.state.user.name}'s {this.state.showingHaves ? 'Haves' : 'Wants'}
          </Title>
          <UsersLink to='/users'>See More Users</UsersLink>
        </Header>
        <div>
          {this.state.showingHaves ?
            <UserHaves
              haves={this.state.haves}
            /> :
            <UserWants
              wants={this.state.wants}
            />}
        </div>
        <div>
          <HavesToggle onClick={this.toggleList}>
            {this.state.showingHaves ? 'See Wants' : 'See Haves'}
          </HavesToggle>
        </div>
        <div>
          {this.state.editUserFormShowing ? <EditUserForm user={this.state.user} /> : null}
        </div>
        <div>
          <EditToggle onClick={this.toggleEditForm}>
            {this.state.editUserFormShowing ? 'Hide Form' : 'Edit User Information'}
          </EditToggle>
        </div>
      </div>
    );
  };
};

export default UserProfile;