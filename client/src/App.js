import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import UsersPage from './components/UsersPage'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/users' component={UsersPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
