import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.getUser();
  };

  getUser = () => {
    const userId = this.props.match.params.userId;
    axios.get(`/api/users/${userId}`)
      .then((res) => {
        this.setState({ user: res.data });
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
        <ul>
          {this.state.user.haves.map((have, index) => {
            return (
              <li>
                {have.flavor}
              </li>
            )
          })}
        </ul>
        {/* {this.test()} */}
      </div>
    );
  };
};

export default UserProfile;