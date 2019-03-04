require('dotenv').config()

const express = require('express');
const router  = express.Router();
const request = require('request-promise');

/* GET home page */
router.get('/', function (req, res, next) {

  let url = `https://${process.env.shopifyAPI}:${process.env.shopifyPassword}@wynotwatches2.myshopify.com/admin/products.json`;

  let options = {
      method: 'GET',
      uri: url,
      json: true,
  };

  request(options)
      .then(function (parsedBody) {
          console.log(parsedBody);
          res.json(parsedBody);
      })
      .catch(function (err) {
          console.log(err);
          res.json(err);
      });


});



module.exports = router;
