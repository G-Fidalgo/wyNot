import axios from 'axios';

class UserPacksService {
  constructor() {
    let service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/packs/userpacks`,
      withCredentials: true
    });
    this.service = service;
  }
  
  userList = () => {
			return this.service.get('/userpacks').then((data) => {
				return data.data;
			});
		
  }
}

export default UserPacksService;