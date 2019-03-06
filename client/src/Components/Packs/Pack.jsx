import React, { Component } from 'react';
import PackService from './Event-Service-P';
import { Redirect, Link } from 'react-router-dom'


class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', image: '', price: Number};
    this.service = new PackService();
  }

  handleFormSubmit = (event) => { // funcion de axios???
    event.preventDefault();
    const name = this.state.name;
    const price = this.state.price;
    const image = this.state.image

    this.service.packCreate(name, image, price)
      .then(() => {
        this.setState({
            name: name,
            image: image,
            price: price,
          error: false,
          redirect: true
        });
      })
      .catch(error => {
        this.setState({
            name: name,
            image: image,
            price: price,
          error: true,
          redirect: false
        });
      })

      


  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return 
    // <div>
    //   <SearchBar FilterName={this.searchBeer} />
    // </div>
  }
}

export default Pack;