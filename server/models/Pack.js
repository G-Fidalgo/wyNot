const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const packSchema = new Schema({
  name: String,
  items: Array,
  price: Number,
});

const Pack = mongoose.model('Pack', packSchema);
module.exports = Pack;