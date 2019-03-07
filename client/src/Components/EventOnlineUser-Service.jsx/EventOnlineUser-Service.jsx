import axios from 'axios';

class EventOnlineService {
  constructor() {
    let service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/eventOnline/eventOnlinelist`,
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

export default EventOnlineService;