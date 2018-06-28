import React, { Component } from 'react';

class NewUserForm extends Component {
  state = {
    newUser: {
      name: '',
      location: ''
    }
  }

  handleChange = (event) => {
    const userInput = event.target.value;
    const inputName = event.target.name;
    console.log(userInput);
    console.log(inputName);
    const newState = { ...this.state };
    newState[inputName] = userInput;
    this.setState(newState);
  }
  
  render() {
    return (

      <div>
        <h3>Create A User</h3>
        <form>
          <input
            type='text'
            name='name'
            placeholder="User's Name"
            value={this.state.newUser.name}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='location'
            placeholder='Location'
            value={this.state.newUser.location}
            onChange={this.handleChange}
          />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewUserForm;