import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import './NavBar.css'
import logo from "./logo.png"
import AuthService from "../Auth/Auth-Service";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: props.loggedInUser, redirect: false };
    this.service = new AuthService();
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["loggedInUser"] });
  }

  handleLogout = e => {
    this.service.logout();
    this.props.manageLogOut(null);
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <div className='container'>
          <a href='https://wynotwatches.com/' className='logo'>
                <img src={logo} alt="WyNot logo" />
              </a>

              <div className='buttons margin'>
              <div className='Logout'>
              <Link to="/">
            <button onClick={this.handleLogout}>Logout</button>
          </Link>
              </div>
              

          <p className='button1'>
            <Link to={"/home"}> Home</Link>
          </p>
          <p className='button2'>
            <Link to={"/profile"}>Profile</Link>
          </p>
              </div>


              
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <div className='container'>
              <a href='https://wynotwatches.com/' className='logo'>
                <img src={logo} alt="WyNot logo" />
              </a>
              <div className='buttons'>
                <div className='button1'>
                  <Link to="/singup">Signup</Link>
                </div>
                <div className='button2'>
                  <Link to="/">Login</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
