import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

class NewUserForm extends Component {
  state = {
    name: '',
    location: ''
  };

  handleChange = (event) => {
    const userInput = event.target.value;
    const inputName = event.target.name;
    console.log(userInput);
    console.log(inputName);
    const newState = { ...this.state };
    newState[inputName] = userInput;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/users', this.state)
      .then((res) => {
        console.log(res.data);
      });
  };

  render() {
    return (

      <div>
        <h3>Create A User</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder="User's Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='location'
            placeholder='Location'
            value={this.state.location}
            onChange={this.handleChange}
          />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewUserForm;