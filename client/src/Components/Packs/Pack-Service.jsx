import axios from 'axios';

class PackService {
  constructor() {
    let service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/packs`, 
      withCredentials: true
    });
    let serviceStore = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/store`,
    withCredentials: true
  });
    this.service = service;
    this.serviceStore = serviceStore;
  }
  // packCreate = (name, image, price) => {
  //   return this.service.post('/new', {name, image, price})
  //   .then(response => response.data)
  // }
  
  packDelete = (id) => {
    return this.service.post('/delete', {id}) 
  }

  getPack = () => {
    return this.serviceStore.get('/')
    .then((data) => {
			return data.data;
		});
  }

  packSumited = (name, price, pack) => {
    console.log(pack)
    return this.service.post('/new', {name, price, pack})
    .then(response => response.data)
  }

  packListed = () => {
    return this.service.get('/')
    .then(response => response.data)
  }

  searchPack = (search) => {
    if (search === '') {
			return this.service.get('/').then((data) => {
				return data.data;
			});
		} else
			return this.service.get('/search?q=' + search).then((packsFiltred) => {
				return packsFiltred.data;
			});
  }
}

export default PackService;