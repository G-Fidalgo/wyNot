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
              <Link to="/Packs">Create a Pack</Link>
            </div>
            <div>
              <Link to="/Events/EventPres">Create Presential Event</Link>
            </div>
            <div>
              <Link to="/Events/EventOnline">Create Online Event</Link>
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
