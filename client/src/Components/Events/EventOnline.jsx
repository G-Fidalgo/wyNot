import React, { Component } from 'react';
import EventServiceO from './Event-Service-P';
import { Redirect, Link } from 'react-router-dom'


class EventOnlineBrand extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '', link: ''};
    this.service = new EventServiceO();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    const link = this.state.link;

    this.service.eventCreate(name, description, link)
      .then(() => {
        this.setState({
            name: name,
            description: description,
            link: link,
          error: false,
          redirect: true
        });
      })
      .catch(error => {
        this.setState({
            name: name,
            description: description,
            link: link,
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
    <div>
      {this.state.redirect === true ? <Redirect to ="/home"/> : ''}
      <h2>EVENTS</h2>
      <h3>Bienvenido Wynot, crea y borra tus próximos eventos</h3>
      <form onSubmit={this.handleFormSubmit}>
      <fieldset>
      <legend>Información del evento</legend>
      <label>Nombre del evento</label>
      <input name='name' type='text' tabindex='1'/>
      <label>Descripción</label>
       <input name='description' type='text' tabindex='2'/>
       <label>Link</label> 
       <input name='link' type='text' tabindex='2'/>
      </fieldset>
        <input type="submit" value="Created event" />
      </form>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>
    )
  }
}

export default EventOnlineBrand;