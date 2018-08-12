var mongoose = require('mongoose');

var PersonSchema = new mongoose.Schema({
  car_no: String,
  owner_name: String,
  purchase_date: { type: Date, default: Date.now},
  description: String,
  last_service: { type: Date, default: Date.now},
  owner_email: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Person', PersonSchema);
