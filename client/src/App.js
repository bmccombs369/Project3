import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import UsersPage from './components/UsersPage'
import UserProfile from './components/UserProfile';


class App extends Component {
  render() {
    const UsersPageComponent = (props) => {
      return <UsersPage {...props} />
    }
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/users' render={UsersPageComponent} />
          <Route path='/users/:userId' component={UserProfile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
