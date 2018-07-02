import React, { Component } from 'react';
import axios from 'axios';

class NewUserForm extends Component {
  state = {
    name: '',
    location: ''
  };

  handleChange = (event) => {
    const userInput = event.target.value;
    const inputName = event.target.name;
    const newState = { ...this.state };
    newState[inputName] = userInput;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/users', this.state)
      .then((res) => {
        console.log(res.data);
        this.props.getUsers();
      });
  };

  render() {
    return (

      <div>
        <h3>Create A User</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='name'
              placeholder="User's Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              name='location'
              placeholder='Location'
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewUserForm;