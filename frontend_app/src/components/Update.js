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

export default UpdateWebsite;
