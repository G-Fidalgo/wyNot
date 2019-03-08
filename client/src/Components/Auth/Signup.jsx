import React, { Component } from 'react';
import AuthService from './Auth-Service';
import {Link} from 'react-router-dom'

import './Signup.css'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: ''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: ""
        });
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({...this.state, [name]: value});
  }
      
  
  render(){
    return(
      <div className='container2'>
        <div className='container2'>
          <h2>Are your ready for the Sign Up? </h2>
          <p>We just need your email to keep in touch with you</p>
        <form onSubmit={this.handleFormSubmit} className='container2'>
          <label>Email:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/"}> Login</Link>
        </p>

        </div>
        
  
      </div>
    )
  }
}

export default Signup;