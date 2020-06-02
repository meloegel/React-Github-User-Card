import React from 'react';
import axios from 'axios';

import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      userText: 'meloegel'
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/meloegel')
      .then(data => {
        this.setState({
          user: data.data
        })
      })
  }

  getUser = () => {
    axios.get(`https://api.github.com/users/${this.state.userText}`)
      .then(res => {
        this.setState({
          user: res.data
        })
      })
  }

  handleChanges = e => {
    this.setState({
      userText: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Information</h1>
        <input
          type='text'
          value={this.state.userText}
          onChange={this.handleChanges}
        />
        <br/>
        <button onClick={this.getUser}>Get User</button>
        <div>
         <UserCard user={this.state.user}/>
        </div>
      </div>
    );
  }
}

export default App;
