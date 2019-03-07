import React, { Component } from 'react'
import EventOnlineService from './EventOnlineUser-Service';

export default class EventOnlineUser extends Component {
  constructor(props) {
    super(props);
    this.state = {allevents: null};
    this.UserService = new EventOnlineService();
    this.get()
  }

  get = () => {
    this.UserService
      .eventList()
        .then((userEvent) => {
          this.setState({...this.state, allevents: userEvent})
        })
        .catch((err)=>{ console.log('error ocurred while seting state of events list')})
    
  }

  // Si no tira revisar el modelo que viene del back para renderizar los diferentes campos de información
  render() {
    if(this.state.allevents){
        return (
            <div>
                <h1>HAY DATOS</h1>
                {this.state.allevents.map((item, index )=>{
                     return (
                        <div key={index}>
                        
                          <p>{index + 1} event</p>
                          <h1>Tittle: {item.name}</h1>
                          <p>The info of the event: {item.description}</p>
                          <a href={item.link}>Go to the Event Website</a>
                          <p>Where? {item.address}</p>
                          <p>How much does it cost ? {item.price}</p>
                          
                        </div>
                    )
                })}
            </div>
        )
       }else{
           return (
               <div>
                   <h1>Loading...</h1>
               </div>
           )
       }
}
}
