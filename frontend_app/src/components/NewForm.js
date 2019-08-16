import React, { Component } from 'react';
import axios from 'axios';

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

console.log('current base URL:', baseURL);

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      [event.currentTarget.url]: event.currentTarget.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/websites`, {
      name: this.state.name,
      url: this.state.url
    });
    this.setState({
      name: '',
      url: ''
    });
    this.props.handleAddWebsite(response.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name' />
        <input
          type='text'
          id='name'
          name='name'
          onChange={this.handleChange}
          value={this.state.name}
          placeholder='add a website name'
        />
        <input
          type='text'
          id='url'
          name='url'
          onChange={this.handleChange}
          value={this.state.url}
          placeholder='add a website url'
        />
        <input type='submit' value='Add a Website' />
      </form>
    );
  }
}

export default NewForm;
