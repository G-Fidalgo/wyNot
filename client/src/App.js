import React, { Component } from 'react';
import './App.css';


import { Switch, Route } from "react-router-dom";

import AuthService from "./Components/Auth/Auth-Service";
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import EventPresBrand from './Components/Events/EventPres';
import EventOnlineBrand from './Components/Events/EventOnline';
import PackCreator from './Components/Packs/PackCreator';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

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
    
  
    return (
      <div className="App">
       <Switch>
         <Route exact path='/' component={Login}/>
         <Route exact path='/singup' component={Signup} />
         <Route exact path='/Events/EventPres' component={EventPresBrand}/>
         <Route exact path='/Events/EventOnline' component={EventOnlineBrand}/>
         <Route exact path='/Packs' component={PackCreator}/>
       </Switch>
      </div>
    );
  }
}

export default App;
