import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import UsersPage from './components/UsersPage'
import UserProfile from './components/UserProfile';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/users' component={UsersPage} />
          <Route path='/users/:userId' component={UserProfile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
