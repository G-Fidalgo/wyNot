import React, { Component } from 'react'
import UserListService from './UserList-Service';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {allusers: null};
    this.UserService = new UserListService();
    this.get()
  }

  get = () => {
    this.UserService
      .userList()
        .then((userPack) => {
          this.setState({...this.state, allusers: userPack})
        })
        .catch((err)=>{ console.log('error ocurred while seting state of user list')})
    
  }
  render() {
        if(this.state.allusers){
            return (
                <div>
                    <h1>HAY DATOS</h1>
                    {this.state.allusers.map((item, index )=>{
                         return (
                            <div key={index}>
                              <p>{index + 1}</p>
                              <p>{item.email}</p>
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
