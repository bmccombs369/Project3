import React, { Component } from 'react';
import axios from 'axios';
import UserHaves from './UserHaves';
import UserWants from './UserWants';
import EditUserForm from './EditUserForm';

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
        <h1>
          {this.state.user.name}'s {this.state.showingHaves ? 'Haves' : 'Wants'}
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
        <div>
          {this.state.editUserFormShowing ? <EditUserForm user={this.state.user} /> : null}
        </div>
        <div>
          <button onClick={this.toggleEditForm}>
            {this.state.editUserFormShowing ? 'Hide Form' : 'Edit User Information'}
          </button>
        </div>
      </div>
    );
  };
};

export default UserProfile;