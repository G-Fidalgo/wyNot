import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import AuthService from "./Components/Auth/Auth-Service";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/NavBar";
import AdminHome from "./Components/AdminHome/AdminHome";
import EventPresBrand from "./Components/Events/EventPres";
import EventOnlineBrand from "./Components/Events/EventOnline";
import PackCreator from "./Components/Packs/PackCreator";
import UserList from "./Components/UserList/UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  _manageLogin = user => {
    this.setState({ ...this.state, loggedInUser: user });
  };

  _manageLogOut = x => {
    this.setState({ ...this.state, loggedInUser: null });
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          loggedInUser={this.state.loggedInUser}
          manageLogOut={this._manageLogOut}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login {...props} manageLogin={this._manageLogin} />
            )}
          />
          <Route exact path="/singup" component={Signup} />
          <Route
            exact
            path="/home"
            render={props => (
              <Home {...props} loggedInUser={this.state.loggedInUser} />
            )}
          />

          <Route exact path='/userlist' component={UserList}  />

          <Route
            exact
            path="/adminHome"
            render={props => (
              <AdminHome {...props} loggedInUser={this.state.loggedInUser} />
            )}
          />

          <Route exact path="/Events/EventPres" component={EventPresBrand} />
          <Route
            exact
            path="/Events/EventOnline"
            component={EventOnlineBrand}
          />
          <Route exact path="/Packs" component={PackCreator} />
        </Switch>
      </div>
    );
  }
}

export default App;
