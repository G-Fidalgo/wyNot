const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const eventPreSchema = new Schema({
  name: String,
  description: String,
  schedule: Date,
  link: String,
  address: String,
  price: Number,
});

const EventPre = mongoose.model('EventPre', eventPreSchema);
module.exports = EventPre;