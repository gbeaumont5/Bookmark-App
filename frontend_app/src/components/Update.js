import React, { Component } from 'react';
import axios from 'axios';

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

console.log('current base URL:', baseURL);

class UpdateWebsite extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: props.name,
        url: props.url
      }; 
    this.handleUpdate = this.handleUpdate.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    }

    handleUpdate(event) {
        this.setState({
          [event.currentTarget.name]: event.currentTarget.value,
          [event.currentTarget.url]: event.currentTarget.value
        });
      }
      async submitUpdate(event) {
        event.preventDefault();
        const baseURL = this.props.baseURL;
        const response = await axios.put(`${baseURL}/websites`, {
          name: this.state.name,
          url: this.state.url
        });
        this.setState({
          name: '',
          url: ''
        });
        this.props.handleUpdateWebsite(response.data);
      }

      render() {
        return (
          <form onSubmit={this.submitUpdate}>
            <label htmlFor='name' />
            <input
              type='text'
              id='name'
              name='name'
              onChange={this.handleUpdate}
              value={this.state.name}
              placeholder='update website name'
            />
            <input
              type='text'
              id='url'
              name='url'
              onChange={this.handleUpdate}
              value={this.state.url}
              placeholder='update website url'
            />
            <input type='submit' value='Update Website' />
          </form>
        );
      }
    }
    
export default UpdateWebsite;
