import axios from 'axios';

class UserListService {
  constructor() {
    let service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/userlist`,
      withCredentials: true
    });
    this.service = service;
  }
  
  userList = () => {
			return this.service.get('/userlist').then((data) => {
				return data.data;
			});
		
  }
}

export default UserListService;