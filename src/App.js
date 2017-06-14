import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleBattleNetLogin = this.handleBattleNetLogin.bind(this);
  }

  handleBattleNetLogin() {
    console.log('Attempting to Log into Battle.Net')
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
