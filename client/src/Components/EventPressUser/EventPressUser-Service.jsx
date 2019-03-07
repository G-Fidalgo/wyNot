import axios from 'axios';

class EventPressService {
  constructor() {
    let service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/eventPres/eventlist`,
      withCredentials: true
    });
    this.service = service;
  }
  
  eventList = () => {
			return this.service.get('/').then((data) => {
				return data.data;
			});
  }
}

export default EventPressService;