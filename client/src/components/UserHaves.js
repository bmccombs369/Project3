import React, { Component } from 'react';

class UserHaves extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.props.haves.map((have, index) => {
              return (
                <li key={index}>
                  {have.flavor}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserHaves;