import React, {Component} from 'react';
import axios from 'axios'
import './App.css';


let baseURL = 'http://localhost:3003'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      websites: []
    }
    this.getWebsites = this.getWebsites.bind(this)
  }

  componentDidMount(){
    this.getWebsites()
    
  }
 
  async getWebsites() {
    const response = await axios(`${baseURL}/websites`);
    const data = response.data;
    this.setState({
      websites: data
    })
    
    console.log(data)
  }

  render () {
  return(
    <div>
      <h1>Bookmarks</h1>
      <div>
          {this.state.websites.map(website => {
            return (
              <ul key={website._id}>
                <li>{website.name}</li>
              </ul>
            )
          })}
      </div>
    </div>
  )
  }
}

export default App;
