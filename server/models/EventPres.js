const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const eventPresSchema = new Schema({
  name: String,
  description: String,
  schedule: Date,
  link: String,
  address: String,
  price: Number,
});

const EventPres = mongoose.model('EventPres', eventPresSchema);
module.exports = EventPres;