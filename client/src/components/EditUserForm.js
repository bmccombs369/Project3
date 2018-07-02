import React, { Component } from 'react';
// import axios from 'axios';

class EditUserForm extends Component {
  state = {
    user: {}
  };

  // componentDidMount() {
  //     const userId = this.props.match.params.userId;
  //     axios.get(`/api/users/${userId}`)
  //       .then((res) => {
  //         this.setState({
  //           user: res.data,
  //         });
  //       }).catch((err) => {
  //         console.error(err);
  //       });
  // }

  handleChange = (event) => {
          const userInput = event.target.value;
          const inputName = event.target.name;
          const newState = { ...this.state };
          newState[inputName] = userInput;
          this.setState(newState);
        };

    handleSubmit = (event) => {

    }

    render() {
      return (
        <div>
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

  export default EditUserForm;