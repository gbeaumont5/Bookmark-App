import React, { Component } from 'react';
import axios from 'axios';
import NewForm from './components/NewForm.js';
import UpdateWebsite from './components/Update';
import './App.css';

let baseURL = 'http://localhost:3003';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      websites: []
    };
    this.getWebsites = this.getWebsites.bind(this);
    this.handleAddWebsite = this.handleAddWebsite.bind(this);
    this.deleteWebsite = this.deleteWebsite.bind(this);
  }

  componentDidMount() {
    this.getWebsites();
  }

  async getWebsites() {
    const response = await axios(`${baseURL}/websites`);
    const data = response.data;
    this.setState({
      websites: data
    });

    console.log(data);
  }

  handleAddWebsite(website) {
    const copyWebsites = [...this.state.websites];
    copyWebsites.unshift(website);
    this.setState({
      websites: copyWebsites
    });
  }

  async deleteWebsite(id) {
    await axios.delete(`${baseURL}/websites/${id}`);
    const filteredWebsites = this.state.websites.filter(website => {
      return website._id !== id;
    });
    this.setState({
      websites: filteredWebsites
    });
  }

  render() {
    return (
      <div className='app_body'>
        <h1>Bookmarks</h1>
        <NewForm baseURL={baseURL} handleAddWebsite={this.handleAddWebsite} />
        <div>
          {this.state.websites.map(website => {
            return (
              <ul key={website._id}>
                <a href={website.url}>
                  <li>{website.name}</li>
                </a>
                <p onClick={() => this.deleteWebsite(website._id)}>Delete</p>
                <UpdateWebsite
                  baseURL={baseURL}
                  updateWebsite={this.updateWebsite}
                />
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
