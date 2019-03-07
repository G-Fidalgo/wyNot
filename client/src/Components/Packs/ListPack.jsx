import React, { Component } from 'react';
import PackService from '../Packs/Pack-Service';
// import { Redirect, Link } from 'react-router-dom';

class PackList extends Component {
    constructor(props) {
        super(props);
        this.state = {pack:null};
        this.service = new PackService();
        this.getPacks();
      }

      getPacks = () => {
        this.service.packListed()
        .then((data) => {

          this.setState({...this.state,
              pack: data.packs,
              error: false
          });
        })
        .catch(error => {
          console.log(error)
        })
      }
      deletePack = (id) => {
        this.service.packDelete(id)
        .then( () =>{ 
            this.service.packListed()
            .then((data)=>{
                this.setState({...this.state,
                    pack: data.packs,
                    error: false
                });
            })
        })
      }

    render() {
        this.getPacks();
        console.log(this.state.pack)
        if(this.state.pack){
            
            return (
                <div>
                    <h2>EVENTOS CREADOS</h2>
                    {
                        this.state.pack.map((e, i) =>
                            <div key={i}>
                                <p>{e.name}</p>
                                <p>{e.price}</p>
    
                                <button onClick={() => this.deletePack(e._id)}>DELETE PACK</button>
                            </div>
                        )
                    }
    
                </div>
            )
        }else{
            return(
                <h1>LOADING...</h1>
            )
        }
    }

}

export default PackList;