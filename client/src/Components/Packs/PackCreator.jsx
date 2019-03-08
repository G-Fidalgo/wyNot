import React, { Component } from "react";
import PackService from "./Pack-Service.jsx";
// import SearchBar from "../SearchBar/SearchBar"
import ListPack from "./ListPack";
import "./Pack.css";

class Pack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pack: [],
      allItems: null,
      formDisplay: false,
      name: "",
      price: ""
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
  
    if (!this.state.pack.includes(item)) {
      let newState = { ...this.state };
      newState.pack.push(item);
      this.setState(newState);
    }
  };

  deleteFromList = item => {
    console.log('entra', item)
    if (this.state.pack.includes(item)) {
      let newPack = [ ...this.state.pack ];
      newPack = newPack.filter(el => el.id != item.id )
      this.setState({...this.state, pack:newPack});
    }
  }
  showForm = () => {
    let newState = { ...this.state };
    newState.formDisplay = true;
    this.setState(newState);
  };

  searchPack = mysearch => {
    this.PackService.searchPack(mysearch)
      .then(productPack => {
        this.setState({ ...this.state, pack: productPack });
      })
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const price = this.state.price;
    const pack = this.state.pack;

    this.PackService.packSumited(name, price, pack)
      .then(response => {
        this.setState({
          name: "",
          price: "",
          pack: [],
          formDisplay: false
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target.value);
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    const myForm = this.state.formDisplay ? (
      <form className= "form-pack"onSubmit={e => this.handleFormSubmit(e)}>
        <label className="form-pack-item">Nombre</label>
        <input type="text" name="name" onChange={e => this.handleChange(e)} />
        <label className="form-pack-item">Precio</label>
        <input
          type="number"
          name="price"
          onChange={e => this.handleChange(e)}
        />
        <input type="submit" />
      </form>
    ) : (
      <div />
    );

    if (this.state.allItems) {
      return (
        <div>
          {/* <SearchBar FilterName={this.searchPack}/> */}
          <h1>Hola Wynot, crea tus packs</h1>
          <ListPack />
          <div className="pack-list">
            {this.state.pack.map((itemSelected, index) => {
              return (
                <li key={index}>
                  {" "}
                  {itemSelected.title} - {itemSelected.price}
                  {" "}
                  <i class="far fa-trash-alt" onClick={()=> this.deleteFromList(itemSelected)}></i>
                </li>
              );
            })}
          </div>

          <button className="button" onClick={() => this.showForm()}>
            Crear Pack
          </button>
          <div className="form-pack-item">{myForm}</div>

          <form>
            <div className="Item">
              {/* <input onChange={this.handleCheck} defaultChecked={false}> */}
              {this.state.allItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => this.pushPack(item)}
                    className={this.state.pack.includes(item) ? "green" : ""}
                  >
                    <img className="image" src={item.image} alt="img" />
                    <p>{item.price}.00 €</p>
                  </div>
                );
              })}
              {/* </input> */}
            </div>
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