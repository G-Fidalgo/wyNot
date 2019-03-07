 import React, { Component } from 'react';
    import PackService from './Pack-Service.jsx';

    
    class Pack extends Component {
        constructor(props) {
            super(props);
            this.state = {
                pack: [],
                allItems: null

            };
            this.PackService = new PackService();
            this.get();
        }
    
        get = () => {
            this.PackService
                .getPack()
                .then((productPack) => {
                    this.setState({...this.state, allItems: productPack});
                })
                .catch((err) => console.log(err));
        };

        handleCheck = (e) =>{

            // console.log(e.className)
            console.log(e.target)
            
            
        }
    
        search = (mysearch) => {
            this.PackService.searchPack(mysearch)
                .then((productPack) => {
                    this.setState({ ...this.state, pack: productPack});
                })
                .catch((err) => console.log(err))
        };

        

    
        render() {
            console.log(this.state.allItems)
           if(this.state.allItems){
            return (
                <div>
                    <h1>HAY DATOS</h1>
                        <form>
                            <input onChange={this.handleCheck} defaultChecked={false}>
                            {this.state.allItems.map((item, index )=>{
                         return (
                            <div key={index}>
                             <img src={item.image} alt='img'/>
                             <p>{item.price}</p>
                             
                            </div>
                        )
                    })}
                            </input>

                        </form>


                    
                </div>
            )
           }else{
               return (
                   <div>
                       <h1>Loading...</h1>
                   </div>
               )
           }
        }
    }

    export default Pack;
    
