import React, { Component } from 'react';
import axios from 'axios';
import UserHaves from './UserHaves';
import UserWants from './UserWants';

class UserProfile extends Component {
  state = {
    user: {},
    haves: [],
    showingHaves: true
  };

  componentDidMount() {
    this.getUserAndHaves();
  };

  getUserAndHaves = () => {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`)
      .then((res) => {
        this.setState({
          user: res.data,
          haves: res.data.haves
        });
      }).catch((err) => {
        console.error(err);
      });
  };

  toggleList = () => {
    const currentList = !this.state.showingHaves;
    this.setState({ showingHaves: currentList });
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.user.name}'s Profile
        </h1>
          <div>
            <UserHaves />
            <UserWants />
          </div>
      </div>
    );
  };
};

export default UserProfile;