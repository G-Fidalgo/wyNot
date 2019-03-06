import React, { Component } from 'react';
import EventServiceP from './Event-Service-P';
import { Redirect, Link } from 'react-router-dom';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', description: '', schedule: undefined, link: '', address: '', price: undefined, events:[]};
        this.service = new EventServiceP();


        this.service.eventListed()
      .then((data) => {
        this.setState({
            events: data,
            error: false,
          redirect: true
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          redirect: false
        });
      })
      }


      deleteEvent = (id) => {
        this.service.eventDelete(id)
        .then(data => this.setState({...this.state, events: data}))
      }

      render() {
        console.log(this.state)
        return (
        <div>
    <h2>EVENTOS CREADOS</h2>
    {
        this.state.events.map(e => 
            <div>
        <p>{e.name}</p>
        <p>{e.description}</p>
        <p>{e.schedule}</p>
        <p>{e.link}</p>
        <p>{e.address}</p>
        <p>{e.price}</p>
        <button onClick={() => this.deleteEvent(e._id)}>{e._id}</button>
        </div>
            )
    }
        </div>
        )
      }

}

export default EventList;