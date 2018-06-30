import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
  state = {
    user: {},
    haves: []
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

  // test = () => {
  //   console.log(this.state.user.haves)
  // }

  render() {
    return (
      <div>
        {/* {this.test()} */}
      </div>
    );
  };
};

export default UserProfile;