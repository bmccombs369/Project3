import React, { Component } from 'react';

class UserWants extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.props.wants.map((want, index) => {
              return (
                <li key={index}>
                  {want.flavor}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserWants;