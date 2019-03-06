import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";



export default class AdminHome extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedInUser: props.loggedInUser };
  }

  render() {
    if (this.state.loggedInUser.admin){
      return (
        <div>
          <div>
            <h1>
              Welcome to the admin page of WyNot VIP Page
            </h1>
            <div>
              {" "}
              <Link to="/userlist">User List</Link>
            </div>
            <div>
              <Link to="/createpack">Create a Pack</Link>
            </div>
            <div>
              <Link to="/createevent">Create Events</Link>
            </div>
          </div>
        </div>
      )
    } else {

      return(
        <Redirect to='/login'/>
      )
      
      
    }
    
  }
}
