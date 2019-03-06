import axios from 'axios';

class PackService {
  constructor() {
    let service = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/pack`, //SHOPIFY
      withCredentials: true
    });
    let serviceStore = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/store`, //SHOPIFY
    withCredentials: true
  });
    this.service = service;
    this.serviceStore = serviceStore;
  }
  packCreate = (name, image, price) => {
    return this.service.post('/new', {name, image, price})
    .then(response => response.data)
  }
  
  packDelete = (id) => {
    return this.service.post('/delete/:id', {id})
    .then(response => response.data)
  }

  getPack = () => {
    return this.serviceStore.get('/')
    .then((data) => {
			return data.data;
		});
  }

  searchPack = (search) => {
    if (search === '') {
			return this.service.get('/').then((data) => {
				return data.data;
			});
		} else
			return this.service.get('/packs/search?q=' + search).then((packsFiltred) => {
				return packsFiltred.data;
			});
  }
}

export default PackService;