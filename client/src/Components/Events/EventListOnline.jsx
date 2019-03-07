import React, { Component } from 'react';
import EventServiceO from './Event-Service-O';
// import { Redirect, Link } from 'react-router-dom';

class EventListOnline extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', description: '', link: '', events:[]};
        this.service = new EventServiceO();


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
        <p>{e.link}</p>
        <button onClick={() => this.deleteEvent(e._id)}>{e._id}</button>
        </div>
            )
    }
 
        </div>
        )
      }

}

export default EventListOnline;