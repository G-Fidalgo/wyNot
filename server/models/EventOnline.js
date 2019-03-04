const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const eventOnlineSchema = new Schema({
  name: String,
  description: String,
  link: String
});

const EventOnline = mongoose.model('EventOnline', eventOnlineSchema);
module.exports = EventOnline;
