import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from '../App';
import LoginPage from '../Containers/LoginPage'


class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={LoginPage}/>
        </div>
      </Router>
    );
  }
}

export default Routes;
