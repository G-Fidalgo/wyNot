import React, { Component } from 'react'
import UserPacksService from './UserPacks-Service'

export default class UserPacks extends Component {
  constructor(props) {
    super(props);
    this.state = {allpacks: null};
    this.UserService = new UserPacksService();
    this.get()
  }

  get = () => {
    this.UserService
      .userList()
        .then((userPack) => {
          this.setState({...this.state, allpacks: userPack})
        })
        .catch((err)=>{ console.log('error ocurred while seting state of user list')})
    
  }

  render() {
    if(this.state.allpacks){
        return (
            <div>
                <h1>HAY DATOS</h1>
                {this.state.allpacks.map((item, index )=>{
                     return (
                        <div key={index}>
                          <p>Pack Number: {index + 1}</p>
                          <p>Pack : {item.name}</p>
                          <p>Pack Price: {item.price}</p>

                          <p>----The pack is made of ----</p>

                          {this.state.allpacks[index].items.map((item, index)=>{
                            return (
                            <div key={index}>
                            <p>Item Number: {index + 1}</p>
                            <p>Product name : {item.title}</p>
                            <img src={item.image} alt='img'></img>
                            </ div>
                            )
                          })}
                          
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
