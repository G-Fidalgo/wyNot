import React, { Component } from "react";
import PackService from "./Pack-Service.jsx";
// import SearchBar from "../SearchBar/SearchBar"
import ListPack from "./ListPack"

class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack: [],
      allItems: null,
      formDisplay: false,
      name: '',
      price: ''
    };
    this.PackService = new PackService();
    this.get();
  }

  get = () => {
    this.PackService.getPack()
      .then(productPack => {
        this.setState({ ...this.state, allItems: productPack });
      })
      .catch(err => console.log(err));
  };

  // handleCheck = (e) =>{

  //     // console.log(e.className)
  //     console.log(e.target)

  // }

  pushPack = item => {
    let newState = { ...this.state };
    newState.pack.push(item);
    this.setState(newState);
  };

  showForm = () => {
let newState = {...this.state};
newState.formDisplay = true
this.setState(newState)
  }

  searchPack = mysearch => {
    this.PackService.searchPack(mysearch)
      .then(productPack => {
        this.setState({ ...this.state, pack: productPack });
      })
      .catch(err => console.log(err));
  };


handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const price = this.state.price;
    const pack = this.state.pack
    
    this.PackService.packSumited(name, price, pack)
    .then( response => {
        this.setState({
            name: "", 
            price: "",
            pack: [],
            formDisplay: false
        });
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    console.log(event.target.value)
    this.setState({...this.state, [name]: value});
  }

 

  render() {
      const myForm = this.state.formDisplay ? (
      <form onSubmit={e => this.handleFormSubmit(e)}>
        <label>Nombre</label>
          <input type="text" name="name"  onChange={e => this.handleChange(e)}/>
          <label>Precio</label>
          <input type="number" name="price"  onChange={e => this.handleChange(e)}/>
          <input type="submit"/>
      </form>
      ):(<div/>)
      
    
    if (this.state.allItems) {
      return (
        <div>
        {/* <SearchBar FilterName={this.searchPack}/> */}
          <h1>HAY DATOS</h1>
            <ListPack />
          <div>
            {this.state.pack.map((itemSelected, index) => {
              return (
                <li key={index}>
                  {" "}
                  {itemSelected.title} - {itemSelected.price}
                </li>
              );
            })}
          </div>

          <button onClick={()=> this.showForm()}>Crear Pack</button>
          <div>
          {myForm}
          </div>

          <form className="Item">
            {/* <input onChange={this.handleCheck} defaultChecked={false}> */}
            {this.state.allItems.map((item, index) => {
              return (
                <div key={index} onClick={() => this.pushPack(item)}>
                  <img src={item.image} alt="img" />
                  <p>{item.price}</p>
                </div>
              );
            })}
            {/* </input> */}
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default Pack;
