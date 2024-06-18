const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  service: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  provider: { type: String, required: true },
  duration: { type: String, required: true },
  ratings: { type: Number, required: true },
  category: { type: String, required: true },
  contact_email: { type: String, required: true }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
