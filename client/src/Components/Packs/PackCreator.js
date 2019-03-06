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
                    {this.state.allItems.map((item, index )=>{
                         return (
                            <div>
                             <img src={item.image}/>
                             <checkbox/>
                            </div>
                        )
                    })}
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
    
