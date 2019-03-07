const express = require("express");
const User = require("../models/User");
const userList = express.Router()


userList.get('/userlist', (req, res, next)=>{
  User.find({})
    .then(function (userList){
      let userListMapped = userList.map((user)=>{
        return {
          email: user.username
        }
      })
      res.json(userListMapped)
    }
    )
    .catch((err)=>{
      console.log('An error ocurred while exporting the user list' + err)
    })
})

module.exports = userList;