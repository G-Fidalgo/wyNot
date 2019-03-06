import axios from 'axios';


class EventServiceO {
  constructor() {
    let service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/eventOnline`, // que evento??
      withCredentials: true
    });
    this.service = service;
  }
  eventCreate = (name, description, link) => {
    return this.service.post('/new', {name, description, link})
    .then(response => response.data)
  }
  eventDelete = (id) => {
    return this.service.post('/delete/:id', {id})
    .then(response => response.data)
  }
}

export default EventServiceO;