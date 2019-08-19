import React, { Component } from 'react';
import axios from 'axios';

let baseURL = 'http://localhost:3003';

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
      name: this.props.name,
      url: this.props.url
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    }

    handleUpdate(event) {
      const {name, value} = event.target
        this.setState({
          [name]: value
        });
      }


      async submitUpdate(event) {
        event.preventDefault();
       
       
        const response = await axios.put(`${baseURL}/websites`, {
          name: this.state.name,
          url: this.state.url
        });
    
        this.setState({
          name: '',
          url: ''
        });

        this.props.handleUpdateWebsite(response.data);
        window.location.reload()
      }



    render() {
    return (
      <form className='top-form' onSubmit={this.submitUpdate}>
        <label htmlFor='name' />
        <input
          type='text'
          id='name'
          name='name'
          onChange={this.handleChange}
          value={this.state.name}
          placeholder='Edit Website Name'
        />
        <input
          type='text'
          id='url'
          name='url'
          onChange={this.handleChange}
          value={this.state.url}
          placeholder= 'Edit Website URL'
        />
        <input type='submit' value='Edit' />
      </form>
    );
  }
}


    

    

export default UpdateWebsite;
