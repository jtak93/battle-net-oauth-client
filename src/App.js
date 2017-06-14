import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleBattleNetLogin = this.handleBattleNetLogin.bind(this);
  }

  handleBattleNetLogin() {
    console.log('Attempting to Log into Battle.Net')
    axios.get('http://localhost:4000/auth/bnet', { withCredentials: true })
      .then(resp => console.log(resp))
  }

  render() {
    return (
      <div className="App">
        <h1>BATTLE NET OAUTH LOGIN</h1>
        <Button color="blue" onClick={this.handleBattleNetLogin}>
          Battle Net Login
        </Button>
      </div>
    );
  }
}

export default App;
