import React, { Component } from 'react';
import AuthService from './Auth-Service';
import { Redirect, Link } from 'react-router-dom'

import './Login.css'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', redirect: false };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false,
          redirect: true
        }, () => {
            this.props.manageLogin(response)
          // this.props.getUser(response)
        });

       
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true,
          redirect: false
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
    <div className='container1'>
      {this.state.redirect === true ? <Redirect to ="/home"/> : ''}
      <h3>Please, Log In to live the WyNot VIP experience</h3>

      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <label>Email:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
        </fieldset>

        <fieldset>
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
        </fieldset>

        <input type="submit" value="Login" />
      </form>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>)
  }
}

export default Login;