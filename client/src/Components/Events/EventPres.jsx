import React, { Component } from 'react';
import EventServiceP from './Event-Service-P';
import { Redirect, Link } from 'react-router-dom';
import EventList from './EventList';


class EventPresBrand extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '', schedule: undefined, link: '', address: '', price: undefined, events:[]};
    this.service = new EventServiceP();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    const schedule = this.state.schedule;
    const link = this.state.link;
    const address = this.state.address;
    const price = this.state.price;

    this.service.eventCreate(name, description, schedule, link, address, price)
      .then((data) => {
        this.setState({...this.state,
            name: "",
            description: "",
            schedule: "",
            link: "",
            address: "",
            price: "",
            events: data,
          error: false,
          redirect: true
        });
      })
      .catch(error => {
        this.setState({
            name: name,
            description: description,
            schedule: schedule,
            link: link,
            address: address,
            price: price,
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
      {this.state.redirect === true ? "" : ''}
      <h2>EVENTS</h2>
      <h3>Bienvenido Wynot, crea y borra tus próximos eventos</h3>
      <form onSubmit={this.handleFormSubmit}>
      <fieldset>
      <legend>Información del evento</legend>
      <label>Nombre del evento</label>
      <input name='name' type='text' tabIndex='1' onChange={e => this.handleChange(e)}/>
      <label>Descripción</label>
       <input name='description' type='text' tabIndex='2' onChange={e => this.handleChange(e)}/>
       <label>Horario</label>
       <input name='schedule' type='text' tabIndex='2'onChange={e => this.handleChange(e)}/>
       <label>Link</label> 
       <input name='link' type='text' tabIndex='2'onChange={e => this.handleChange(e)}/>
       <label>Dirección</label>
       <input name='address' type='text' tabIndex='2'onChange={e => this.handleChange(e)}/>
       <label>Precio</label>
       <input name='price' type='text' tabIndex='2'onChange={e => this.handleChange(e)}/>
      </fieldset>
      <input type="submit" value="Created event" />
      </form>

      <h1>{this.state.error ? 'Error' : ''}</h1>

      < EventList />
    </div>
    )
  }
}

export default EventPresBrand;