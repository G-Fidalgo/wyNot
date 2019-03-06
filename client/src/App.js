import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import AuthService from "./Components/Auth/Auth-Service";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/NavBar";
import AdminHome from "./Components/AdminHome/AdminHome";

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
    console.log("entro en logOut de App js");
    this.setState({ ...this.state, loggedInUser: null });
    console.log(this.state);
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
    console.log(userObj.username);
  };

  render() {
    console.log(this.state.loggedInUser)
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
            render={props => this.state.loggedInUser && this.state.loggedInUser.admin ? 
              <AdminHome {...props} loggedInUser={this.state.loggedInUser} />
            :<Home {...props} loggedInUser={this.state.loggedInUser} />}
          />
          <Route exact path='/adminHome' render={props => (<AdminHome {...props} loggedInUser={this.state.loggedInUser}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
