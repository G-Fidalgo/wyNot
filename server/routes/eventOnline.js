const express = require('express');
const router  = express.Router();
const request = require('request-promise');
const EventOnline = require ('../models/EventOnline');

router.post('/new', isAdmin, function (req, res, next) {
        EventOnline.create({
        name: req.body.name,
        description: req.body.description,
        link: req.body.link
    })
    .then(function (event) {
        res.json({eventcreated: true, data: event})
    })
    .catch(function (err) {
        console.log(err);
    });

});

router.get('/', function (req, res, next) {

    EventOnline.find()
        .then(function (event) {
            res.json({eventview: true, data: event})
        })
        .catch(function (err) {
            console.log(err);
        });
  
  });

  router.put('/edit/:id', isAdmin, function (req, res, next) {
    const id = req.params.id
    EventOnline.findByIdAndUpdate(id, {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link
})

    .then(function (event) {
    res.json({eventupdated: true, data: event})
    })

    .catch(function (err) {
        console.log(err);
    });
  
  });

  router.delete('/delete/:id', isAdmin, function (req, res, next) {
    const id = req.params.id
    EventOnline.findOneAndDelete(id)
     .then(function (event) {
      res.json({eventdeleted: true, data: event})
    })
    .catch(function (err) {
        console.log(err);
    });
  
  });



function isAdmin(req, res, next){
    if (req.isAuthenticated() && req.user.isAdmin){
    return next();
    } else{
        res.status(403).json({error: 'Not authorized'})
    }
}



module.exports = router;