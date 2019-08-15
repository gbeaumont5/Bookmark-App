const mongoose = require('mongoose');

const websitesSchema = mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
});

module.exports = mongoose.model('Websites', websitesSchema);
