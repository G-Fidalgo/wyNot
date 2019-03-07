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
          console.log(parsedBody)

          let parsedBodyMapped = parsedBody.products.map((product) => {
              return {
                type: product.product_type,
                image: product.image.src,
                price: +product.variants[0].price,
                id: product.id,
                title: product.title
              }
          })
          .filter((product) => {
            return product.type !== "Box"
          })

          res.json(parsedBodyMapped);
      })
      .catch(function (err) {
          console.log(err);
          res.json(err);
      });


});



module.exports = router;
