const express = require("express");
const router = express.Router();
//const request = require("request-promise");
const Pack = require("../models/Pack");
const axios = require("axios");

router.get("/", (req, res, next) =>{
  Pack.find({})
  .then((packs)=>{
    res.json({packs})
  })
  .catch((err)=>{
    console.log(err)
  })
 
});

router.post("/new", (req, res, next) => {

  Pack.create({
    name: req.body.name,
    price: req.body.price,
    items: req.body.pack
  })
    .then((pack) =>{
      res.json({ pack});
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/edit/:id", isAdmin, function(req, res, next) {
  const id = req.params.id;
  Pack.findByIdAndUpdate(id, {
    name: req.body.name,
    image: req.body.image,
    price: req.body.price
  })

    .then(function() {
      res.json({});
    })

    .catch(function(err) {
      console.log(err);
    });
});

router.post("/delete", function(req, res, next) {
  console.log('hola')
  const id = req.body.id;
  Pack.findByIdAndRemove(id)
    .then(() =>{
      console.log('entro y soy Inés')
      res.json({ });
    })
    .catch(function(err) {
      console.log(err);
    });
});

function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next();
  } else {
    res.redirect("/login");
  }
}

module.exports = router;
