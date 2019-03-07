const express = require("express");
const router = express.Router();
//const request = require("request-promise");
const Pack = require("../models/Pack");
const axios = require("axios");

// router.get("/", function(req, res, next) {
 
// });

router.post("/new", isAdmin, function(req, res, next) {
  Pack.create({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price
  })
    .then(function() {
      res.json({ });
    })
    .catch(function(err) {
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

router.delete("/delete/:id", isAdmin, function(req, res, next) {
  const id = req.params.id;
  Pack.findOneAndDelete(id)
    .then(function() {
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
