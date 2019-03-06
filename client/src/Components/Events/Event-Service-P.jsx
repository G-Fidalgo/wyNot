import axios from 'axios';

class EventServiceP {
  constructor() {
    let service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/eventPres`,
      withCredentials: true
    });
    this.service = service;
  }
  eventCreate = ( name, description, schedule, link, address, price) => {
    return this.service.post('/new', {name, description, schedule, link, address, price})
    .then(() => this.eventListed())
  }
  
  eventDelete = (id) => {
    return this.service.post(`/delete/${id}`)
    .then(() => this.eventListed())
  }

  eventListed = () => {
    return this.service.get('/')
    .then(response => response.data)
  }

}

export default EventServiceP;