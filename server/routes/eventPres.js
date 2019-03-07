const express = require('express');
const router  = express.Router();
const request = require('request-promise');
const EventPres = require ('../models/EventPres');

router.post('/new', function (req, res, next) {

        console.log(req.body)
        EventPres.create({ 
        name: req.body.name,
        description: req.body.description,
        schedule: req.body.schedule,
        link: req.body.link,
        address: req.body.address,
        price: req.body.price
    })
    .then(function (event) {
        res.json({eventcreated: true, data: event})
    })
    .catch(function (err) {
        console.log(err);
    });

});

router.get('/', function (req, res, next) {

    EventPres.find()
        .then(function (event) {
            console.log(event)
            res.json(event)
        })
        .catch(function (err) {
            console.log(err);
        });
  
  });

  router.put('/edit/:id', isAdmin, function (req, res, next) {
    const id = req.params.id
    EventPres.findByIdAndUpdate(id, {
    name: req.body.name,
    description: req.body.description,
    schedule: req.body.schedule,
    link: req.body.link,
    address: req.body.address,
    price: req.body.price
})

    .then(function (event) {
    res.json({eventupdated: true, data: event})
    })

    .catch(function (err) {
        console.log(err);
    });
  
  });

  router.post('/delete/:id', function (req, res, next) {
    const id = req.params.id
    console.log(id)
    EventPres.findOneAndDelete(id)
     .then(function (event) {
      res.json({eventdeleted: true, data: event})
    })
    .catch(function (err) {
        console.log(err);
    });
  
  });

  router.get('/eventlist', function(req, res, next){
    EventPres.find()
        .then(function(events){
            res.json(events)
        })
        .catch(err => console.log(err))
  })



function isAdmin(req, res, next){
    if (req.isAuthenticated() && req.user.isAdmin){
    return next();
    } else{
        res.redirect('/login')
    }
}



module.exports = router;