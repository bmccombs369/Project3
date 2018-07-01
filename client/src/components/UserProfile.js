import React, { Component } from 'react';
import axios from 'axios';
import UserHaves from './UserHaves';
import UserWants from './UserWants';

class UserProfile extends Component {
  state = {
    user: {},
    haves: [],
    wants: [],
    showingHaves: true
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

  render() {
    return (
      <div>
        <h1>
          {this.state.user.name}'s Profile
        </h1>
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
          <button onClick={this.toggleList}>
            {this.state.showingHaves ? 'See Wants' : 'See Haves'}
          </button>
        </div>
      </div>
    );
  };
};

export default UserProfile;